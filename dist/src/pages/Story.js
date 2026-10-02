import { stories } from '../data/stories';
import { getSaved, toggleSaved, markExplored } from '../lib/storage';
import { navigate } from '../lib/router';
import { visualSvg } from '../components/Visual';
import { renderInteraction, bindInteraction } from '../components/Interaction';
import { renderStoryCard, bindStoryCards } from '../components/StoryCard';
export function renderStory(slug) {
    const story = stories.find(s => s.slug === slug);
    if (!story)
        return `<main class="page"><div class="container empty section"><h2>Discovery not found.</h2><a class="btn btn-primary" href="/vault">RETURN TO VAULT</a></div></main>`;
    const saved = getSaved().has(story.slug);
    markExplored(story.slug);
    return `<main class="story-page"><section class="story-hero"><div class="container story-hero-grid"><div><span class="kicker">${story.category} ${story.status && story.status !== 'FACT' ? `· ${story.status}` : ''}</span><h1 class="story-title display">${story.title}</h1><p class="story-hook">${story.hook}</p><div class="story-meta-row"><span>${story.minutes} MIN EXPLORATION</span><span>CURIOSITY ${story.curiosity}/10</span><button class="save-btn ${saved ? 'saved' : ''}" data-story-save="${story.slug}" type="button">${saved ? '★ SAVED' : '☆ SAVE'}</button></div></div><div class="story-art-large art-${story.visual}">${visualSvg(story.visual, story.category.toUpperCase())}</div></div></section>
  <div class="container story-body">
    <div class="callout"><strong>Interactive intro</strong><span class="muted">Before you read the explanation, make the call. Your answer becomes part of the reveal.</span></div>
    ${renderInteraction(story.interaction)}
    ${story.sections.map((section, idx) => `<section><h2 class="display">${section.heading}</h2>${section.paragraphs.map((p, j) => `<p class="${idx === 0 && j === 0 ? 'lede' : ''}">${p}</p>`).join('')}</section>`).join('')}
    <div class="rabbit"><span class="kicker">You opened a rabbit hole</span><h2 class="display" style="margin:8px 0 22px">Follow the chain.</h2><div class="rabbit-chain">${story.rabbitHole.map((slug, i) => { const s = stories.find(x => x.slug === slug); return `${i ? '<div class="rabbit-arrow">→</div>' : ''}<a class="rabbit-node ${slug === story.slug ? 'current' : ''}" href="/story/${s.slug}"><span class="kicker">${String(i + 1).padStart(2, '0')}</span><strong style="display:block;margin-top:6px">${s.title}</strong><span class="muted" style="display:block;margin-top:6px;font-size:12px">${s.category}</span></a>`; }).join('')}</div><a class="btn btn-ghost" href="/rabbit-hole/${story.slug}">OPEN FULL RABBIT HOLE →</a></div>
    <section><h2 class="display">Deeper discovery</h2><div class="callout"><strong>Key details</strong><ul class="story-list">${story.tags.map(t => `<li>${t}</li>`).join('')}</ul></div></section>
    <section><h2 class="display">Related stories</h2><div class="grid grid-3">${story.related.map(slug => stories.find(s => s.slug === slug)).filter(Boolean).map(s => renderStoryCard(s)).join('')}</div></section>
    <section class="sources"><span class="kicker">Sources</span>${story.sources.map((src, i) => `<div class="source"><span class="source-number">${i + 1}</span><a href="${src.url}" target="_blank" rel="noreferrer">${src.title}</a>${src.note ? `<span class="muted">— ${src.note}</span>` : ''}</div>`).join('')}</section>
  </div></main>`;
}
export function bindStory(story) {
    if (!story) {
        document.querySelector('a[href="/vault"]')?.addEventListener('click', e => { e.preventDefault(); navigate('/vault'); });
        return;
    }
    bindInteraction(story.interaction);
    const save = document.querySelector('[data-story-save]');
    save?.addEventListener('click', () => {
        const saved = toggleSaved(story.slug);
        save.classList.toggle('saved', saved);
        save.textContent = saved ? '★ SAVED' : '☆ SAVE';
        window.dispatchEvent(new CustomEvent('cv:storage-change'));
    });
    document.querySelectorAll('a[href^="/"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); navigate(a.getAttribute('href')); }));
    bindStoryCards();
}
