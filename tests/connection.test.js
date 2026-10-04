const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const elements=new Map(),storage=new Map();function el(id){if(!elements.has(id))elements.set(id,{id,value:'',textContent:'',innerHTML:'',classList:{add(){},remove(){},toggle(){}},append(){},remove(){},disabled:false});return elements.get(id);}
el('#catalogData').textContent=fs.readFileSync('kpi/catalog.json','utf8');
const context=vm.createContext({console,crypto:crypto.webcrypto,TextEncoder,URLSearchParams,Date,JSON,Math,Number,String,Array,Object,Set,Map,Promise,Error,window:{},document:{querySelector:el,querySelectorAll:()=>[],createElement:()=>el('script'),head:{append(){}},body:{append(){}}},localStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},setTimeout:()=>1,clearTimeout(){}});
vm.runInContext(fs.readFileSync('kpi/core.js','utf8'),context);vm.runInContext(fs.readFileSync('kpi/app.js','utf8'),context);
const submitter={disabled:false,textContent:'Save'};
el('#apiEndpoint').value='https://example.test/not-google';el('#connectionForm').onsubmit({preventDefault(){},submitter});assert.equal(storage.size,0);
el('#apiEndpoint').value='https://script.google.com/macros/s/TEST-deployment_123/exec';el('#connectionForm').onsubmit({preventDefault(){},submitter});assert.equal(storage.get('kpi_apps_script_url'),el('#apiEndpoint').value);assert.equal(vm.runInContext('API_URL',context),el('#apiEndpoint').value);assert.equal(vm.runInContext('state.token',context),'');assert.equal(vm.runInContext('state.user',context),null);assert.equal(storage.size,1);
console.log('Endpoint validation, switching and session reset checks passed');
