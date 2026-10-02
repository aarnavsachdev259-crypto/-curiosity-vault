import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { stories } from '../dist/src/data/stories.js';
import { quizzes } from '../dist/src/data/quizzes.js';

const root = path.resolve('dist');
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.svg':'image/svg+xml' };
const server = http.createServer((req,res)=>{
  const clean = decodeURIComponent((req.url||'/').split('?')[0]);
  let file = path.resolve(root, '.' + (clean === '/' ? '/index.html' : clean));
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(root,'index.html');
  try { const data=fs.readFileSync(file); res.writeHead(200, {'content-type': mime[path.extname(file)] || 'application/octet-stream'}); res.end(data); }
  catch { res.writeHead(500); res.end('error'); }
});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const {port}=server.address();
const paths=['/','/vault','/quizzes','/saved',...stories.map(s=>`/story/${s.slug}`),...quizzes.map(q=>`/quiz/${q.id}`),...stories.map(s=>`/rabbit-hole/${s.slug}`),'/this-route-does-not-exist'];
let bad=false;
for (const p of paths) {
  const r=await fetch(`http://127.0.0.1:${port}${p}`);
  const body=await r.text();
  if(r.status!==200 || !body.includes('<div id="app"></div>')) { bad=true; console.error('FAIL HTTP',p,r.status); }
}
for (const asset of ['/src/main.js','/styles/tokens.css','/styles/site.css']) {
  const r=await fetch(`http://127.0.0.1:${port}${asset}`);
  if(r.status!==200) { bad=true; console.error('FAIL ASSET',asset,r.status); }
}
server.close();
if (bad) process.exitCode=1; else console.log(`PASS production SPA server: ${paths.length} application routes + assets returned 200 with SPA fallback.`);
