import {mirrorSnapshot,buildMirrorScript} from './mirror.js';
import {createDomain} from './domain.js';
const BASE=Deno.env.get('SUPABASE_URL')!;
const secrets=JSON.parse(Deno.env.get('SUPABASE_SECRET_KEYS')||'{}');
const KEY=secrets.default||Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const ORIGINS=new Set(['https://huycomf2020.github.io','https://localhost','http://localhost','capacitor://localhost']);

const encoder=new TextEncoder();
const hex=(a:ArrayBuffer)=>Array.from(new Uint8Array(a),b=>b.toString(16).padStart(2,'0')).join('');
const sha=async(s:string)=>hex(await crypto.subtle.digest('SHA-256',encoder.encode(s)));
async function derive(digest:string,salt:string,iterations=600000){const key=await crypto.subtle.importKey('raw',encoder.encode(digest),'PBKDF2',false,['deriveBits']);return hex(await crypto.subtle.deriveBits({name:'PBKDF2',salt:encoder.encode(salt),iterations,hash:'SHA-256'},key,256));}
function equal(a:string,b:string){if(a.length!==b.length)return false;let x=0;for(let i=0;i<a.length;i++)x|=a.charCodeAt(i)^b.charCodeAt(i);return x===0;}
async function db(path:string,init:RequestInit={}){const r=await fetch(BASE+'/rest/v1/'+path,{...init,headers:{apikey:KEY,...(KEY.startsWith('sb_secret_')?{}:{Authorization:'Bearer '+KEY}),'Content-Type':'application/json',...(init.headers||{})},signal:AbortSignal.timeout(15000)});if(!r.ok){const e=await r.json().catch(()=>({}));throw Error(e.message==='KPI_ADMIN_REQUIRED'?'Không có quyền quản trị tài khoản.':e.message==='KPI_RECOVERY_INVALID'?'Mã khôi phục sai, đã dùng hoặc hết hạn.':e.message==='KPI_CONFLICT'?'KPI_CONFLICT':e.message==='KPI_RATE_IP'?'Có quá nhiều yêu cầu. Thử lại sau một phút.':e.message==='KPI_RATE_ACCOUNT'?'Thử lại sau 15 phút hoặc liên hệ quản trị.':e.message==='KPI_SESSION_EXPIRED'?'Phiên không còn hợp lệ. Đăng nhập lại.':'Cơ sở dữ liệu chưa xử lý được yêu cầu.');}const text=await r.text();return text?JSON.parse(text):null;}
const rpc=(name:string,args:unknown)=>db('rpc/'+name,{method:'POST',body:JSON.stringify(args)});
async function credential(email:string){return (await db('kpi_credentials?email=eq.'+encodeURIComponent(email)+'&select=*'))[0];}
async function legacyVerify(email:string,digest:string){
 const settings=await db('kpi_runtime_settings?key=eq.legacy_auth_url&select=value'),LEGACY=settings[0]?.value;if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(LEGACY||''))throw Error('Chưa cấu hình xác minh mật khẩu cũ. Liên hệ quản trị.');
 const ticket=crypto.randomUUID()+crypto.randomUUID();const body=new URLSearchParams({action:'login',ticket,payload:JSON.stringify({email,digest})});
 const r=await fetch(LEGACY,{method:'POST',body,signal:AbortSignal.timeout(45000)});if(!r.ok)throw Error('Chưa xác minh được mật khẩu cũ. Thử lại hoặc liên hệ quản trị.');
 const status=await fetch(LEGACY+'?'+new URLSearchParams({action:'kpiPoll',ticket}),{signal:AbortSignal.timeout(30000)}).then(r=>r.json());
 if(!status.ready)throw Error('Xác minh mật khẩu cũ chưa hoàn tất. Thử lại.');let str='';for(let i=0;i<status.chunks;i++)str+=(await fetch(LEGACY+'?'+new URLSearchParams({action:'kpiPoll',ticket,chunk:String(i)}),{signal:AbortSignal.timeout(30000)}).then(r=>r.json())).chunk;
 const result=JSON.parse(str);if(!result.ok||result.data?.user?.email!==email)throw Error('Email hoặc mật khẩu không chính xác.');
 // Old session is not used for any new operation; it expires on the legacy service.
}
async function login(p:any,ip:string){
 const email=String(p.email||'').trim().toLowerCase(),digest=String(p.digest||'');if(!/^[a-f0-9]{64}$/.test(digest)||email.length>254)throw Error('Thông tin đăng nhập không hợp lệ.');
 const accountKey='login:'+await sha(email),ipKey='ip:'+await sha(ip)+':'+(parseInt((await sha(email)).slice(0,2),16)%16);
 let c=await rpc('kpi_login_prepare',{person_email:email,account_key:accountKey,ip_key:ipKey});if(!c)throw Error('Email hoặc mật khẩu không chính xác.');
 if(c.must_change_password&&(!c.temporary_expires_at||Date.parse(c.temporary_expires_at)<=Date.now()))throw Error('Mật khẩu tạm đã hết hạn. Liên hệ quản trị viên.');
 if(c.bridge){await legacyVerify(email,digest);const salt=crypto.randomUUID();const hash=await derive(digest,salt);const changed=await rpc('kpi_password_update',{person_email:email,expected_version:c.version,new_salt:salt,new_hash:hash,new_iterations:600000,old_bridge:true});c=await credential(email);if(!changed&&!equal(await derive(digest,c.salt,c.iterations),c.password_hash))throw Error('Mật khẩu vừa thay đổi. Đăng nhập lại.');}
 else if(!equal(await derive(digest,c.salt,c.iterations),c.password_hash))throw Error('Email hoặc mật khẩu không chính xác.');
 const token=crypto.randomUUID()+crypto.randomUUID();const snapshot=await rpc('kpi_login_complete',{person_email:email,expected_version:c.version,new_token_hash:await sha(token),account_key:accountKey});
 const domain=createDomain({...snapshot,actor:email,sessionToken:token});const overview=domain.dispatch('overview',{},token);fileUrl(overview);overview.account={isAdmin:!!c.is_admin,mustChange:!!c.must_change_password};if(c.must_change_password)return {token,user:overview.user,account:overview.account};return {token,user:overview.user,overview,account:overview.account};
}
async function authenticate(token:string){if(!/^[a-f0-9-]{72}$/.test(token))throw Error('Phiên đã hết hạn. Đăng nhập lại.');return rpc('kpi_authenticated_snapshot',{session_hash:await sha(token)});}
const MIMES:any={'application/pdf':'.pdf','application/msword':'.doc','application/vnd.openxmlformats-officedocument.wordprocessingml.document':'.docx','application/vnd.ms-excel':'.xls','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':'.xlsx','image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp'};
async function storage(path:string,init:RequestInit={}){const r=await fetch(BASE+'/storage/v1/'+path,{...init,headers:{apikey:KEY,...(KEY.startsWith('sb_secret_')?{}:{Authorization:'Bearer '+KEY}),...init.headers},signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error('Không lưu/đọc được minh chứng.');const text=await r.text();return text?JSON.parse(text):null;}
function fileUrl(o:any){if(!o||typeof o!=='object')return;if(o.fileId){if(String(o.fileId).startsWith('sb:'))o.fileUrl='#';else o.fileUrl='https://drive.google.com/file/d/'+encodeURIComponent(o.fileId)+'/view';}for(const v of Object.values(o))if(v&&typeof v==='object')fileUrl(v);}
async function run(action:string,p:any,token:string,actor:string,initial:any=null){
 for(let attempt=0;attempt<3;attempt++){
 const snapshot=attempt===0&&initial?initial:await authenticate(token);
 let cacheValues={};if(['bulkCommit','unitBulkCommit'].includes(action)&&typeof p.previewId==='string'){const key=(action==='unitBulkCommit'?'kpi-unit-preview-':'kpi-preview-')+p.previewId;const row=(await db('kpi_cache?key=eq.'+encodeURIComponent(key)+'&expires_at=gt.'+encodeURIComponent(new Date().toISOString())+'&select=value'))[0];if(row)cacheValues={[key]:row.value};}
 let staged:any=null;
 const domain=createDomain({tables:snapshot.tables,headers:snapshot.headers,actor,sessionToken:token,cacheValues,prepareFile:(f:any,u:any,t:any)=>{if(!MIMES[f.mimeType]||typeof f.base64!=='string'||f.base64.length>14000000)throw Error('Minh chứng không hợp lệ hoặc vượt 10 MB.');const bytes=Uint8Array.from(atob(f.base64),c=>c.charCodeAt(0));if(bytes.length>10485760)throw Error('Tệp vượt 10 MB.');const name=[u.name,u.unit,t.title].join('_').replace(/[\\/:*?"<>|\r\n]/g,'_').slice(0,190)+MIMES[f.mimeType];staged={bytes,mime:f.mimeType,name,path:awaitlessPath(actor,name)};return {fileId:'sb:'+staged.path,fileName:name};}});
 let result=domain.dispatch(action,p,token);const writes=domain.writes(),caches=domain.cacheWrites();
 if(staged)await storage('object/kpi-evidence/'+staged.path.split('/').map(encodeURIComponent).join('/'),{method:'POST',headers:{'Content-Type':staged.mime},body:staged.bytes});
 try{if(writes.length||caches.length)await rpc('kpi_commit',{expected_revision:snapshot.revision,writes,caches,expected_session_hash:await sha(token)});}
 catch(e){if(staged)await storage('object/kpi-evidence',{method:'DELETE',headers:{'Content-Type':'application/json'},body:JSON.stringify({prefixes:[staged.path]})}).catch(()=>{});if((e as Error).message==='KPI_CONFLICT'&&attempt<2)continue;throw Error('Dữ liệu vừa được cập nhật bởi người khác. Tải lại trước khi lưu.');}
 fileUrl(result);return result;
 }throw Error('Tải lại trước khi lưu.');
}
function awaitlessPath(actor:string,name:string){return actor+'/'+crypto.randomUUID()+'/'+name;}
async function evidence(p:any,token:string,actor:string){const s=await rpc('kpi_snapshot',{only_public:false});const domain=createDomain({tables:s.tables,headers:s.headers,actor,sessionToken:token});const user=domain.people().find((u:any)=>u.email===actor);const rows=[...(s.tables.kpi_cong_viec||[]),...(s.tables.kpi_dot||[])];const row=rows.find((r:any)=>r.fileId===p.fileId);if(!row)throw Error('Không có minh chứng này.');if(row.email!==actor){try{domain.dispatch('profile',{email:row.email},token);}catch{const w=domain.dispatch('workspace',{focusTaskId:row.taskId||row.id},token);if(!w.tasks.some((t:any)=>t.id===row.id||t.occurrences?.some((o:any)=>o.id===row.id)))throw Error('Không có quyền xem minh chứng.');}}
 if(!String(row.fileId).startsWith('sb:'))return {url:'https://drive.google.com/file/d/'+encodeURIComponent(row.fileId)+'/view'};const r=await storage('object/sign/kpi-evidence/'+row.fileId.slice(3).split('/').map(encodeURIComponent).join('/'),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({expiresIn:300})});return {url:BASE+'/storage/v1'+r.signedURL};}
async function mirrorSetting(key:string){return (await db('kpi_runtime_settings?key=eq.'+encodeURIComponent(key)+'&select=value'))[0]?.value;}
async function saveMirrorSetting(key:string,value:any){await db('kpi_runtime_settings?on_conflict=key',{method:'POST',headers:{Prefer:'resolution=merge-duplicates'},body:JSON.stringify({key,value:JSON.stringify(value)})});}
async function verifyMirror(req:Request){const token=req.headers.get('x-kpi-mirror-key')||'';if(!/^[a-f0-9-]{72}$/.test(token))throw Error('Không có quyền đồng bộ.');const setting=JSON.parse(await mirrorSetting('sheet_mirror_key')||'null');if(!setting||Date.parse(setting.expiresAt)<=Date.now()||!equal(await sha(token),setting.hash))throw Error('Khóa đồng bộ không hợp lệ hoặc đã hết hạn.');return setting;}
export async function handle(req:Request){
 const origin=req.headers.get('origin')||'';const cors:any={'Access-Control-Allow-Origin':ORIGINS.has(origin)?origin:'https://huycomf2020.github.io','Vary':'Origin','Access-Control-Allow-Headers':'authorization,apikey,content-type,x-kpi-token,x-kpi-mirror-key,x-region','Access-Control-Allow-Methods':'POST,OPTIONS','Access-Control-Max-Age':'3600','Cache-Control':'no-store'};
 const respond=(o:any,status=200)=>Response.json(o,{status,headers:cors});
 if(req.method==='OPTIONS')return new Response(null,{status:204,headers:cors});
 if(req.method!=='POST'||(origin&&!ORIGINS.has(origin)))return respond({ok:false,error:'Yêu cầu không hợp lệ.'},403);
 try{
 const raw=await req.text();if(raw.length>15000000)throw Error('Yêu cầu quá lớn.');const {action,payload={}}=JSON.parse(raw);if(typeof action!=='string')throw Error('Thao tác không hợp lệ.');
 if(action==='mirrorSnapshot'||action==='mirrorAck'){
 const setting=await verifyMirror(req);if(!await rpc('kpi_rate_hit',{rate_key:'sheet-mirror',max_count:80,seconds:3600}))throw Error('Đồng bộ quá thường xuyên.');
 const state=(await db('kpi_state?id=eq.true&select=revision,source_id'))[0];if(state.source_id!==setting.spreadsheetId)throw Error('Bảng đích không khớp.');
 if(action==='mirrorAck'){if(!Number.isSafeInteger(payload.revision)||payload.revision<0||payload.revision>state.revision)throw Error('Phiên bản không hợp lệ.');const prior=JSON.parse(await mirrorSetting('sheet_mirror_status')||'{}');if(!prior.revision||payload.revision>=prior.revision)await saveMirrorSetting('sheet_mirror_status',{revision:payload.revision,at:new Date().toISOString()});return respond({ok:true,data:{ok:true}});}
 if(payload.revision===state.revision)return respond({ok:true,data:{unchanged:true,revision:state.revision}});
 return respond({ok:true,data:mirrorSnapshot(await rpc('kpi_snapshot',{only_public:false}),state.source_id)});
 }
 if(action==='kpiPublic')return respond({ok:true,data:createDomain({...await rpc('kpi_snapshot',{only_public:true})}).publicData()});
 const token=req.headers.get('x-kpi-token')||'';
 if(action==='recoverAccount'){
 const email=String(payload.email||'').trim().toLowerCase(),code=String(payload.code||'');
 if(!/^[a-f0-9-]{72}$/.test(code)||!/^[a-f0-9]{64}$/.test(payload.newDigest)||!Number.isInteger(payload.length)||payload.length<10)throw Error('Mã khôi phục hoặc mật khẩu mới không hợp lệ.');
 if(!await rpc('kpi_rate_hit',{rate_key:'recovery-ip:'+await sha(req.headers.get('x-forwarded-for')||'unknown'),max_count:8,seconds:900}))throw Error('Thử lại sau 15 phút.');
 const c=await credential(email);if(!c)throw Error('Mã khôi phục không hợp lệ.');const salt=crypto.randomUUID();
 if(!await rpc('kpi_reset_account',{session_hash:'',person_email:email,expected_version:c.version,new_salt:salt,new_hash:await derive(payload.newDigest,salt),reason:'Khôi phục bằng mã chủ dự án',recovery_hash:await sha(code)}))throw Error('Tài khoản vừa thay đổi. Tạo mã khôi phục mới.');
 return respond({ok:true,data:{ok:true}});
 }

 if(action==='login'){return respond({ok:true,data:await login(payload,req.headers.get('x-forwarded-for')||'unknown')});}
 const snapshot=await authenticate(token),c=snapshot.credential;
 if(action==='logout'){await db('kpi_sessions?token_hash=eq.'+await sha(token),{method:'DELETE'});return respond({ok:true,data:{ok:true}});}
 if(action==='changePassword'){
 if(!/^[a-f0-9]{64}$/.test(String(payload.newDigest))||!Number.isInteger(payload.length)||payload.length<10||payload.newDigest===payload.oldDigest)throw Error('Mật khẩu mới ít nhất 10 ký tự và khác mật khẩu cũ.');
 if(!equal(await derive(String(payload.oldDigest),c.salt,c.iterations),c.password_hash))throw Error('Mật khẩu hiện tại không đúng.');const salt=crypto.randomUUID();if(!await rpc('kpi_password_update',{person_email:c.email,expected_version:c.version,new_salt:salt,new_hash:await derive(payload.newDigest,salt),new_iterations:600000,old_bridge:false}))throw Error('Mật khẩu vừa thay đổi. Đăng nhập lại.');return respond({ok:true,data:{ok:true,relogin:true}});
 }
 if(c.must_change_password)throw Error('Cần đổi mật khẩu tạm trước khi sử dụng app.');
 if(action==='sheetMirrorSetup'||action==='sheetMirrorStatus'){
 const domain=createDomain({...snapshot,actor:c.email,sessionToken:token}),user=domain.people().find((u:any)=>u.email===c.email);if(!c.is_admin&&!user?.roles.includes('HT'))throw Error('Chỉ HT hoặc quản trị viên được thiết lập đồng bộ.');
 const state=(await db('kpi_state?id=eq.true&select=revision,source_id'))[0];
 if(action==='sheetMirrorStatus')return respond({ok:true,data:{source:'Supabase',spreadsheetId:state.source_id,currentRevision:state.revision,mirror:JSON.parse(await mirrorSetting('sheet_mirror_status')||'null')}});
 const mirrorToken=crypto.randomUUID()+crypto.randomUUID();await saveMirrorSetting('sheet_mirror_key',{hash:await sha(mirrorToken),spreadsheetId:state.source_id,expiresAt:new Date(Date.now()+365*86400000).toISOString(),actor:c.email});
 const code=buildMirrorScript({endpoint:BASE+'/functions/v1/kpi-api',publicKey:'sb_publishable_DpNcbAwzO1vPzqF7VWHiOw_VPtt9wzb',token:mirrorToken,spreadsheetId:state.source_id});return respond({ok:true,data:{code,spreadsheetId:state.source_id}});
 }
 if(action==='adminAccounts')return respond({ok:true,data:await rpc('kpi_admin_accounts',{session_hash:await sha(token)})});
 if(action==='adminResetPassword'){
 if(!c.is_admin)throw Error('Không có quyền quản trị tài khoản.');
 const email=String(payload.email||'').trim().toLowerCase();if(email===c.email)throw Error('Dùng Đổi mật khẩu cho tài khoản của mình.');
 if(!Number.isInteger(payload.version)||String(payload.reason||'').trim().length<5||String(payload.reason).length>500)throw Error('Cần lý do đặt lại (5–500 ký tự).');
 if(!await rpc('kpi_rate_hit',{rate_key:'admin-reset:'+c.email,max_count:20,seconds:60}))throw Error('Quá nhiều lượt đặt lại. Thử lại sau một phút.');
 const temporaryPassword='Kpi!'+crypto.randomUUID().replaceAll('-','').slice(0,16),salt=crypto.randomUUID();
 if(!await rpc('kpi_reset_account',{session_hash:await sha(token),person_email:email,expected_version:payload.version,new_salt:salt,new_hash:await derive(await sha(temporaryPassword),salt),reason:String(payload.reason).trim(),recovery_hash:''}))throw Error('Tài khoản vừa thay đổi. Tải lại danh sách.');
 return respond({ok:true,data:{temporaryPassword,expiresHours:24}});
 }
 if(action==='overview'){const result=await run(action,payload,token,c.email,snapshot);result.account={isAdmin:!!c.is_admin,mustChange:false};return respond({ok:true,data:result});}
 if(action==='evidenceUrl')return respond({ok:true,data:await evidence(payload,token,c.email)});
 return respond({ok:true,data:await run(action,payload,token,c.email,snapshot)});
 }catch(e){return respond({ok:false,error:(e as Error).message||'Không xử lý được yêu cầu.'},400);}
}
Deno.serve(handle);

