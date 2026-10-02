export function visualSvg(kind, label = 'ARCHIVE VISUAL') {
    const shapes = {
        psych: `<circle class="ghost" cx="50%" cy="50%" r="31%"/><circle class="warm" cx="50%" cy="50%" r="17%"/><path class="ghost" d="M12% 72% Q50% 10% 88% 72%"/><circle class="dot" cx="50%" cy="18%" r="4"/>`,
        science: `<path class="ghost" d="M10% 70% C28% 25%,72% 25%,90% 70%"/><path class="warm" d="M18% 77% Q50% 20% 82% 77%"/><circle class="dot" cx="74%" cy="31%" r="4"/><circle class="ghost" cx="33%" cy="52%" r="9%"/>`,
        mystery: `<rect class="ghost" x="18%" y="18%" width="64%" height="64%" rx="18"/><path class="warm" d="M28% 68% L50% 30% L72% 68% Z"/><circle class="dot" cx="50%" cy="56%" r="4"/>`,
        internet: `<rect class="ghost" x="22%" y="18%" width="56%" height="60%" rx="12"/><path class="warm" d="M30% 34% H70% M30% 48% H60% M30% 62% H52%"/><circle class="dot" cx="71%" cy="62%" r="4"/>`,
        history: `<path class="ghost" d="M22% 76% L50% 22% L78% 76%"/><path class="warm" d="M30% 70% H70% M36% 58% H64% M42% 46% H58%"/><circle class="dot" cx="50%" cy="22%" r="4"/>`,
        coincidence: `<circle class="ghost" cx="42%" cy="50%" r="24%"/><circle class="warm" cx="58%" cy="50%" r="24%"/><path class="ghost" d="M42% 30% L58% 70% M58% 30% L42% 70%"/><circle class="dot" cx="50%" cy="50%" r="4"/>`
    };
    const content = shapes[kind] ?? shapes.mystery;
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">${content}<text x="6%" y="90%">${label}</text></svg>`;
}
