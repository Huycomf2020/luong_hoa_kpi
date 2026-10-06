import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import {fileURLToPath} from 'node:url';import {createDomain} from '../supabase/functions/kpi-api/domain.js';
const dir=path.dirname(fileURLToPath(import.meta.url)),require=createRequire(import.meta.url);
let suite=fs.readFileSync(path.join(dir,'backend.test.cjs'),'utf8');
const old="const call=(name,...args)=>{ctx.testArgs=args;return vm.runInContext(`${name}(...testArgs)`,ctx);};";
const replacement=`const originalCall=(name,...args)=>{ctx.testArgs=args;return vm.runInContext(name+'(...testArgs)',ctx);};
const call=(name,...args)=>{
 if(name!=='kpiDispatch_'||['login','logout','changePassword'].includes(args[0]))return originalCall(name,...args);
 vm.runInContext('KPI_READ_CACHE=null;KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;',ctx);
 const user=originalCall('kpiAuth_',args[2]);const tables={},headers={};
 for(const [name,s]of sheets){headers[name]=s.data[0];tables[name]=s.data.slice(1).map((values,i)=>{const row={_row:i+2};headers[name].forEach((key,j)=>row[key]=values[j]??'');return row;});}
 const native=createDomain({tables,headers,actor:user.email,sessionToken:args[2],cacheValues:Object.fromEntries(cache)});
 const result=native.dispatch(args[0],args[1],args[2]);
 for(const w of native.writes()){const s=sheets.get(w.table_name);s.data[w.row_no-1]=headers[w.table_name].map(k=>w.data[k]??'');}
 for(const w of native.cacheWrites()){if(w.remove)cache.delete(w.key);else cache.set(w.key,w.value);}
 vm.runInContext('KPI_READ_CACHE=null;KPI_INDEX_CACHE={};KPI_PEOPLE_CACHE=null;',ctx);
 return result;
};`;
if(!suite.includes(old))throw Error('Test harness changed; review adapter');suite=suite.replace(old,replacement);
new Function('require','__dirname','createDomain',suite)(require,dir,createDomain);
console.log('The full workflow suite also passes across fresh Supabase domain instances and persisted writes/previews.');
