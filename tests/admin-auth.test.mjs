import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
globalThis.Deno={env:{get:n=>n==='SUPABASE_URL'?'https://test.invalid':n==='SUPABASE_SECRET_KEYS'?'{"default":"sb_secret_test"}':undefined},serve(){}};
const {handle}=await import('../supabase/functions/kpi-api/index.ts');
let credential={email:'admin@example.test',version:1,is_admin:true,must_change_password:false};let calls=[];
globalThis.fetch=async(url,init)=>{const path=String(url).split('/rest/v1/')[1],body=init.body?JSON.parse(init.body):null;calls.push({path,body});let data=null;if(path==='rpc/kpi_authenticated_snapshot')data={credential};else if(path==='rpc/kpi_admin_accounts')data={accounts:[],audit:[]};else if(path==='rpc/kpi_rate_hit'||path==='rpc/kpi_reset_account')data=true;else if(path.startsWith('kpi_credentials?'))data=[{email:'admin@example.test',version:1}];return Response.json(data);};
async function call(action,payload={},token='a'.repeat(72)){const r=await handle(new Request('https://test.invalid',{method:'POST',headers:{'Content-Type':'application/json','x-kpi-token':token},body:JSON.stringify({action,payload})}));return r.json();}
assert.equal((await call('adminAccounts')).ok,true);
credential.is_admin=false;assert.equal((await call('adminResetPassword',{email:'teacher@example.test',version:1,reason:'Quên mật khẩu'})).ok,false);
credential.is_admin=true;credential.must_change_password=true;
for(const action of ['overview','adminAccounts','profile','register','evidenceUrl'])assert.equal((await call(action)).ok,false,action);
credential.must_change_password=false;
assert.equal((await call('adminResetPassword',{email:credential.email,version:1,reason:'Quên mật khẩu'})).ok,false);
const reset=await call('adminResetPassword',{email:'teacher@example.test',version:1,reason:'Quên mật khẩu'});assert.equal(reset.ok,true);assert.equal(reset.data.temporaryPassword.length,20);const saved=calls.findLast(c=>c.path==='rpc/kpi_reset_account').body;assert.equal(saved.new_hash.length,64);assert.ok(!JSON.stringify(saved).includes(reset.data.temporaryPassword));assert.equal(saved.expected_version,1);
const recovery=await call('recoverAccount',{email:'admin@example.test',code:'b'.repeat(72),newDigest:createHash('sha256').update('new-test-password').digest('hex'),length:17},'');assert.equal(recovery.ok,true);assert.equal(calls.findLast(c=>c.path==='rpc/kpi_reset_account').body.recovery_hash,createHash('sha256').update('b'.repeat(72)).digest('hex'));
assert.equal((await call('recoverAccount',{email:'admin@example.test',code:'bad',newDigest:'a'.repeat(64),length:12},'')).ok,false);
console.log('Admin Edge tests passed: independent permission, forced-change gate, self-reset denied, hashed temporary credentials, recovery validation.');
