const {chromium}=require('playwright-core');const path=require('path');
const dir=path.resolve(__dirname,'..');const url='file://'+dir+'/index.html';
const mode=process.argv[2]||'all'; const extra=process.argv[3]||'';
(async()=>{const b=await chromium.launch({channel:'chrome'});
 const errs=[];
 const p=await b.newPage({viewport:{width:1440,height:900}});
 p.on('pageerror',e=>errs.push(e.message));
 if(mode==='all'||mode==='sheet'){
 for(let i=0;i<=12;i++){const t=i*0.5;await p.goto(url+'?replay&seek='+t+extra);await p.waitForTimeout(250);await p.screenshot({path:`${dir}/docs/frames/1440-t${t.toFixed(1)}.png`});}
 await p.goto(url);await p.waitForTimeout(300);await p.screenshot({path:`${dir}/docs/frames/1440-final.png`});}
 if(mode==='all'||mode==='dense'){
 for(let t=1.8;t<=4.31;t+=0.1){await p.goto(url+'?replay&seek='+t.toFixed(2)+extra);await p.waitForTimeout(150);await p.screenshot({path:`${dir}/tools/out/d1440-${t.toFixed(1)}.png`});}}
 const m=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
 m.on('pageerror',e=>errs.push(e.message));
 if(mode==='all'||mode==='dense'){
 for(let t=1.8;t<=4.31;t+=0.2){await m.goto(url+'?replay&seek='+t.toFixed(2)+extra);await m.waitForTimeout(150);await m.screenshot({path:`${dir}/tools/out/d390-${t.toFixed(1)}.png`});}}
 if(mode==='all'||mode==='sheet'){
 await m.goto(url+'?replay&seek=9');await m.waitForTimeout(300);await m.screenshot({path:`${dir}/docs/frames/390-final.png`,fullPage:true});
 console.log('390 scrollWidth',await m.evaluate(()=>document.documentElement.scrollWidth));}
 // pen-in-viewport check
 for(const [w,h] of [[1440,900],[390,844]]){const q=await b.newPage({viewport:{width:w,height:h}});
  await q.goto(url+'?replay&seek=1'+extra);await q.waitForTimeout(150);
  const r=await q.evaluate(()=>{const O=window.__oida;let mn=1e9,mx=-1e9,my=-1e9,mny=1e9;
   for(let t=O.T.write[0];t<=O.T.write[1];t+=0.01){/* mimic camera */}
   return {T:O.T,HL:O.HL,TOTAL:O.TOTAL};});
  console.log(w,JSON.stringify(r));
  let bad=0,minx=1e9,maxx=-1e9,miny=1e9,maxy=-1e9;
  for(let t=r.T.write[0];t<=r.T.write[1]+0.01;t+=0.05){await q.goto(url+'?replay&seek='+t.toFixed(3)+extra);
   const bb=await q.evaluate(()=>{const els=[...document.querySelectorAll('#ink > *, #thread, #proxy ellipse')].filter(e=>e.style.display!=='none'&&getComputedStyle(e).visibility!=='hidden');let x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;for(const e of els){const r=e.getBoundingClientRect();if(!r.width)continue;x0=Math.min(x0,r.left);x1=Math.max(x1,r.right);y0=Math.min(y0,r.top);y1=Math.max(y1,r.bottom);}return [x0,x1,y0,y1];});
   minx=Math.min(minx,bb[0]);maxx=Math.max(maxx,bb[1]);miny=Math.min(miny,bb[2]);maxy=Math.max(maxy,bb[3]);}
  console.log(w,'ink extent x',minx.toFixed(0),maxx.toFixed(0),'y',miny.toFixed(0),maxy.toFixed(0));await q.close();}
 console.log('errors',errs);await b.close();})();
