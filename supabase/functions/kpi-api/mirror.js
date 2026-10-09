// One-way, read-only projection. Authentication material never leaves Supabase.
export const MIRROR_TABLES=['gvcnv','bang_luong_hoa_kpi','kpi_cong_viec','kpi_dot','kpi_phan_cap','kpi_ke_hoach','kpi_doi_chieu','kpi_phan_hoi','kpi_chot_ky','kpi_chot_ket_qua','kpi_yeu_cau','kpi_chung','kpi_thuong','kpi_thuong_chuyen_ky','kpi_xep_loai','kpi_ket_qua'];
export const PERSON_FIELDS=['STT','Họ và tên','Sinh năm','Chức vụ','Chuyên môn','Email','Tổ','Nhóm nhiệm vụ tương đồng','Lớp chủ nhiệm','Hòa nhập','Vai trò KPI'];
const sensitive=k=>/password|mat khau|salt|hash|token|secret|pepper|digest/i.test(String(k).normalize('NFD').replace(/[\u0300-\u036f]/g,''));
export function cleanMirror(value){if(Array.isArray(value))return value.map(cleanMirror);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).filter(([k])=>!sensitive(k)&&k!=='_row').map(([k,v])=>[k,cleanMirror(v)]));return value;}
export function mirrorSnapshot(snapshot,spreadsheetId){return {revision:snapshot.revision,spreadsheetId,tables:Object.fromEntries(MIRROR_TABLES.map(name=>{const headers=name==='gvcnv'?PERSON_FIELDS:(snapshot.headers[name]||[]).filter(k=>!sensitive(k)&&k!=='_row');return [name,{headers,rows:(snapshot.tables[name]||[]).map(row=>Object.fromEntries(headers.map(h=>[h,cleanMirror(h==='Chuyên môn'?(row[h]??row['Môn']??''):row[h]??'')])))}];}).filter(([,v])=>v.headers.length))};}
export function buildMirrorScript({endpoint,publicKey,token,spreadsheetId}){return `/** Chỉ sao chép dữ liệu Supabase → Sheet; không thay Code.gs đang dùng. */
function setupKpiMirror(){
 PropertiesService.getScriptProperties().setProperties({KPI_MIRROR_URL:${JSON.stringify(endpoint)},KPI_MIRROR_PUBLIC_KEY:${JSON.stringify(publicKey)},KPI_MIRROR_TOKEN:${JSON.stringify(token)},KPI_MIRROR_SHEET:${JSON.stringify(spreadsheetId)}});
 syncKpiFromSupabase();
 ScriptApp.getProjectTriggers().filter(t=>t.getHandlerFunction()==='syncKpiFromSupabase').forEach(t=>ScriptApp.deleteTrigger(t));
 ScriptApp.newTrigger('syncKpiFromSupabase').timeBased().everyMinutes(5).create();
}
function syncKpiFromSupabase(){
 const lock=LockService.getScriptLock();if(!lock.tryLock(1000))return;
 const p=PropertiesService.getScriptProperties();
 function call(action,payload){const r=UrlFetchApp.fetch(p.getProperty('KPI_MIRROR_URL'),{method:'post',contentType:'application/json',headers:{apikey:p.getProperty('KPI_MIRROR_PUBLIC_KEY'),'x-kpi-mirror-key':p.getProperty('KPI_MIRROR_TOKEN')},payload:JSON.stringify({action:action,payload:payload||{}}),muteHttpExceptions:true});const o=JSON.parse(r.getContentText());if(r.getResponseCode()!==200||!o.ok)throw Error(o.error||'Không đồng bộ được.');return o.data;}
 function cell(v){if(v===null||v===undefined)return '';if(typeof v==='object')v=JSON.stringify(v);return typeof v==='string'&&/^[=+@-]/.test(v)?"'"+v:v;}
 try{
 const d=call('mirrorSnapshot',{revision:Number(p.getProperty('KPI_MIRROR_REVISION')||-1)});if(d.unchanged)return;
 if(d.spreadsheetId!==p.getProperty('KPI_MIRROR_SHEET'))throw Error('Sai bảng đích.');
 const book=SpreadsheetApp.openById(d.spreadsheetId);
 Object.keys(d.tables).forEach(name=>{
 const t=d.tables[name];let s=book.getSheetByName(name);if(!s)s=book.insertSheet(name);
 if(name==='gvcnv'){
  const values=s.getDataRange().getValues(),h=values[0]||[],email=h.indexOf('Email');if(email<0)throw Error('gvcnv thiếu Email.');
  const index={};values.slice(1).forEach((r,i)=>{const e=String(r[email]||'').trim().toLowerCase();if(e){if(index[e])throw Error('Email trùng trong gvcnv.');index[e]=i+2;}});
  // Preflight every account before the first roster write. Keep password columns intact.
  t.rows.forEach(r=>{if(!index[String(r.Email).toLowerCase()])throw Error('Tài khoản chưa có trong gvcnv.');});
  t.headers.forEach(k=>{let col=h.indexOf(k);if(k==='Chuyên môn'&&col<0)col=h.indexOf('Môn');if(col<0){col=h.length;h.push(k);}else h[col]=k;s.getRange(1,col+1).setValue(k);const dest=values.slice(1).map(r=>[cell(r[col]??'')]);t.rows.forEach(r=>{dest[index[String(r.Email).toLowerCase()]-2]=[cell(r[k])];});if(dest.length)s.getRange(2,col+1,dest.length,1).setValues(dest);});
 }else{
  const width=t.headers.length,height=t.rows.length+1,previous=s.getLastRow();if(s.getMaxRows()<height)s.insertRowsAfter(s.getMaxRows(),height-s.getMaxRows());if(s.getMaxColumns()<width)s.insertColumnsAfter(s.getMaxColumns(),width-s.getMaxColumns());
  s.getRange(1,1,height,width).setValues([t.headers].concat(t.rows.map(r=>t.headers.map(k=>cell(r[k])))));
  if(previous>height)s.getRange(height+1,1,previous-height,width).clearContent();s.setFrozenRows(1);
 }
 });
 SpreadsheetApp.flush();call('mirrorAck',{revision:d.revision});p.setProperty('KPI_MIRROR_REVISION',String(d.revision));p.setProperty('KPI_MIRROR_LAST_OK',new Date().toISOString());
 }catch(e){p.setProperty('KPI_MIRROR_LAST_ERROR',new Date().toISOString());throw e;}finally{lock.releaseLock();}
}
`;}
