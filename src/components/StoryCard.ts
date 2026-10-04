import type { Story } from '../data/types.js';
import { toggleSaved, getSaved } from '../lib/storage.js';
import { navigate } from '../lib/router.js';
import { visualSvg } from './Visual.js';

export function renderStoryCard(story: Story, compact=false) {
  const saved = getSaved().has(story.slug);
  return `<article class="story-card ${compact?'compact':''}" data-story-card="${story.slug}">
    <a class="story-visual art-${story.visual}" href="/story/${story.slug}" aria-label="Open ${story.title}">${visualSvg(story.visual, story.category.toUpperCase(), story.slug)
      
    }</a>
    <div class="card-body">
      <div class="card-meta"><span>${story.category}</span><span>${story.minutes} min · ${story.curiosity}/10</span></div>
      <h3 class="card-title"><a href="/story/${story.slug}">${story.title}</a></h3>
      <p class="card-hook">${story.hook}</p>
      <div class="card-footer"><a class="text-link" href="/story/${story.slug}">OPEN DISCOVERY →</a><button class="save-btn ${saved?'saved':''}" data-save="${story.slug}" type="button" aria-label="${saved?'Remove':'Save'} ${story.title}">${saved?'★':'☆'}</button></div>
    </div>
  </article>`;
}

export function bindStoryCards() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/story/"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); navigate(a.getAttribute('href')!); }));
  document.querySelectorAll<HTMLButtonElement>('[data-save]').forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    const slug = btn.dataset.save!; const saved = toggleSaved(slug);
    btn.classList.toggle('saved', saved); btn.textContent = saved ? '★' : '☆'; btn.setAttribute('aria-label', `${saved?'Remove':'Save'} ${slug}`);
    window.dispatchEvent(new CustomEvent('cv:storage-change'));
  }));
}
