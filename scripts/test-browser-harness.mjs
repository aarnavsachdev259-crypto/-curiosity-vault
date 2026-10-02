import fs from 'node:fs';
import {spawn} from 'node:child_process';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));

const modulePaths=[
  'src/data/types.js','src/data/stories.js','src/data/quizzes.js','src/lib/storage.js','src/lib/router.js',
  'src/components/Visual.js','src/components/Nav.js','src/components/Footer.js','src/components/StoryCard.js','src/components/Interaction.js',
  'src/pages/Home.js','src/pages/Vault.js','src/pages/Story.js','src/pages/Quizzes.js','src/pages/Quiz.js','src/pages/Saved.js','src/pages/RabbitHole.js','src/pages/NotFound.js','src/main.js'
];
let bundle='';
for(const rel of modulePaths){
  let code=fs.readFileSync(`dist/${rel}`,'utf8');
  code=code.replace(/^import .*?;\n/gm,'').replace(/^export /gm,'').replace(/^export \{.*?\};\n?/gms,'');
  if(rel==='src/lib/router.js'){
    code=code.replace("const parts = location.pathname.split('/').filter(Boolean);", "const path = window.__CV_PATH || location.pathname; const parts = path.split('/').filter(Boolean);");
    code=code.replace("history.pushState({}, '', path);", "window.__CV_PATH = path;");
    code=code.replace("window.dispatchEvent(new PopStateEvent('popstate'));", "window.dispatchEvent(new Event('popstate'));");
    code=code.replace("window.scrollTo({ top: 0, behavior: 'smooth' });", "try { window.scrollTo(0,0); } catch {}");
  }
  bundle += `\n// MODULE ${rel}\n${code}\n`;
}
bundle += `\nwindow.__cvTestNavigate = navigate; window.__cvStoryCount = stories.length; window.__cvQuizCount = quizzes.length;\n`;
const css=fs.readFileSync('src/styles/tokens.css','utf8')+'\n'+fs.readFileSync('src/styles/site.css','utf8');
const storageShim=`(()=>{const m=new Map();Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:k=>m.has(k)?m.get(k):null,setItem:(k,v)=>m.set(k,String(v)),removeItem:k=>m.delete(k),clear:()=>m.clear(),key:i=>[...m.keys()][i]??null,get length(){return m.size}}})})();`;
const html=`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>${css}</style></head><body><div id="app"></div><script>${storageShim};window.__CV_PATH='/';</script><script type="module">${bundle}</script></body></html>`;

const chrome=spawn('chromium',['--headless=new','--no-sandbox','--disable-gpu','--disable-dev-shm-usage','--no-first-run','--remote-debugging-port=9228','--user-data-dir=/tmp/cv-harness','about:blank'],{stdio:'ignore'});
process.on('exit',()=>{try{chrome.kill()}catch{}});
process.on('SIGINT',()=>{try{chrome.kill()}catch{};process.exit(130)});
let wsUrl=''; for(let i=0;i<50;i++){try{const l=await fetch('http://127.0.0.1:9228/json/list').then(r=>r.json());if(l[0]){wsUrl=l[0].webSocketDebuggerUrl;break}}catch{}await sleep(100)}
if(!wsUrl){chrome.kill();throw new Error('Chromium harness failed to start');}
const ws=new WebSocket(wsUrl);await new Promise((r,j)=>{ws.onopen=r;ws.onerror=j});let id=0;const pending=new Map();const errors=[];ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.method==='Runtime.exceptionThrown') { const d=m.params.exceptionDetails||{}; errors.push(d.exception?.description || d.exception?.value || d.text || 'runtime exception'); }if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id)}};const c=(method,params={})=>new Promise((r,j)=>{const i=++id;pending.set(i,m=>m.error?j(new Error(m.error.message)):r(m.result));ws.send(JSON.stringify({id:i,method,params}))});const ev=async expression=>{const out=await c('Runtime.evaluate',{expression,returnByValue:true,awaitPromise:true});if(out.exceptionDetails) throw new Error(out.exceptionDetails.text||out.exceptionDetails.exception?.description||'runtime evaluation failed');return out.result?.value;};const ok=(v,m)=>{if(!v)throw new Error(m)};
await c('Runtime.enable');await c('Page.enable');await c('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});
await c('Page.setDocumentContent',{frameId:(await c('Page.getFrameTree')).frameTree.frame.id,html});await sleep(1000);
ok(await ev('document.body.innerText.includes("THE CURIOSITY VAULT")'),'app did not mount in Chromium');
ok(await ev('document.body.innerText.includes("ENTER THE VAULT")'),'home CTA missing');
ok((await ev('document.querySelectorAll(".story-card").length'))===6,'homepage story grid wrong');
ok(await ev('window.__cvStoryCount===30 && window.__cvQuizCount===10'),'diagnostic counts wrong');

// Every story route renders with its interactive surface.
const storySlugs = JSON.parse(fs.readFileSync('scripts/story-slugs.json','utf8'));
for(const slug of storySlugs){
  await ev(`window.__cvTestNavigate('/story/${slug}')`); await sleep(45);
  ok(await ev('Boolean(document.querySelector(".story-title"))'),`story title missing: ${slug}`);
  ok(await ev('Boolean(document.querySelector("[data-interaction], [data-reveal-interaction], [data-sequence], [data-slider-interaction]"))'),`interaction missing: ${slug}`);
  const kind=await ev("document.querySelector('[data-interaction]')?'choice':document.querySelector('[data-reveal-interaction]')?'reveal':document.querySelector('[data-sequence]')?'sequence':'slider'");
  if(kind==='choice'){ await ev("document.querySelector('[data-interaction-option]').click()"); await sleep(15); ok(await ev("document.querySelector('[data-interaction-feedback]')?.hidden===false"),`choice interaction failed: ${slug}`); }
  else if(kind==='reveal'){ await ev("document.querySelector('[data-reveal-trigger]').click()"); ok(await ev("document.querySelector('[data-reveal-target]')?.hidden===false"),`reveal interaction failed: ${slug}`); }
  else if(kind==='sequence'){ await ev("document.querySelector('[data-step]').click()"); ok(await ev("document.querySelector('[data-sequence-feedback]')?.hidden===false"),`sequence interaction failed: ${slug}`); }
  else { await ev("(()=>{const i=document.querySelector('[data-slider]');i.value=String(Number(i.max)-1);i.dispatchEvent(new Event('input',{bubbles:true}));document.querySelector('[data-slider-reveal]').click()})()"); ok(await ev("document.body.innerText.includes('PREDICTION LOCKED')"),`slider interaction failed: ${slug}`); }
}

// Save and interaction behavior on a concrete story.
await ev("window.__cvTestNavigate('/story/the-stroop-trap')");await sleep(80);await ev("document.querySelector('[data-story-save]').click()");
ok(await ev("localStorage.getItem('cv:saved').includes('the-stroop-trap')"),'save state did not persist');
await ev("document.querySelector('[data-interaction-option=\\\"1\\\"]').click()");
ok(await ev("!document.querySelector('[data-interaction-feedback]').hidden"),'interaction feedback did not reveal');

// Vault search + category filter.
await ev("window.__cvTestNavigate('/vault')");await sleep(80);await ev("(()=>{const i=document.querySelector('#vault-search');i.value='Stroop';i.dispatchEvent(new Event('input',{bubbles:true}))})()");
ok(await ev('document.querySelectorAll("#vault-grid .story-card").length===1'),'search did not reduce the grid to one result');
await ev("(()=>{const i=document.querySelector('#vault-search');i.value='';i.dispatchEvent(new Event('input',{bubbles:true}));const b=[...document.querySelectorAll('[data-filter]')].find(x=>x.textContent.trim()==='Science');b.click()})()");
ok(await ev('document.querySelectorAll("#vault-grid .story-card").length>0'),'science filter empty unexpectedly');

// Quiz completion across all 10 quizzes.
const quizIds = JSON.parse(fs.readFileSync('scripts/quiz-ids.json','utf8'));
for(const id of quizIds){
  await ev(`window.__cvTestNavigate('/quiz/${id}')`); await sleep(70);
  ok(await ev("document.querySelectorAll('[data-q-option]').length>=2"),`quiz options missing: ${id}`);
  for(let q=0;q<3;q++){
    await ev("document.querySelector('[data-q-option=\"0\"]').click()"); await sleep(25);
    ok(await ev("document.querySelector('[data-q-feedback]')?.hidden===false"),`quiz feedback missing ${id} q${q+1}`);
    await ev("document.querySelector('[data-q-next]').click()"); await sleep(35);
  }
  ok(await ev(`localStorage.getItem('cv:quizzes').includes('${id}')`),`quiz completion missing: ${id}`);
}

// Rabbit hole and saved page.
await ev("window.__cvTestNavigate('/rabbit-hole/the-stroop-trap')");await sleep(60);ok(await ev('document.querySelectorAll(".rabbit-node").length>=3'),'rabbit hole chain missing');
await ev("window.__cvTestNavigate('/saved')");await sleep(60);ok(await ev('document.body.innerText.includes("The Stroop Trap")'),'saved story not shown');

// Random Drop + mobile menu interaction.
await ev("window.__cvTestNavigate('/')"); await sleep(60);
await ev("document.querySelector('[data-random]').click()"); await sleep(60);
ok(await ev("(window.__CV_PATH||'').startsWith('/story/')"),'random drop did not open a story');
await ev("window.__cvTestNavigate('/')"); await sleep(60);
await c('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
await ev("document.querySelector('.mobile-nav-trigger').click()");
ok(await ev("document.querySelector('.mobile-nav-trigger').getAttribute('aria-expanded')==='true' && document.querySelector('#mobile-menu').classList.contains('open')"),'mobile menu did not open');

// Responsive layout: actual Chromium layout metrics, not CSS inspection.
for(const [w,h] of [[375,812],[390,844],[414,896],[1024,1366],[1280,900],[1440,900],[1920,1080]]){
  await c('Emulation.setDeviceMetricsOverride',{width:w,height:h,deviceScaleFactor:1,mobile:w<600});await ev("window.__cvTestNavigate('/vault')");await sleep(55);
  const r=await ev(`(()=>({sw:document.documentElement.scrollWidth,iw:innerWidth,menu:getComputedStyle(document.querySelector('.mobile-nav-trigger')).display,nav:getComputedStyle(document.querySelector('.nav-links')).display}))()`);
  ok(r.sw<=r.iw+1,`horizontal overflow at ${w}: ${r.sw} > ${r.iw}`);if(w<600)ok(r.menu!=='none',`mobile menu missing at ${w}`);if(w>=1280)ok(r.nav!=='none',`desktop nav hidden at ${w}`);
}

await c('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});await ev("window.__cvTestNavigate('/')");await sleep(80);const mShot=await c('Page.captureScreenshot',{format:'png'});fs.writeFileSync('test-output-home-mobile.png',Buffer.from(mShot.data,'base64'));
await c('Emulation.setDeviceMetricsOverride',{width:1440,height:900,deviceScaleFactor:1,mobile:false});await ev("window.__cvTestNavigate('/story/the-voynich-manuscript')");await sleep(80);const dShot=await c('Page.captureScreenshot',{format:'png'});fs.writeFileSync('test-output-story-desktop.png',Buffer.from(dShot.data,'base64'));

ws.close();chrome.kill();if(errors.length)throw new Error(`Chromium exceptions: ${errors.join(' | ')}`);console.log('CHROMIUM UI HARNESS OK · 30 story renders + 10 quizzes + interactions + random drop + search/filter + save + rabbit hole + mobile menu + responsive layout');
