import { navigate } from '../lib/router';
import { getProgress } from '../lib/storage';

export function renderNav(active: string) {
  const { explored } = getProgress();
  const links = [['/','Discover','home'],['/vault','Vault','vault'],['/quizzes','Quizzes','quizzes'],['/saved','Saved','saved']];
  return `<div class="nav-wrap"><div class="container nav">
    <a class="brand" href="/" aria-label="The Curiosity Vault home"><span class="brand-mark">CV</span><span>THE CURIOSITY VAULT</span></a>
    <nav class="nav-links" aria-label="Primary">${links.map(([href,label,key]) => `<a href="${href}" class="nav-link ${active===key?'active':''}">${label}${key==='vault' && explored.size ? `<span class="dim" style="margin-left:6px">${explored.size}</span>`:''}</a>`).join('')}</nav>
    <button class="mobile-nav-trigger" type="button" aria-expanded="false" aria-controls="mobile-menu">MENU</button>
  </div><div id="mobile-menu" class="mobile-menu"><div class="container">${links.map(([href,label,key]) => `<a href="${href}" class="nav-link ${active===key?'active':''}">${label}</a>`).join('')}</div></div></div>`;
}

export function bindNav() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('//')) return;
      e.preventDefault(); navigate(href);
    });
  });
  const trigger = document.querySelector<HTMLButtonElement>('.mobile-nav-trigger');
  const menu = document.getElementById('mobile-menu');
  trigger?.addEventListener('click', () => {
    const open = menu?.classList.toggle('open') ?? false;
    trigger.setAttribute('aria-expanded', String(open));
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}
