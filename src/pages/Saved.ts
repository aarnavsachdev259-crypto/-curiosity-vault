import { stories } from '../data/stories.js';
import { getSaved } from '../lib/storage.js';
import { renderStoryCard, bindStoryCards } from '../components/StoryCard.js';
import { navigate } from '../lib/router.js';

export function renderSaved() {
  const saved=getSaved(); const items=stories.filter(s=>saved.has(s.slug));
  return `<main class="page"><div class="container page-header"><span class="kicker">Your private shelf</span><h1 class="display">SAVED</h1><p>Keep the discoveries you know you’ll want to revisit. Saved stories live locally in this browser.</p></div><section class="section-tight"><div class="container">${items.length?`<div class="grid grid-3">${items.map(s=>renderStoryCard(s)).join('')}</div>`:`<div class="empty"><span class="kicker">Nothing saved yet</span><h2>Your shelf is empty.</h2><p class="muted">Open a story, hit ☆ SAVE, and it will stay here on this device.</p><a class="btn btn-primary" href="/vault" style="margin-top:18px">FIND A DISCOVERY →</a></div>`}</div></section></main>`;
}

export function bindSaved(){document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.getAttribute('href')!);})); bindStoryCards();}
