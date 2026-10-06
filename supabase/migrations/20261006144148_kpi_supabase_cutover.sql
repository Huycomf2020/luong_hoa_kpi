-- All data access passes through authenticated Edge API; no browser table grants.
create table public.kpi_tables(table_name text primary key, headers jsonb not null);
create table public.kpi_records(table_name text not null references public.kpi_tables, row_no integer not null check(row_no>=2), data jsonb not null, primary key(table_name,row_no));
create index kpi_records_person on public.kpi_records(table_name,(data->>'email'),(data->>'period'));
create index kpi_records_id on public.kpi_records(table_name,(data->>'id'));
create index kpi_records_task on public.kpi_records(table_name,(data->>'taskId'));
create table public.kpi_state(id boolean primary key default true check(id), revision bigint not null default 1, source_id text not null, imported_at timestamptz not null default now());
create table public.kpi_credentials(email text primary key, salt text not null default '', password_hash text not null default '', iterations integer not null default 600000, version integer not null default 0, bridge boolean not null default false);
create table public.kpi_sessions(token_hash text primary key, email text not null references public.kpi_credentials, version integer not null, expires_at timestamptz not null);
create index kpi_sessions_email on public.kpi_sessions(email);
create index kpi_sessions_expiry on public.kpi_sessions(expires_at);
create table public.kpi_cache(key text primary key,value text not null,expires_at timestamptz not null);
create table public.kpi_rate_limits(key text primary key, count integer not null, until_at timestamptz not null);
create table public.kpi_import_audit(id bigint generated always as identity primary key, at timestamptz not null default now(), source_id text not null, counts jsonb not null, checksums jsonb not null);
alter table public.kpi_tables enable row level security;
alter table public.kpi_records enable row level security;
alter table public.kpi_state enable row level security;
alter table public.kpi_credentials enable row level security;
alter table public.kpi_sessions enable row level security;
alter table public.kpi_cache enable row level security;
alter table public.kpi_rate_limits enable row level security;
alter table public.kpi_import_audit enable row level security;
revoke all on public.kpi_tables,public.kpi_records,public.kpi_state,public.kpi_credentials,public.kpi_sessions,public.kpi_cache,public.kpi_rate_limits,public.kpi_import_audit from anon,authenticated;
grant all on public.kpi_tables,public.kpi_records,public.kpi_state,public.kpi_credentials,public.kpi_sessions,public.kpi_cache,public.kpi_rate_limits,public.kpi_import_audit to service_role;
create function public.kpi_snapshot(only_public boolean default false) returns jsonb language sql security invoker set search_path='' as $$
 select jsonb_build_object('revision',(select revision from public.kpi_state where id),'headers',coalesce((select jsonb_object_agg(table_name,headers) from public.kpi_tables where not only_public or table_name in ('kpi_cau_hinh','bang_luong_hoa_kpi')),'{}'::jsonb),'tables',coalesce((select jsonb_object_agg(table_name,rows) from (select table_name,jsonb_agg(data order by row_no) rows from public.kpi_records where not only_public or table_name in ('kpi_cau_hinh','bang_luong_hoa_kpi') group by table_name) d),'{}'::jsonb));
$$;
create function public.kpi_commit(expected_revision bigint, writes jsonb, caches jsonb default '[]') returns bigint language plpgsql security invoker set search_path='' as $$
declare rev bigint; item jsonb;
begin
 select revision into rev from public.kpi_state where id for update;
 if rev is distinct from expected_revision then raise exception 'KPI_CONFLICT'; end if;
 for item in select * from jsonb_array_elements(writes) loop
 insert into public.kpi_records(table_name,row_no,data) values(item->>'table_name',(item->>'row_no')::integer,item->'data') on conflict(table_name,row_no) do update set data=excluded.data;
 end loop;
 for item in select * from jsonb_array_elements(caches) loop
 if (item->>'remove')::boolean is true then delete from public.kpi_cache where key=item->>'key';
 else insert into public.kpi_cache values(item->>'key',item->>'value',now()+make_interval(secs=>(item->>'ttl')::integer)) on conflict(key) do update set value=excluded.value,expires_at=excluded.expires_at; end if;
 end loop;
 update public.kpi_state set revision=revision+1 where id returning revision into rev; return rev;
end $$;
create function public.kpi_rate_hit(rate_key text, max_count integer, seconds integer) returns boolean language plpgsql security invoker set search_path='' as $$
declare n integer;
begin
 insert into public.kpi_rate_limits values(rate_key,1,now()+make_interval(secs=>seconds)) on conflict(key) do update set count=case when kpi_rate_limits.until_at<now() then 1 else kpi_rate_limits.count+1 end,until_at=case when kpi_rate_limits.until_at<now() then excluded.until_at else kpi_rate_limits.until_at end returning count into n; return n<=max_count;
end $$;
create function public.kpi_password_update(person_email text,expected_version integer,new_salt text,new_hash text,new_iterations integer,old_bridge boolean default false) returns boolean language plpgsql security invoker set search_path='' as $$
declare n integer;
begin
 update public.kpi_credentials set salt=new_salt,password_hash=new_hash,iterations=new_iterations,bridge=false,version=version+1 where email=person_email and version=expected_version and bridge=old_bridge; get diagnostics n=row_count;
 if n<>1 then return false; end if;
 delete from public.kpi_sessions where email=person_email;
 update public.kpi_records set data=jsonb_set(data,'{Phiên bản mật khẩu}',to_jsonb(expected_version+1)) where table_name='gvcnv' and data->>'Email'=person_email;
 update public.kpi_state set revision=revision+1 where id;
 return true;
end $$;
revoke all on function public.kpi_snapshot(boolean),public.kpi_commit(bigint,jsonb,jsonb),public.kpi_rate_hit(text,integer,integer),public.kpi_password_update(text,integer,text,text,integer,boolean) from public,anon,authenticated;
grant execute on function public.kpi_snapshot(boolean),public.kpi_commit(bigint,jsonb,jsonb),public.kpi_rate_hit(text,integer,integer),public.kpi_password_update(text,integer,text,text,integer,boolean) to service_role;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('kpi-evidence','kpi-evidence',false,10485760,array['application/pdf','application/msword','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/vnd.ms-excel','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','image/png','image/jpeg','image/webp']);
-- The Edge layer validates the token; commit rechecks it within the transaction.
create function public.kpi_commit(expected_revision bigint,writes jsonb,caches jsonb,expected_session_hash text) returns bigint language plpgsql security invoker set search_path='' as $$
declare rev bigint; item jsonb;
begin
 select revision into rev from public.kpi_state where id for update;
 if not exists(select 1 from public.kpi_sessions s join public.kpi_credentials c on c.email=s.email and c.version=s.version where s.token_hash=expected_session_hash and s.expires_at>now()) then raise exception 'KPI_SESSION_EXPIRED'; end if;
 if rev is distinct from expected_revision then raise exception 'KPI_CONFLICT'; end if;
 for item in select * from jsonb_array_elements(writes) loop
 insert into public.kpi_records(table_name,row_no,data) values(item->>'table_name',(item->>'row_no')::integer,item->'data') on conflict(table_name,row_no) do update set data=excluded.data;
 end loop;
 for item in select * from jsonb_array_elements(caches) loop
 if (item->>'remove')::boolean is true then delete from public.kpi_cache where key=item->>'key';
 else insert into public.kpi_cache values(item->>'key',item->>'value',now()+make_interval(secs=>(item->>'ttl')::integer)) on conflict(key) do update set value=excluded.value,expires_at=excluded.expires_at; end if;
 end loop;
 update public.kpi_state set revision=revision+1 where id returning revision into rev; return rev;
end $$;
revoke execute on function public.kpi_commit(bigint,jsonb,jsonb) from service_role;
revoke all on function public.kpi_commit(bigint,jsonb,jsonb,text) from public,anon,authenticated;
grant execute on function public.kpi_commit(bigint,jsonb,jsonb,text) to service_role;
create or replace function public.kpi_password_update(person_email text,expected_version integer,new_salt text,new_hash text,new_iterations integer,old_bridge boolean default false) returns boolean language plpgsql security invoker set search_path='' as $$
declare n integer; nextrow integer;
begin
 perform revision from public.kpi_state where id for update;
 update public.kpi_credentials set salt=new_salt,password_hash=new_hash,iterations=new_iterations,bridge=false,version=version+1 where email=person_email and version=expected_version and bridge=old_bridge; get diagnostics n=row_count;
 if n<>1 then return false; end if;
 delete from public.kpi_sessions where email=person_email;
 update public.kpi_records set data=jsonb_set(data,'{Phiên bản mật khẩu}',to_jsonb(expected_version+1)) where table_name='gvcnv' and data->>'Email'=person_email;
 select coalesce(max(row_no),1)+1 into nextrow from public.kpi_records where table_name='kpi_nhat_ky';
 insert into public.kpi_records values('kpi_nhat_ky',nextrow,jsonb_build_object('_row',nextrow,'at',now(),'actor',person_email,'action',case when old_bridge then 'AUTH_MIGRATE' else 'changePassword' end,'entity',person_email,'before','{}','after','{"changed":true}'));
 update public.kpi_state set revision=revision+1 where id;
 return true;
end $$;
create function public.kpi_login_prepare(person_email text,account_key text,ip_key text) returns jsonb language plpgsql security invoker set search_path='' as $$
declare c public.kpi_credentials;
begin
 if not public.kpi_rate_hit(ip_key,12,60) then raise exception 'KPI_RATE_IP'; end if;
 if not public.kpi_rate_hit(account_key,8,900) then raise exception 'KPI_RATE_ACCOUNT'; end if;
 select * into c from public.kpi_credentials where email=person_email;return to_jsonb(c);
end $$;
create function public.kpi_login_complete(person_email text,expected_version integer,new_token_hash text,account_key text) returns jsonb language plpgsql security invoker set search_path='' as $$
begin
 if not exists(select 1 from public.kpi_credentials where email=person_email and version=expected_version and not bridge) then raise exception 'KPI_SESSION_EXPIRED'; end if;
 delete from public.kpi_rate_limits where key=account_key;
 insert into public.kpi_sessions values(new_token_hash,person_email,expected_version,now()+interval '6 hours');
 return public.kpi_snapshot(false);
end $$;
create function public.kpi_authenticated_snapshot(session_hash text) returns jsonb language plpgsql security invoker set search_path='' as $$
declare c public.kpi_credentials;
begin
 select pc.* into c from public.kpi_sessions s join public.kpi_credentials pc on pc.email=s.email and pc.version=s.version where s.token_hash=session_hash and s.expires_at>now();
 if not found then raise exception 'KPI_SESSION_EXPIRED'; end if;
 return public.kpi_snapshot(false)||jsonb_build_object('credential',to_jsonb(c));
end $$;
revoke all on function public.kpi_login_prepare(text,text,text),public.kpi_login_complete(text,integer,text,text),public.kpi_authenticated_snapshot(text) from public,anon,authenticated;
grant execute on function public.kpi_login_prepare(text,text,text),public.kpi_login_complete(text,integer,text,text),public.kpi_authenticated_snapshot(text) to service_role;
create policy kpi_no_browser_access on public.kpi_tables for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_records for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_state for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_credentials for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_sessions for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_cache for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_rate_limits for all to anon,authenticated using(false) with check(false);
create policy kpi_no_browser_access on public.kpi_import_audit for all to anon,authenticated using(false) with check(false);
create table public.kpi_runtime_settings(key text primary key,value text not null);
alter table public.kpi_runtime_settings enable row level security;
revoke all on public.kpi_runtime_settings from anon,authenticated;
grant all on public.kpi_runtime_settings to service_role;
create policy kpi_no_browser_access on public.kpi_runtime_settings for all to anon,authenticated using(false) with check(false);
