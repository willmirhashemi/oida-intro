const {chromium}=require('playwright-core');const path=require('path');
const dir=path.resolve(__dirname,'..');const url='file://'+dir+'/index.html';
(async()=>{const b=await chromium.launch({channel:'chrome'});const p=await b.newPage({viewport:{width:1440,height:900}});
await p.goto(url+'?replay&seek=1');await p.waitForTimeout(200);const T=await p.evaluate(()=>window.__oida.T);console.log(JSON.stringify(T));
const shots=[];for(const dt of [-0.002,0.002]){await p.goto(url+'?replay&seek='+(T.write[1]+dt).toFixed(4));await p.waitForTimeout(200);
 await p.evaluate(()=>{document.querySelector('#world > circle').style.display='none'});shots.push(await p.screenshot());}
require('fs').writeFileSync(dir+'/work/swapA.png',shots[0]);require('fs').writeFileSync(dir+'/work/swapB.png',shots[1]);
for(const [w,h] of [[1440,900],[390,844],[1280,700]]){const q=await b.newPage({viewport:{width:w,height:h}});let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
 for(let t=T.write[0];t<=T.write[1]+0.01;t+=0.05){await q.goto(url+'?replay&size=70&seek='+t.toFixed(3));
  const bb=await q.evaluate(()=>{let a=[1e9,-1e9,1e9,-1e9];for(const e of document.querySelectorAll('#ink > *, #thread, #ring, #ida')){if(e.style.display==='none'||getComputedStyle(e).visibility==='hidden')continue;const r=e.getBoundingClientRect();if(!r.width)continue;a=[Math.min(a[0],r.left),Math.max(a[1],r.right),Math.min(a[2],r.top),Math.max(a[3],r.bottom)];}return a;});
  x0=Math.min(x0,bb[0]);x1=Math.max(x1,bb[1]);y0=Math.min(y0,bb[2]);y1=Math.max(y1,bb[3]);}
 console.log(w,h,'size70 extent',x0|0,x1|0,y0|0,y1|0);await q.close();}
await b.close();})();
