import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../dist');
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{
  const requestPath=decodeURIComponent((req.url||'/').split('?')[0]);
  let file=path.resolve(root,'.'+requestPath);
  if(!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  if(!fs.existsSync(file)||fs.statSync(file).isDirectory()) file=path.join(root,'index.html');
  fs.readFile(file,(err,data)=>{ if(err){res.writeHead(500); return res.end('Server error');} res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'text/plain; charset=utf-8'}); res.end(data); });
});
server.listen(4173,'0.0.0.0');
