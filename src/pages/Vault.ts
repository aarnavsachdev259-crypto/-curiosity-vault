import { stories, categories } from '../data/stories.js';
import { renderStoryCard, bindStoryCards } from '../components/StoryCard.js';
import { navigate } from '../lib/router.js';

export function renderVault() {
  const params = new URLSearchParams(location.search);
  const category = params.get('category') || 'All';
  return `<main class="page"><div class="container page-header"><span class="kicker">Archive access</span><h1 class="display">THE VAULT</h1><p>Thirty stories built as small worlds. Filter by doorway, search by clue, then follow whatever catches.</p></div><section class="section-tight"><div class="container"><div class="toolbar"><input class="search" id="vault-search" type="search" placeholder="Search titles, descriptions, categories, tags…" aria-label="Search the Vault" /><div class="chips" id="vault-filters">${categories.map(c=>`<button class="chip ${category.toLowerCase()===c.toLowerCase()?'active':''}" data-filter="${c}" type="button">${c}</button>`).join('')}</div></div><div class="grid grid-3" id="vault-grid"></div></div></section></main>`;
}

export function bindVault() {
  const grid = document.getElementById('vault-grid')!;
  const search = document.getElementById('vault-search') as HTMLInputElement;
  let current = new URLSearchParams(location.search).get('category') || 'All';
  const paint = () => {
    const q = search.value.trim().toLowerCase();
    const filtered = stories.filter(s => (current==='All'||s.category===current) && (!q || [s.title,s.description,s.category,...s.tags].join(' ').toLowerCase().includes(q)));
    grid.innerHTML = filtered.length ? filtered.map(s=>renderStoryCard(s)).join('') : `<div class="empty" style="grid-column:1/-1"><span class="kicker">Nothing yet</span><h2>No match in the Vault.</h2><p class="muted">Try another phrase, category, or one of the weirder clues.</p></div>`;
    bindStoryCards();
  };
  document.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
    current = btn.dataset.filter!;
    document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    paint();
  }));
  search.addEventListener('input', paint);
  paint();
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); navigate(a.getAttribute('href')!); }));
}
