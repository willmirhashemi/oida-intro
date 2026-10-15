const {chromium}=require('playwright-core');const path=require('path');
const dir=path.resolve(__dirname,'..');const url='file://'+dir+'/index.html';
(async()=>{const b=await chromium.launch({channel:'chrome'});const p=await b.newPage({viewport:{width:1440,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto(url+'?tune&hold=0.8&speed=1.25&size=60&pen=lift');await p.waitForTimeout(400);
await p.click('#tn-line');await p.fill('#tn-size','45');
console.log('url',p.url());console.log('intro still on',await p.evaluate(()=>document.documentElement.className));
await p.screenshot({path:dir+'/frames/1440-tune.png'});
await p.waitForTimeout(6000);console.log('after',await p.evaluate(()=>document.documentElement.className));
// header landing check: last glide frame vs final lockup
await p.goto(url+'?replay&seek=5.75');await p.waitForTimeout(200);await p.screenshot({path:dir+'/work/land.png',clip:{x:620,y:50,width:200,height:80}});
await p.goto(url+'?replay&seek=9');await p.waitForTimeout(200);await p.screenshot({path:dir+'/work/land2.png',clip:{x:620,y:50,width:200,height:80}});
console.log(errs);await b.close();})();
