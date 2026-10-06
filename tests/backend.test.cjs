const assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs'),crypto=require('node:crypto');
const sheetReads=new Map();
class Range{constructor(s,r,c,n=1,m=1){Object.assign(this,{s,r,c,n,m});}getValues(){sheetReads.set(this.s.name,(sheetReads.get(this.s.name)||0)+1);return Array.from({length:this.n},(_,i)=>Array.from({length:this.m},(_,j)=>this.s.data[this.r+i-1]?.[this.c+j-1]??''));}setValues(rows){rows.forEach((row,i)=>{this.s.data[this.r+i-1]??=[];row.forEach((v,j)=>this.s.data[this.r+i-1][this.c+j-1]=v);});return this;}setValue(v){return this.setValues([[v]]);}setBackground(){return this;}setFontColor(){return this;}setFontWeight(){return this;}}
class Sheet{constructor(name,data=[]){this.name=name;this.data=data;this.maxColumns=26;}getDataRange(){return this.getRange(1,1,Math.max(1,this.getLastRow()),Math.max(1,this.getLastColumn()));}getLastRow(){return this.data.length;}getLastColumn(){return Math.max(0,...this.data.map(x=>x.length));}getMaxColumns(){return this.maxColumns;}insertColumnsAfter(_,n){this.maxColumns+=n;}getRange(...a){return new Range(this,...a);}appendRow(r){this.data.push(r);}setFrozenRows(){}}
const sheets=new Map(),ss={getSheetByName:n=>sheets.get(n),insertSheet:n=>{const s=new Sheet(n);sheets.set(n,s);return s;}};
sheets.set('gvcnv',new Sheet('gvcnv',[
 ['Họ và tên','Chức vụ','Môn','Email','Mật khẩu','Lớp chủ nhiệm','Hòa nhập'],
 ['Teacher','Tổ viên','Anh','teacher@example.test','oldpassword','12A11','Có'],
 ['Leader','Tổ trưởng','Anh','leader@example.test','oldpassword','',''],
 ['Other','Tổ viên','Toán','other@example.test','oldpassword','',''],
 ['Principal','Hiệu trưởng','','principal@example.test','oldpassword','',''],
 ['Deputy','Tổ phó','Anh','deputy@example.test','oldpassword','',''],
 ['Vice','Phó Hiệu trưởng','','vice@example.test','oldpassword','','']
]));
const props=new Map(),cache=new Map();const bytes=b=>Array.from(b).map(x=>x>127?x-256:x);
class FixedDate extends Date{constructor(...args){super(...(args.length?args:['2026-10-06T12:00:00Z']));}static now(){return Date.parse('2026-10-06T12:00:00Z');}}
const ctx=vm.createContext({console,Date:FixedDate,JSON,Math,Number,String,Object,Array,Set,Map,Error,isNaN,globalThis:null,SpreadsheetApp:{getActiveSpreadsheet:()=>ss},PropertiesService:{getScriptProperties:()=>({getProperty:k=>props.get(k),setProperty:(k,v)=>props.set(k,v)})},CacheService:{getScriptCache:()=>({get:k=>cache.get(k),put:(k,v)=>cache.set(k,v),remove:k=>cache.delete(k)})},LockService:{getScriptLock:()=>({waitLock(){},releaseLock(){}})},Utilities:{getUuid:()=>crypto.randomUUID(),DigestAlgorithm:{SHA_256:'sha256'},Charset:{UTF_8:'utf8'},computeDigest:(_,s)=>bytes(crypto.createHash('sha256').update(s).digest()),computeHmacSha256Signature:(s,k)=>bytes(crypto.createHmac('sha256',k).update(s).digest()),formatDate:d=>d.toISOString().slice(0,10)}});
vm.runInContext(fs.readFileSync(__dirname+'/../Code.gs','utf8'),ctx);
const call=(name,...args)=>{ctx.testArgs=args;return vm.runInContext(`${name}(...testArgs)`,ctx);};
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
call('initializeKpiSystem');call('initializeKpiSystem');assert.equal(sheets.get('bang_luong_hoa_kpi').getLastRow(),60);
const login=email=>call('kpiDispatch_','login',{email,digest:sha('oldpassword')},'');
const teacher=login('teacher@example.test'),leader=login('leader@example.test'),principal=login('principal@example.test');assert.deepEqual(Array.from(teacher.user.roles),['GVBM','GVCN','HOANHAP']);
const raw=call('kpiPeople_').find(u=>u.email==='teacher@example.test').raw;assert.equal(raw['Mật khẩu'],'');assert.equal(raw['Mật khẩu hash'].length,64);
assert.throws(()=>call('kpiDispatch_','profile',{email:'other@example.test'},leader.token),/quyền/);
const reg=call('kpiDispatch_','register',{criterionId:'GVBM-1',due:'2027-05-30',output:'Test output',inPlan:true},teacher.token);
assert.throws(()=>call('kpiDispatch_','approvePlan',{id:reg.id,version:1,accept:true,coef:1,inPlan:true,note:'Accept'},teacher.token),/tự duyệt/);
const planned=call('kpiDispatch_','approvePlan',{id:reg.id,version:1,accept:true,coef:1,inPlan:true,note:'Accept'},leader.token);
assert.throws(()=>call('kpiDispatch_','submit',{id:reg.id,version:1},teacher.token),/thay đổi/);
const submitted=call('kpiDispatch_','submit',{id:reg.id,version:planned.version,completed:true,completedAt:'2026-10-01',progress:100,quality:80,note:'Result'},teacher.token);
let s=call('kpiDispatch_','overview',{},teacher.token).summary;assert.equal(s.B,0);assert.equal(s.pending,1);assert.equal(s.total,null);
call('kpiDispatch_','review',{id:reg.id,version:submitted.version,accept:true,progress:100,quality:80,note:'Approved'},leader.token);
call('kpiDispatch_','general',{scores:[5,5,5,5,5,5],note:'Self'},teacher.token);
assert.equal(call('kpiDispatch_','overview',{},teacher.token).summary.general,null);
call('kpiDispatch_','general',{email:teacher.user.email,scores:[5,5,5,5,5,5],note:'Reviewed'},leader.token);
s=call('kpiDispatch_','overview',{},teacher.token).summary;assert.equal(s.kpi,60.2);assert.equal(s.total,90.2);assert.equal(s.excellentEligible,false);
assert.throws(()=>call('kpiDispatch_','report',{},teacher.token),/BGH/);assert.equal(call('kpiDispatch_','report',{},leader.token).people.length,3);assert.equal(call('kpiDispatch_','report',{},principal.token).people.length,6);
const b=call('kpiDispatch_','bonus',{taskId:reg.id,category:'HSG Nhất',reference:'AWARD-001',requested:7},teacher.token);assert.equal(b.requested,3);
assert.throws(()=>call('kpiDispatch_','reviewBonus',{id:b.id,accept:true,approved:3,note:'Decision'},leader.token),/Chưa ban hành/);
assert.throws(()=>call('kpiDispatch_','decision',{email:teacher.user.email,rating:'Hoàn thành xuất sắc nhiệm vụ',reference:'X',note:'Y'},principal.token),/điều kiện/);
const deputy=login('deputy@example.test'),vice=login('vice@example.test');
const dispatch=(a,p,session=leader)=>call('kpiDispatch_',a,p,session.token);
const t2=dispatch('register',{criterionId:'GVBM-2',due:'2027-05-30',output:'Eight checks',inPlan:true},teacher);
const t2p=dispatch('approvePlan',{id:t2.id,version:t2.version,accept:true,coef:1,inPlan:true,note:'Plan eight checks'});
assert.throws(()=>dispatch('schedule',{taskId:t2.id,version:t2p.version,items:[{name:'One',due:'2026-02-30',weight:1},{name:'Two',due:'2026-10-30',weight:1}]}),/Ngày/);
const items=Array.from({length:8},(_,i)=>({name:'Check '+(i+1),due:i===0?'2026-10-01':'2027-05-'+String(10+i).padStart(2,'0'),weight:1}));
const scheduleRequest={taskId:t2.id,version:t2p.version,items,requestId:crypto.randomUUID()};
const occurrences=dispatch('schedule',scheduleRequest);assert.equal(occurrences.length,8);assert.equal(dispatch('schedule',scheduleRequest).length,8);assert.equal(call('kpiRows_','kpi_dot').length,8);
assert.throws(()=>dispatch('schedule',{...scheduleRequest,items:[...items].reverse()}),/Mã yêu cầu/);
assert.throws(()=>dispatch('submit',{id:t2.id,version:t2p.version+1,completed:true,completedAt:'2026-10-01',progress:100,quality:100,note:'Cannot submit parent'},teacher),/từng đợt/);
let o=dispatch('submitOccurrence',{id:occurrences[0].id,version:1,completed:true,completedAt:'2026-10-01',progress:100,quality:100,note:'First check'},teacher);
assert.throws(()=>dispatch('reviewOccurrence',{id:o.id,version:o.version,accept:true,progress:100,quality:100,note:'Own approval'},teacher),/quyền/);
assert.throws(()=>dispatch('reviewOccurrence',{id:o.id,version:o.version,accept:true,progress:100,quality:100,note:'No delegation'},deputy),/quyền/);
const d=dispatch('delegate',{delegate:deputy.user.email,teachers:[teacher.user.email],roles:['GVBM'],from:'2026-01-01',until:'2027-06-30',finalApproval:false,note:'Lesson plans check'});
assert.ok(dispatch('workspace',{},deputy).tasks.find(t=>t.id===t2.id));
assert.throws(()=>dispatch('reviewOccurrence',{id:o.id,version:o.version,accept:true,progress:100,quality:100,note:'Not final'},deputy),/Chỉ được kiểm tra/);
o=dispatch('checkOccurrence',{id:o.id,version:o.version,accept:true,note:'Checked'},deputy);assert.equal(o.status,'checked');
assert.equal(dispatch('overview',{},teacher).tasks.find(t=>t.id===t2.id).reviewStatus,'pending');
o=dispatch('reviewOccurrence',{id:o.id,version:o.version,accept:true,progress:100,quality:100,note:'Final approved'});assert.equal(o.status,'approved');
let overview=dispatch('overview',{},teacher);assert.equal(call('KpiCore.score',overview.tasks.find(t=>t.id===t2.id)).actual,1.25);assert.equal(overview.summary.missing,0);assert.equal(overview.summary.future,8); // Seven future occurrences plus previous parent.
assert.throws(()=>dispatch('reviewOccurrence',{id:o.id,version:o.version-1,accept:true,progress:100,quality:100,note:'Stale'}),/thay đổi/);
assert.throws(()=>dispatch('review',{id:t2.id,version:t2p.version+1,accept:true,progress:100,quality:100,note:'No parent override'}),/từng đợt/);
const outsider=login('other@example.test');assert.equal(dispatch('workspace',{},outsider).tasks.some(t=>t.id===t2.id),false);
assert.throws(()=>dispatch('delegate',{delegate:deputy.user.email,teachers:[outsider.user.email],roles:['GVBM'],from:'2026-01-01',until:'2027-06-30',note:'Outside unit'}),/tổ viên/);
const staleRow=dispatch('submitOccurrence',{id:occurrences[1].id,version:1,completed:true,completedAt:'2026-10-01',progress:100,quality:80,note:'Second'},teacher);
const validRow=dispatch('submitOccurrence',{id:occurrences[2].id,version:1,completed:true,completedAt:'2026-10-01',progress:80,quality:80,note:'Third'},teacher);
const batch=[staleRow,validRow].map(o=>({action:'reviewOccurrence',id:o.id,version:o.version,accept:true,progress:o.progress,quality:o.quality,note:'Bulk final'}));
const preview=dispatch('bulkPreview',{items:batch});assert.equal(preview.results.filter(r=>r.ok).length,2);
assert.throws(()=>dispatch('bulkCommit',{previewId:preview.previewId},vice),/người khác/);
dispatch('checkOccurrence',{id:staleRow.id,version:staleRow.version,accept:true,note:'Changed while preview'},deputy);
const committed=dispatch('bulkCommit',{previewId:preview.previewId});assert.equal(committed.results[0].ok,false);assert.equal(committed.results[1].ok,true);assert.match(committed.results[0].error,/thay đổi/);
assert.equal(JSON.stringify(dispatch('bulkCommit',{previewId:preview.previewId})),JSON.stringify(committed));
const bad=dispatch('bulkPreview',{items:[{...batch[1],version:1}]});assert.equal(bad.results[0].ok,false);
assert.throws(()=>dispatch('bulkPreview',{items:[batch[1],batch[1]]}),/trùng/);
const returned=dispatch('reviewOccurrence',{id:staleRow.id,version:staleRow.version+1,accept:false,note:'Need repair'});assert.equal(returned.status,'returned');
const repair=dispatch('submitOccurrence',{id:returned.id,version:returned.version,completed:true,completedAt:'2026-10-01',progress:100,quality:100,note:'Repaired'},teacher);assert.equal(repair.status,'pending');
dispatch('revokeDelegation',{id:d.id,version:d.version,note:'End check assignment'});
assert.equal(dispatch('workspace',{},deputy).tasks.some(t=>t.id===t2.id),false);
assert.throws(()=>dispatch('checkOccurrence',{id:repair.id,version:repair.version,accept:true,note:'Revoked'},deputy),/quyền/);
const limited=dispatch('delegate',{delegate:deputy.user.email,teachers:[teacher.user.email],roles:['GVBM'],criterionIds:['GVBM-2'],from:'2026-01-01',until:'2027-06-30',finalApproval:true,note:'Explicit final approval only for criterion 2'});
assert.equal(dispatch('workspace',{},deputy).tasks.some(t=>t.id===reg.id),false);assert.equal(dispatch('workspace',{},deputy).tasks.find(t=>t.id===t2.id).rights.final,true);assert.equal(dispatch('reviewOccurrence',{id:repair.id,version:repair.version,accept:true,progress:100,quality:100,note:'Final per delegation'},deputy).status,'approved');dispatch('revokeDelegation',{id:limited.id,version:limited.version,note:'Limited assignment complete'});
const p1=dispatch('plan',{email:teacher.user.email,requiredIds:['GVBM-1','GVBM-2'],confirm:true,note:'All mandatory approved'});assert.equal(p1.status,'confirmed');
assert.equal(dispatch('overview',{},teacher).summary.planConfirmed,true);
assert.throws(()=>dispatch('register',{criterionId:'GVBM-3',due:'2027-05-30',output:'New planned',inPlan:true},teacher),/Kế hoạch đã xác nhận/);
assert.throws(()=>dispatch('cancel',{id:t2.id,version:t2p.version+1,note:'Drop A'}),/Kế hoạch đã xác nhận/);
const parent2=dispatch('overview',{},teacher).tasks.find(t=>t.id===t2.id);
const meta=dispatch('attribution',{taskId:t2.id,version:parent2.version,productKey:'product-shared',share:100,context:'Grade 12, cohort baseline and lesson plan ownership'});assert.equal(meta.share,100);
const parent1=dispatch('overview',{},teacher).tasks.find(t=>t.id===reg.id);
assert.throws(()=>dispatch('attribution',{taskId:reg.id,version:parent1.version,productKey:'product-shared',share:100,context:'Duplicate across roles'}),/hai nhiệm vụ/);
const appeal=dispatch('appeal',{taskId:t2.id,text:'Please check quality assessment',requestId:crypto.randomUUID()},teacher);assert.equal(appeal.status,'pending');
assert.throws(()=>dispatch('replyAppeal',{id:appeal.id,version:appeal.version,reply:'Self'},teacher),/tự duyệt/);
assert.equal(dispatch('replyAppeal',{id:appeal.id,version:appeal.version,reply:'Checked against outputs'}).status,'answered');
assert.throws(()=>dispatch('periodLock',{status:'locked',reference:'Minutes',note:'Lock'},vice),/Hiệu trưởng/);
assert.throws(()=>dispatch('periodLock',{status:'locked',reference:'Minutes',note:'Lock'},principal),/Còn kế hoạch/);
// Simulate an existing locked period: all operational writes must be blocked on the server.
call('kpiWrite_','kpi_chot_ky',{id:'locked-test',period:'2026-2027',status:'locked',reference:'fixture',version:1});
assert.throws(()=>dispatch('submitOccurrence',{id:repair.id,version:repair.version,completed:true,completedAt:'2026-10-01',progress:100,quality:100,note:'Locked'},teacher),/Kỳ đã chốt/);
assert.throws(()=>dispatch('general',{scores:[5,5,5,5,5,5],note:'Locked'},teacher),/Kỳ đã chốt/);
assert.throws(()=>dispatch('bulkCommit',{previewId:preview.previewId}),/Kỳ đã chốt/);
assert.ok(dispatch('report',{},principal).people.length);
assert.equal(dispatch('periodLock',{version:1,status:'open',reference:'Reopening minutes',note:'Correction'},principal).status,'open');
// Eight equally weighted 100/100 accepted occurrences always total ten, not eighty.
const calcTask={base:10,coef:1,occurrences:Array.from({length:8},()=>({weight:1,status:'approved',progress:100,quality:100}))};assert.equal(call('KpiCore.score',calcTask).actual,10);
calcTask.occurrences[0].quality=80;assert.equal(call('KpiCore.score',calcTask).actual,9.83);
calcTask.occurrences[0].status='returned';assert.equal(call('KpiCore.score',calcTask).actual,8.75);
calcTask.occurrences[0].status='cancelled';assert.equal(call('KpiCore.score',calcTask).actual,10);
console.log('V2 recurring, delegation, self-review, concurrency, bulk replay, plan completeness, attribution, appeals and lock checks passed');
// Complete fixture data and test a real lock + immutable snapshots + reasoned reopen.
for(const task of call('kpiRows_','kpi_cong_viec')){if(task.period==='2026-2027')call('kpiWrite_','kpi_cong_viec',{...task,planStatus:'approved',reviewStatus:'approved',completed:true,completedAt:'2026-10-01',due:'2026-10-02',progress:100,quality:100});}
for(const occurrence of call('kpiRows_','kpi_dot'))call('kpiWrite_','kpi_dot',{...occurrence,due:'2026-10-02',status:'approved',progress:100,quality:100,completed:true,completedAt:'2026-10-01'});
for(const bonus of call('kpiRows_','kpi_thuong'))call('kpiWrite_','kpi_thuong',{...bonus,status:'rejected',approved:0});
for(const person of call('kpiPeople_')){
 let tasks=call('kpiTasks_',person.email,'2026-2027');if(!tasks.length){const task={id:crypto.randomUUID(),email:person.email,period:'2026-2027',criterionId:'CUSTOM-'+crypto.randomUUID(),title:'Fixture management assignment',role:person.roles[0],output:'Management product',due:'2026-10-02',base:10,coef:1,inPlan:true,planStatus:'approved',progress:100,quality:100,completed:true,completedAt:'2026-10-01',reviewStatus:'approved',version:1,cancelled:false};call('kpiWrite_','kpi_cong_viec',task);tasks=[task];}
 const oldPlan=call('kpiRows_','kpi_ke_hoach').find(p=>p.email===person.email);dispatch('plan',{email:person.email,version:oldPlan?.version,requiredIds:tasks.map(t=>t.criterionId),confirm:true,note:'Confirmed real assigned fixture tasks'},person.email===principal.user.email?vice:principal);
 const oldGeneral=call('kpiRows_','kpi_chung').find(p=>p.email===person.email);call('kpiWrite_','kpi_chung',{...(oldGeneral||{id:crypto.randomUUID()}),email:person.email,period:'2026-2027',scores:JSON.stringify([5,5,5,5,5,5]),status:'approved'});
 call('kpiWrite_','kpi_xep_loai',{id:crypto.randomUUID(),email:person.email,period:'2026-2027',rating:'Hoàn thành tốt nhiệm vụ',reference:'Test minutes'});
}
const lockBefore=call('kpiRows_','kpi_chot_ky')[0];
const actualLock=dispatch('periodLock',{version:lockBefore.version,status:'locked',reference:'Final meeting',note:'All final fixture records checked'},principal);assert.equal(actualLock.status,'locked');assert.equal(call('kpiRows_','kpi_chot_ket_qua').length,6);
const snapshots=call('kpiRows_','kpi_chot_ket_qua');assert.equal(JSON.parse(snapshots.find(s=>s.email===teacher.user.email).data).tasks.find(t=>t.id===t2.id).occurrences.length,8);
assert.throws(()=>dispatch('attribution',{taskId:t2.id,version:4,productKey:'locked',share:100,context:'No change after lock'}),/Kỳ đã chốt/);
dispatch('periodLock',{version:actualLock.version,status:'open',reference:'Reopen final meeting',note:'Need correction'},principal);assert.equal(call('kpiRows_','kpi_chot_ket_qua').length,6);
console.log('Actual period lock, six-person snapshots, mutation blocking and reopen retention passed');
call('kpiDispatch_','changePassword',{oldDigest:sha('oldpassword'),newDigest:sha('newpassword123'),length:14},teacher.token);
assert.throws(()=>call('kpiDispatch_','overview',{},teacher.token),/hết hạn/);
assert.throws(()=>login('teacher@example.test'),/không chính xác/);
assert.ok(call('kpiDispatch_','login',{email:teacher.user.email,digest:sha('newpassword123')},'').token);
console.log('Backend auth, scopes, approval, scoring, bonus and password checks passed');

// Large roster/queue fixture checks pagination and sheet-read reuse, not real concurrency.
const gvSheet=sheets.get('gvcnv'),gvHeaders=gvSheet.data[0];
for(let i=0;i<85;i++){const person={'Họ và tên':'Pagination teacher '+i,'Chức vụ':'Tổ viên','Môn':'Anh','Email':'pagination'+i+'@example.test','Mật khẩu':'test-only-password','Vai trò KPI':'GVBM'};gvSheet.appendRow(gvHeaders.map(h=>person[h]??''));call('kpiWrite_','kpi_cong_viec',{id:'pagination-task-'+i,email:person.Email,period:'2026-2027',criterionId:'GVBM-1',title:'Pagination assignment '+i,role:'GVBM',output:'Fixture',due:'2027-05-30',base:10,coef:1,inPlan:true,planStatus:'pending',reviewStatus:'draft',progress:0,quality:0,version:1,cancelled:false});}
sheetReads.clear();const large=dispatch('overview',{},principal);assert.equal(large.ranking.length,91);assert.equal(large.workflow.tasks.filter(t=>t.email!==principal.user.email).length,40);assert.ok(large.workflow.pages>=3);for(const [name,n]of sheetReads)assert.equal(n,1,'Read sheet once per overview: '+name);
const page2=dispatch('workspace',{page:2},principal);assert.equal(page2.page,2);const firstIds=new Set(large.workflow.tasks.filter(t=>t.email!==principal.user.email).map(t=>t.id));assert.equal(page2.tasks.some(t=>t.email!==principal.user.email&&firstIds.has(t.id)),false);
const focus=dispatch('workspace',{focusTaskId:'pagination-task-84'},principal);assert.ok(focus.tasks.some(t=>t.id==='pagination-task-84'));assert.equal(focus.focused,true);
assert.throws(()=>dispatch('workspace',{focusTaskId:'pagination-task-84'},outsider),/quyền/);
const reportPage=dispatch('reportPage',{page:1},principal);assert.equal(reportPage.people.length,10);assert.equal(reportPage.pages,10);assert.equal(dispatch('reportPage',{page:10},principal).people.length,1);assert.throws(()=>dispatch('reportPage',{page:1},teacher),/hết hạn/);assert.throws(()=>dispatch('reportPage',{page:1},outsider),/BGH/);
console.log('91-person mocked overview, paged queues, report pages and one-read-per-sheet checks passed');
