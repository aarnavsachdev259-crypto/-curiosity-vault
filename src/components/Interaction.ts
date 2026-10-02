import type { StoryInteraction } from '../data/types';

export function renderInteraction(i: StoryInteraction) {
  if (i.type === 'multiple-choice' || i.type === 'true-false') {
    return `<section class="interaction" data-interaction>
      <div class="interaction-head"><div><span class="kicker">Make the call</span><h3>${i.prompt}</h3></div><span class="dim">INTERACTION</span></div>
      <div class="option-grid">${i.options!.map((o, idx)=>`<button class="option" type="button" data-interaction-option="${idx}">${o.label}</button>`).join('')}</div>
      <div class="reveal-box" data-interaction-feedback hidden></div>
    </section>`;
  }
  if (i.type === 'reveal') {
    return `<section class="interaction" data-reveal-interaction>
      <div class="interaction-head"><div><span class="kicker">Open the drawer</span><h3>${i.prompt}</h3></div><span class="dim">REVEAL</span></div>
      <button class="btn btn-ghost" data-reveal-trigger type="button">REVEAL →</button>
      <div class="reveal-box" data-reveal-target hidden>${i.reveal}</div>
    </section>`;
  }
  if (i.type === 'sequence') {
    return `<section class="interaction" data-sequence>
      <div class="interaction-head"><div><span class="kicker">Build the chain</span><h3>${i.prompt}</h3></div><span class="dim">SEQUENCE</span></div>
      <div class="option-grid">${i.steps!.map((s,idx)=>`<button class="option" type="button" draggable="true" data-step="${idx}">${idx+1}. ${s}</button>`).join('')}</div>
      <div class="reveal-box" data-sequence-feedback hidden>Arrange the steps in the numbered order shown. This sequence is the story’s simplified mechanism.</div>
    </section>`;
  }
  const s = i.slider!;
  return `<section class="interaction" data-slider-interaction>
    <div class="interaction-head"><div><span class="kicker">Make a prediction</span><h3>${i.prompt}</h3></div><span class="dim">PREDICT</span></div>
    <input aria-label="Prediction slider" type="range" min="${s.min}" max="${s.max}" value="${s.start}" data-slider />
    <div style="display:flex;justify-content:space-between;color:var(--dim);font-size:11px;margin-top:8px"><span>${s.left}</span><span>${s.right}</span></div>
    <div class="reveal-box" data-slider-feedback>Prediction: <strong data-slider-value>${s.start}</strong></div>
    <button class="btn btn-ghost" type="button" data-slider-reveal>LOCK IN</button>
  </section>`;
}

export function bindInteraction(i: StoryInteraction) {
  if (i.type === 'multiple-choice' || i.type === 'true-false') {
    const feedback = document.querySelector<HTMLDivElement>('[data-interaction-feedback]');
    document.querySelectorAll<HTMLButtonElement>('[data-interaction-option]').forEach(btn => btn.addEventListener('click', () => {
      const idx = Number(btn.dataset.interactionOption);
      document.querySelectorAll('[data-interaction-option]').forEach((b) => b.classList.remove('selected','correct','incorrect'));
      if(i.options![idx].correct) btn.classList.add('correct'); else btn.classList.add('incorrect');
      feedback!.hidden = false;
      feedback!.textContent = i.options![idx].feedback;
    }));
  } else if (i.type === 'reveal') {
    const trigger = document.querySelector<HTMLButtonElement>('[data-reveal-trigger]');
    const target = document.querySelector<HTMLDivElement>('[data-reveal-target]');
    trigger?.addEventListener('click', () => { target!.hidden = false; trigger!.textContent = 'REVEALED'; trigger!.disabled = true; });
  } else if (i.type === 'sequence') {
    const container = document.querySelector('[data-sequence]');
    const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-step]'));
    let order = buttons.map(b => Number(b.dataset.step));
    buttons.forEach(btn => btn.addEventListener('click', () => {
      const idx = order.indexOf(Number(btn.dataset.step)); const next = (idx + 1) % order.length;
      [order[idx], order[next]] = [order[next], order[idx]];
      order.forEach((step, pos) => { const b = container!.querySelector<HTMLButtonElement>(`[data-step="${step}"]`)!; b.textContent = `${pos+1}. ${i.steps![step]}`; });
      const feedback = container!.querySelector<HTMLElement>('[data-sequence-feedback]')!;
      feedback.hidden = false; feedback.textContent = order.every((x,p)=>x===p) ? 'Sequence unlocked. You rebuilt the simplified mechanism.' : 'Order shifted. Keep tracing the mechanism.';
    }));
  } else {
    const input = document.querySelector<HTMLInputElement>('[data-slider]');
    const value = document.querySelector('[data-slider-value]');
    const feedback = document.querySelector<HTMLElement>('[data-slider-feedback]');
    input?.addEventListener('input', () => { value!.textContent = input.value; });
    document.querySelector<HTMLButtonElement>('[data-slider-reveal]')?.addEventListener('click', () => {
      feedback!.innerHTML = sides(input!.value, i.slider!);
      document.querySelector<HTMLButtonElement>('[data-slider-reveal]')!.textContent = 'PREDICTION LOCKED';
    });
  }
}

function sides(value:string, slider:NonNullable<StoryInteraction['slider']>) {
  const n=Number(value); const verdict=n>=slider.revealAt ? 'That is a defensible “repeated exposure matters” prediction.' : 'That is a skeptical prediction; the effect is real but not a fixed-threshold rule.';
  return `${verdict} ${slider.feedback}`;
}
