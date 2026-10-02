import { stories } from '../data/stories';
import { getProgress } from '../lib/storage';
import { navigate } from '../lib/router';
import { renderStoryCard, bindStoryCards } from '../components/StoryCard';
import { visualSvg } from '../components/Visual';
export function renderHome() {
    const feature = stories[12];
    const trending = [stories[0], stories[1], stories[10], stories[16], stories[29], stories[20]];
    const { explored, quizzes, rabbit } = getProgress();
    return `<main class="page">
    <section class="hero"><div class="container hero-grid">
      <div class="hero-copy"><span class="kicker">A premium curiosity experience</span><h1 class="display">THE<br/>CURIOSITY<br/>VAULT</h1><p>Things you’ll probably end up telling someone.</p><p>Stories, mysteries, psychology and strange discoveries — built to be explored, not just read.</p><div class="actions"><a class="btn btn-primary" href="/vault">ENTER THE VAULT →</a><button class="btn btn-ghost" type="button" data-random>RANDOM DROP</button></div></div>
      <div class="hero-art">${visualSvg('mystery', '30 DISCOVERIES · 10 QUIZZES · INFINITE RABBIT HOLES')}<div class="vault-orbit"></div><div class="vault-core"></div><div class="art-label">OPEN A TAB. FOLLOW THE THREAD.</div></div>
    </div></section>

    <section class="section"><div class="container">
      <div class="section-head"><div><span class="kicker">Today’s drop</span><h2 class="display">One story to derail your next five minutes.</h2></div><a href="/vault">SEE ALL →</a></div>
      <div class="featured"><div class="featured-copy"><span class="kicker">${feature.category} · ${feature.minutes} min</span><h3 class="display">${feature.title}</h3><p>${feature.description}</p><div class="actions"><a class="btn btn-primary" href="/story/${feature.slug}">OPEN STORY →</a></div></div><a href="/story/${feature.slug}" class="featured-art art-${feature.visual}">${visualSvg(feature.visual, 'SIGNAL DETECTED')}</a></div>
    </div></section>

    <section class="section-tight"><div class="container">
      <div class="section-head"><div><span class="kicker">Explore the Vault</span><h2 class="display">Pick a doorway.</h2></div><a href="/vault">BROWSE ALL 30 →</a></div>
      <div class="chips">${['Psychology', 'Human Behaviour', 'Mysteries', 'Internet', 'History', 'Science', 'Strange', 'Coincidences'].map(c => `<a class="chip" href="/vault?category=${encodeURIComponent(c)}">${c}</a>`).join('')}</div>
    </div></section>

    <section class="section"><div class="container"><div class="section-head"><div><span class="kicker">Trending inside the Vault</span><h2 class="display">The ones people keep opening.</h2></div></div><div class="grid grid-3">${trending.map(s => renderStoryCard(s)).join('')}</div></div></section>

    <section class="section"><div class="container"><div class="quiz-preview"><div class="quiz-preview-art">${visualSvg('psych', 'CAN YOU FIGURE THIS OUT?')}</div><div class="quiz-preview-copy"><span class="kicker">Can you figure this out?</span><h3 class="display">Fact, theory, or folklore?</h3><p class="muted">Ten compact quizzes test attention, memory, mysteries, internet lore and the strange details underneath famous stories.</p><a class="btn btn-primary" href="/quizzes">TAKE A QUIZ →</a></div></div></div></section>

    <section class="section-tight"><div class="container"><div class="section-head"><div><span class="kicker">Open a Rabbit Hole</span><h2 class="display">One discovery should lead to another.</h2></div></div><div class="callout"><strong>DISCOVERY → UNEXPECTED CONNECTION → DEEPER DISCOVERY → ANOTHER DISCOVERY</strong><span class="muted">Every chain is defined by the story data, so the next click is a real connection—not a fake button.</span></div></div></section>

    <section class="section"><div class="container"><div class="section-head"><div><span class="kicker">What’s inside</span><h2 class="display">Built for repeat visits.</h2></div></div><div class="stats"><div class="stat"><div class="stat-num">30</div><div class="stat-label">Premium discoveries</div></div><div class="stat"><div class="stat-num">10</div><div class="stat-label">Interactive quizzes</div></div><div class="stat"><div class="stat-num">∞</div><div class="stat-label">Rabbit holes</div></div><div class="stat"><div class="stat-num">${explored.size}</div><div class="stat-label">Stories explored · ${quizzes.size} quizzes · ${rabbit.size} chains</div></div></div></div></section>
  </main>`;
}
export function bindHome() {
    document.querySelector('[data-random]')?.addEventListener('click', () => { const story = stories[Math.floor(Math.random() * stories.length)]; navigate(`/story/${story.slug}`); });
    document.querySelectorAll('a[href^="/"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); navigate(a.getAttribute('href')); }));
    bindStoryCards();
}
