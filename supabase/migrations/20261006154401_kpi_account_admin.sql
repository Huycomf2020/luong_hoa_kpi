-- Account administration is independent from KPI review roles.
alter table public.kpi_credentials add column is_admin boolean not null default false;
alter table public.kpi_credentials add column must_change_password boolean not null default false;
alter table public.kpi_credentials add column temporary_expires_at timestamptz;
create table public.kpi_recovery(email text primary key references public.kpi_credentials,code_hash text not null,expires_at timestamptz not null);
alter table public.kpi_recovery enable row level security;
revoke all on public.kpi_recovery from anon,authenticated;
grant all on public.kpi_recovery to service_role;
create policy kpi_no_browser_access on public.kpi_recovery for all to anon,authenticated using(false) with check(false);
create function public.kpi_admin_recovery(person_email text) returns text language plpgsql security invoker set search_path='' as $$
declare code text;
begin
 if not exists(select 1 from public.kpi_credentials where email=person_email and is_admin) then raise exception 'KPI_ADMIN_REQUIRED'; end if;
 code:=gen_random_uuid()::text||gen_random_uuid()::text;
 insert into public.kpi_recovery values(person_email,encode(extensions.digest(code,'sha256'),'hex'),now()+interval '10 minutes') on conflict(email) do update set code_hash=excluded.code_hash,expires_at=excluded.expires_at;
 return code;
end $$;
-- Only project owners using SQL Editor can generate recovery codes, not the Edge service.
revoke all on function public.kpi_admin_recovery(text) from public,anon,authenticated,service_role;
create function public.kpi_admin_accounts(session_hash text) returns jsonb language plpgsql security invoker set search_path='' as $$
begin
 if not exists(select 1 from public.kpi_sessions s join public.kpi_credentials c on s.email=c.email and s.version=c.version where s.token_hash=session_hash and s.expires_at>now() and c.is_admin and not c.must_change_password) then raise exception 'KPI_ADMIN_REQUIRED'; end if;
 return jsonb_build_object('accounts',coalesce((select jsonb_agg(jsonb_build_object('email',c.email,'name',r.data->>'Họ và tên','unit',r.data->>'Tổ','isAdmin',c.is_admin,'mustChange',c.must_change_password,'temporaryExpiresAt',c.temporary_expires_at,'version',c.version) order by r.row_no) from public.kpi_credentials c join public.kpi_records r on r.table_name='gvcnv' and lower(r.data->>'Email')=c.email),'[]'::jsonb),'audit',coalesce((select jsonb_agg(data order by row_no desc) from (select row_no,data from public.kpi_records where table_name='kpi_nhat_ky' and data->>'action' in ('ADMIN_RESET_PASSWORD','OWNER_RECOVERY') order by row_no desc limit 30) a),'[]'::jsonb));
end $$;
create function public.kpi_reset_account(session_hash text,person_email text,expected_version integer,new_salt text,new_hash text,reason text,recovery_hash text default '') returns boolean language plpgsql security invoker set search_path='' as $$
declare actor_email text; n integer; nextrow integer; recovering boolean:=recovery_hash<>'';
begin
 perform revision from public.kpi_state where id for update;
 if recovering then
  if not exists(select 1 from public.kpi_recovery where email=person_email and code_hash=recovery_hash and expires_at>now()) then raise exception 'KPI_RECOVERY_INVALID'; end if;
  actor_email:=person_email;
 else
  select c.email into actor_email from public.kpi_sessions s join public.kpi_credentials c on c.email=s.email and c.version=s.version where s.token_hash=session_hash and s.expires_at>now() and c.is_admin and not c.must_change_password;
  if actor_email is null then raise exception 'KPI_ADMIN_REQUIRED'; end if;
 end if;
 if length(trim(reason))<5 or length(reason)>500 or length(new_hash)<>64 then raise exception 'KPI_INVALID_RESET'; end if;
 update public.kpi_credentials set salt=new_salt,password_hash=new_hash,iterations=600000,bridge=false,version=version+1,must_change_password=not recovering,temporary_expires_at=case when recovering then null else now()+interval '24 hours' end where email=person_email and version=expected_version;
 get diagnostics n=row_count;if n<>1 then return false;end if;
 delete from public.kpi_sessions where email=person_email;
 delete from public.kpi_recovery where email=person_email;
 delete from public.kpi_rate_limits where key='login:'||encode(extensions.digest(person_email,'sha256'),'hex');
 update public.kpi_records set data=jsonb_set(data,'{Phiên bản mật khẩu}',to_jsonb(expected_version+1)) where table_name='gvcnv' and lower(data->>'Email')=person_email;
 select coalesce(max(row_no),1)+1 into nextrow from public.kpi_records where table_name='kpi_nhat_ky';
 insert into public.kpi_records values('kpi_nhat_ky',nextrow,jsonb_build_object('_row',nextrow,'at',now(),'actor',actor_email,'action',case when recovering then 'OWNER_RECOVERY' else 'ADMIN_RESET_PASSWORD' end,'entity',person_email,'before','{}','after',jsonb_build_object('changed',true,'reason',reason)::text));
 update public.kpi_state set revision=revision+1 where id;
 return true;
end $$;
revoke all on function public.kpi_admin_accounts(text),public.kpi_reset_account(text,text,integer,text,text,text,text) from public,anon,authenticated;
grant execute on function public.kpi_admin_accounts(text),public.kpi_reset_account(text,text,integer,text,text,text,text) to service_role;
create or replace function public.kpi_password_update(person_email text,expected_version integer,new_salt text,new_hash text,new_iterations integer,old_bridge boolean default false) returns boolean language plpgsql security invoker set search_path='' as $$
declare n integer; nextrow integer;
begin
 perform revision from public.kpi_state where id for update;
 update public.kpi_credentials set salt=new_salt,password_hash=new_hash,iterations=new_iterations,bridge=false,version=version+1,must_change_password=false,temporary_expires_at=null where email=person_email and version=expected_version and bridge=old_bridge; get diagnostics n=row_count;
 if n<>1 then return false; end if;
 delete from public.kpi_sessions where email=person_email;
 update public.kpi_records set data=jsonb_set(data,'{Phiên bản mật khẩu}',to_jsonb(expected_version+1)) where table_name='gvcnv' and data->>'Email'=person_email;
 select coalesce(max(row_no),1)+1 into nextrow from public.kpi_records where table_name='kpi_nhat_ky';
 insert into public.kpi_records values('kpi_nhat_ky',nextrow,jsonb_build_object('_row',nextrow,'at',now(),'actor',person_email,'action',case when old_bridge then 'AUTH_MIGRATE' else 'changePassword' end,'entity',person_email,'before','{}','after','{"changed":true}'));
 update public.kpi_state set revision=revision+1 where id;
 return true;
end $$;
