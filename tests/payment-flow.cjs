const fs=require('fs'),vm=require('vm'),path=require('path');
const context=vm.createContext({console,Intl,Date,Math,Number,String,JSON,Set,Array,crypto:require('crypto').webcrypto,localStorage:{getItem:()=>null,setItem(){}},document:{addEventListener(){},querySelector:()=>null},window:{addEventListener(){}},navigator:{}});
vm.runInContext(fs.readFileSync(path.join(__dirname,'../installments.js'),'utf8'),context);
vm.runInContext(fs.readFileSync(path.join(__dirname,'../app.js'),'utf8').split('\ninstallBackGuard();')[0],context);
vm.runInContext(`
function check(ok,msg){if(!ok)throw Error(msg)}
let inputs,form,dialogHtml;
FormData=class {constructor(){}get(key){return inputs[key]||''}};
planDialog=(title,html)=>{dialogHtml=html;const nodes={};form={elements:{existing:{value:''}},querySelector:s=>nodes[s]??=( {hidden:true,textContent:''})};return {querySelector:()=>form}};
closePlanDialog=()=>true;render=()=>{};toast=()=>{};
data.accounts=[{id:'affirm',name:'Affirm',group:'Debts',opening:30000,debtKind:'installment'},{id:'checking',name:'Checking',group:'Everyday Money',opening:100000}];currentAccount='affirm';data.transactions=[];
inputs={source:'checking',date:now(),amount:'50.00'};
planPayment(null);form.onsubmit({preventDefault(){}});check(!form.querySelector('#payment-confirm').hidden,'unassigned preview');form.querySelector('#payment-confirm').onclick();
check(data.transactions.length===2,'one transfer pair');check(balance(account('affirm'))===25000,'debt reduced once');check(balance(account('checking'))===95000,'funding source reduced once');
planPayment(null);form.onsubmit({preventDefault(){}});check(form.querySelector('.plan-error').textContent.includes('matching payment'),'duplicate payment blocked');check(data.transactions.length===2,'duplicate did not mutate records');
const incoming=data.transactions.find(t=>t.direction==='in');const p={id:'purchase',name:'Test',schedule:planSchedule(now(),'monthly',6,5000,30000),payments:[]};account('affirm').plans=[p];
inputs={existing:incoming.id};planPayment(p);form.onsubmit({preventDefault(){}});check(!form.querySelector('#payment-confirm').hidden,'link preview');form.querySelector('#payment-confirm').onclick();check(data.transactions.length===2,'link creates no transfer');check(planRemaining(p)===25000,'purchase allocation updated');
inputs={source:'checking',date:now(),amount:'20.00',installment:'balance'};planPayment(p);form.onsubmit({preventDefault(){}});form.querySelector('#payment-confirm').onclick();check(data.transactions.length===4,'extra payment pair');check(planUnapplied(p)===2000,'extra payment awaits schedule reconciliation');check(balance(account('checking'))===93000,'funding reflects actual payments');
const html=ledger();check(html.includes('data-plan-action="make-payment"'),'installment payment button');check(!html.includes('data-action="ledger-expense"'),'old expense action removed');check(!html.includes('data-action="ledger-income"'),'old income action removed');check(!html.includes('data-action="ledger-transfer"'),'separate transfer action removed');
currentAccount='checking';const checkingHtml=ledger();check(checkingHtml.includes('data-action="ledger-transfer"'),'ordinary account actions retained');
console.log('Passed: unassigned payment, transfer pair, duplicate prevention, linking existing payment, extra balance payment.');
`,context);
