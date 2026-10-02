import { stories } from '../data/stories.js';
import { markRabbitDiscovered } from '../lib/storage.js';
import { navigate } from '../lib/router.js';

export function renderRabbit(id: string) {
  const root=stories.find(s=>s.slug===id) || stories[0]; const chain=root.rabbitHole.map(slug=>stories.find(s=>s.slug===slug)).filter(Boolean) as typeof stories;
  return `<main class="page"><div class="container page-header"><span class="kicker">Connected discoveries</span><h1 class="display">RABBIT HOLE</h1><p>Start at <strong>${root.title}</strong>, then follow the explicit trail through the Vault.</p></div><section class="section-tight"><div class="container"><div class="rabbit-chain">${chain.map((s,i)=>`${i?'<div class="rabbit-arrow">→</div>':''}<a class="rabbit-node ${s.slug===root.slug?'current':''}" href="/story/${s.slug}"><span class="kicker">DISCOVERY ${String(i+1).padStart(2,'0')}</span><strong style="display:block;margin-top:8px;font-family:Georgia,serif;font-size:24px;line-height:1.05">${s.title}</strong><span class="muted" style="display:block;margin-top:8px">${s.hook}</span></a>`).join('')}</div><div style="margin-top:26px"><a class="btn btn-ghost" href="/story/${root.slug}">RETURN TO ${root.category.toUpperCase()} STORY →</a></div></div></section></main>`;
}

export function bindRabbit(id:string){markRabbitDiscovered(id);document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.getAttribute('href')!);}));}
