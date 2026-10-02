import { quizzes } from '../data/quizzes.js';
import { getProgress } from '../lib/storage.js';
import { navigate } from '../lib/router.js';
import { visualSvg } from '../components/Visual.js';

export function renderQuizzes() {
  const { quizzes: completed } = getProgress();
  return `<main class="page"><div class="container page-header"><span class="kicker">Ten ways to get curious</span><h1 class="display">QUIZZES</h1><p>Compact interactive tests. Get the answer, then get the explanation—the weird part is usually after the click.</p></div><section class="section-tight"><div class="container grid grid-3">${quizzes.map(q=>`<article class="story-card"><div class="story-visual art-${q.category==='Internet'?'internet':q.category==='Psychology'?'psych':'science'}">${visualSvg(q.category==='Internet'?'internet':q.category==='Psychology'?'psych':'science','QUIZ · '+q.category.toUpperCase())}</div><div class="card-body"><div class="card-meta"><span>${q.category}</span><span>${q.questions.length} questions</span></div><h3 class="card-title">${q.title}</h3><p class="card-hook">${q.subtitle}</p><div class="card-footer"><a class="text-link" href="/quiz/${q.id}">${completed.has(q.id)?'RETAKE QUIZ':'START QUIZ'} →</a></div></div></article>`).join('')}</div></div></section></main>`;
}

export function bindQuizzes() { document.querySelectorAll<HTMLAnchorElement>('a[href^="/quiz/"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.getAttribute('href')!);})); document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.getAttribute('href')!);})); }
