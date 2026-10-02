import { quizzes } from '../data/quizzes';
import { markQuizCompleted } from '../lib/storage';
import { navigate } from '../lib/router';

export function renderQuiz(id: string) {
  const quiz = quizzes.find(q=>q.id===id);
  if (!quiz) return `<main class="page"><div class="container empty section"><h2>Quiz not found.</h2><a class="btn btn-primary" href="/quizzes">BACK TO QUIZZES</a></div></main>`;
  return `<main class="quiz-page"><div class="container quiz-header"><span class="kicker">${quiz.category}</span><h1 class="display">${quiz.title}</h1><p class="muted">${quiz.subtitle}</p></div><div class="container"><div class="quiz-progress"><span style="width:0%" data-quiz-progress></span></div><section class="quiz-card" data-quiz-root></section></div></main>`;
}

export function bindQuiz(id: string) {
  const quiz = quizzes.find(q=>q.id===id); if(!quiz) { bindFallback(); return; }
  const root = document.querySelector<HTMLElement>('[data-quiz-root]')!;
  const bar = document.querySelector<HTMLElement>('[data-quiz-progress]')!;
  let current=0; let score=0;
  const renderQuestion=()=>{
    const q=quiz.questions[current]; bar.style.width=`${(current/quiz.questions.length)*100}%`;
    root.innerHTML=`<div class="interaction-head"><div><span class="kicker">Question ${current+1} of ${quiz.questions.length}</span><h3 style="margin-top:6px">${quiz.category}</h3></div><span class="dim">NO CHEATING, PROBABLY</span></div><h2>${q.prompt}</h2><div class="option-grid">${q.options.map((o,i)=>`<button class="option" data-q-option="${i}" type="button">${o}</button>`).join('')}</div><div class="reveal-box" data-q-feedback hidden></div>`;
    root.querySelectorAll<HTMLButtonElement>('[data-q-option]').forEach(b=>b.addEventListener('click',()=>{
      const choice=Number(b.dataset.qOption); const correct=choice===q.answer; if(correct)score++;
      root.querySelectorAll('[data-q-option]').forEach((x,i)=>{const el=x as HTMLElement; if(i===q.answer) el.className = 'option correct'; else if(i===choice) el.className = 'option incorrect'; (x as HTMLButtonElement).disabled=true;});
      const f=root.querySelector<HTMLElement>('[data-q-feedback]')!; f.hidden=false; f.innerHTML=`<strong>${correct?'Correct.':'Not quite.'}</strong> ${q.explanation}<div style="margin-top:16px"><button class="btn btn-primary" type="button" data-q-next>${current===quiz.questions.length-1?'SEE RESULT':'NEXT →'}</button></div>`;
      f.querySelector('[data-q-next]')?.addEventListener('click',()=>{current++; if(current<quiz.questions.length) renderQuestion(); else renderResult();});
    }));
  };
  const renderResult=()=>{
    bar.style.width='100%'; markQuizCompleted(id);
    const bucket=Math.min(quiz.result.length-1, Math.floor((score / quiz.questions.length) * quiz.result.length)); const result=quiz.result[bucket];
    root.innerHTML=`<div class="result"><div class="result-mark">CV</div><span class="kicker">You finished</span><h2 class="display">${result.name}</h2><p class="muted" style="max-width:560px;margin:0 auto 24px">${result.description}</p><p><strong>${score}/${quiz.questions.length}</strong> correct.</p><div class="actions" style="justify-content:center"><a class="btn btn-primary" href="/quizzes">BACK TO QUIZZES</a><a class="btn btn-ghost" href="/vault">OPEN THE VAULT</a></div></div>`;
    root.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.getAttribute('href')!);}));
  };
  renderQuestion();
}

function bindFallback(){document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();navigate(a.getAttribute('href')!);}));}
