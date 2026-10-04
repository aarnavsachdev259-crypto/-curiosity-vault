export function visualSvg(
  kind: string,
  label = 'ARCHIVE VISUAL',
  slug = ''
) {
  const key = slug.toLowerCase();

  if (key === 'the-bloop') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <path d="M28 182 Q165 164 300 184 T570 178 T772 185 V520 H28Z" style="fill:#101d27;stroke:none"/>
      <path d="M28 268 Q160 245 300 270 T570 263 T772 272 V520 H28Z" style="fill:#0b1721;stroke:none"/>
      <path d="M28 365 Q170 344 310 367 T580 360 T772 370 V520 H28Z" style="fill:#08111a;stroke:none"/>
      <path d="M55 180 Q155 164 255 180 T455 180 T655 180 T745 180" style="fill:none;stroke:rgba(138,177,192,.34);stroke-width:1.5"/>
      <path d="M55 268 Q155 252 255 268 T455 268 T655 268 T745 268" style="fill:none;stroke:rgba(138,177,192,.24);stroke-width:1.5"/>
      <path d="M55 365 Q155 349 255 365 T455 365 T655 365 T745 365" style="fill:none;stroke:rgba(138,177,192,.18);stroke-width:1.5"/>
      <circle cx="390" cy="310" r="72" style="fill:none;stroke:rgba(200,169,107,.38);stroke-width:1.5"/>
      <circle cx="390" cy="310" r="126" style="fill:none;stroke:rgba(200,169,107,.25);stroke-width:1.5"/>
      <circle cx="390" cy="310" r="184" style="fill:none;stroke:rgba(200,169,107,.14);stroke-width:1.5"/>
      <path d="M72 310 H200 M580 310 H728" style="fill:none;stroke:rgba(200,169,107,.32);stroke-width:1"/>
      <path d="M86 402 H176 V270 H195 V402 H219 M176 278 L164 292 M176 278 L188 292" style="fill:none;stroke:rgba(200,169,107,.7);stroke-width:2"/>
      <path d="M220 402 V385 L234 385 V370 L247 370 V395 L263 395 V355 L278 355 V400 L294 400 V374 L309 374 V393 L324 393 V366 L338 366 V400 L354 400 V381 L370 381 V402 H728" style="fill:none;stroke:#c8a96b;stroke-width:2.5"/>
      <circle cx="390" cy="310" r="5" style="fill:#c8a96b;stroke:none"/>
      <text class="art-label" x="92" y="465">SOUTH PACIFIC · ACOUSTIC EVENT · 1997</text>
      <text class="art-label" x="92" y="145">HYDROPHONE ARRAY / DEEP OCEAN</text>
    </svg>`;
  }

  if (key === 'the-year-without-a-summer') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <circle cx="585" cy="160" r="62" style="fill:#5d5b50;fill-opacity:.34;stroke:#c8a96b;stroke-opacity:.35;stroke-width:1.5"/>
      <circle cx="585" cy="160" r="82" style="fill:none;stroke:rgba(200,169,107,.13);stroke-width:1"/>
      <path d="M330 308 L382 235 L407 263 L445 170 L474 225 L516 192 L568 308Z" style="fill:#17191a;stroke:rgba(244,242,236,.34);stroke-width:2"/>
      <path d="M410 258 L445 170 L474 225 L455 216 L443 236 L432 221Z" style="fill:#9a5340;stroke:rgba(200,169,107,.44);stroke-width:1.5"/>
      <path d="M420 186 C399 159 433 142 416 119 C445 131 459 109 450 86 C484 108 477 130 499 137 C529 146 536 169 518 192 C496 210 462 203 420 186Z" style="fill:#404344;fill-opacity:.84;stroke:rgba(172,179,176,.32);stroke-width:1.5"/>
      <path d="M386 161 C367 145 381 127 372 111 M495 135 C516 116 507 98 520 82 M466 147 C475 127 465 115 473 101" style="fill:none;stroke:rgba(190,195,188,.22);stroke-width:1.2"/>
      <path d="M55 308 Q160 289 270 308 T485 308 T745 308 V426 H55Z" style="fill:#111a1e;stroke:none"/>
      <path d="M55 340 Q160 321 270 340 T485 340 T745 340" style="fill:none;stroke:rgba(151,173,176,.24);stroke-width:1.5"/>
      <path d="M55 390 L155 374 L223 391 L301 376 L378 392 L464 375 L552 392 L636 374 L745 389" style="fill:none;stroke:rgba(151,173,176,.36);stroke-width:1.5"/>
      <path d="M112 410 L132 382 L148 410 M129 410 L154 386 L171 410 M638 408 L657 380 L673 408 M659 408 L682 385 L698 408" style="fill:none;stroke:rgba(151,173,176,.56);stroke-width:2"/>
      <path d="M270 325 L282 310 L294 325 M580 330 L592 315 L604 330" style="fill:none;stroke:rgba(151,173,176,.5);stroke-width:1.5"/>
      <text class="art-label" x="92" y="465">1816 / ASH, COLD, AND A DIMMED SUN</text>
      <text class="art-label" x="92" y="145">TAMBORA ERUPTION · CLIMATE SHOCK</text>
    </svg>`;
  }

  // Specific visuals for the stories where the concept is obvious.
  if (key.includes('stroop')) {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <text class="word" x="105" y="145">RED</text>
      <text class="word warm-text" x="390" y="145">BLUE</text>
      <text class="word" x="205" y="245">GREEN</text>
      <text class="word warm-text" x="505" y="245">YELLOW</text>
      <text class="word small" x="105" y="350">BLUE</text>
      <text class="word" x="430" y="350">RED</text>
      <path class="accent-line" d="M90 410 C210 350 290 470 410 405 S620 355 710 425"/>
      <text class="art-label" x="92" y="455">WORD ≠ COLOR</text>
    </svg>`;
  }

  if (key.includes('invisible-gorilla')) {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <g class="crowd">
        <circle cx="125" cy="155" r="26"/><circle cx="210" cy="205" r="26"/>
        <circle cx="300" cy="145" r="26"/><circle cx="395" cy="210" r="26"/>
        <circle cx="485" cy="150" r="26"/><circle cx="580" cy="215" r="26"/>
        <circle cx="675" cy="155" r="26"/>
        <circle cx="165" cy="330" r="26"/><circle cx="265" cy="370" r="26"/>
        <circle cx="365" cy="315" r="26"/><circle cx="470" cy="370" r="26"/>
        <circle cx="575" cy="320" r="26"/><circle cx="665" cy="375" r="26"/>
      </g>
      <g class="hidden-figure">
        <circle cx="405" cy="120" r="25"/>
        <path d="M380 145 L365 275 L390 350 M430 145 L450 275 L425 350"/>
        <path d="M365 195 L320 245 M445 195 L490 245"/>
      </g>
      <circle class="focus-ring" cx="405" cy="120" r="52"/>
      <text class="art-label" x="92" y="465">DID YOU NOTICE?</text>
    </svg>`;
  }

  if (key.includes('mary-celeste')) {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <path class="ocean" d="M55 350 Q150 315 245 350 T435 350 T625 350 T745 350"/>
      <path class="ocean faint" d="M55 390 Q150 355 245 390 T435 390 T625 390 T745 390"/>
      <path class="ship" d="M225 300 L600 300 L530 370 L285 370 Z"/>
      <path class="ship" d="M330 300 L330 125 M475 300 L475 150"/>
      <path class="sail" d="M335 135 L455 210 L335 245 Z"/>
      <path class="sail" d="M480 160 L560 225 L480 250 Z"/>
      <circle class="moon" cx="630" cy="115" r="42"/>
      <text class="art-label" x="92" y="465">A SHIP WITHOUT ITS CREW</text>
    </svg>`;
  }

  // Psychology / perception
  if (kind === 'psychology' || kind === 'human-behaviour') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <path class="brain-line" d="M300 350 C220 310 230 180 315 150 C355 85 465 105 490 165 C575 170 610 285 535 335 C500 400 390 410 300 350Z"/>
      <path class="brain-detail" d="M335 175 C390 220 330 245 390 275 S370 345 430 365"/>
      <path class="brain-detail" d="M440 150 C400 205 480 210 440 260 S510 315 470 365"/>
      <circle class="warm" cx="580" cy="175" r="12"/>
      <circle class="warm" cx="625" cy="225" r="7"/>
      <circle class="warm" cx="570" cy="275" r="9"/>
      <text class="art-label" x="92" y="465">THE MIND AT WORK</text>
    </svg>`;
  }

  // Science / experiments
  if (kind === 'science') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <path class="lab" d="M350 105 L350 250 L265 390 Q255 415 290 415 L510 415 Q545 415 535 390 L450 250 L450 105"/>
      <path class="warm-fill" d="M290 335 Q400 305 510 335 L535 395 Q520 415 490 415 L310 415 Q275 415 265 395Z"/>
      <circle class="bubble" cx="335" cy="355" r="9"/>
      <circle class="bubble" cx="390" cy="330" r="6"/>
      <circle class="bubble" cx="445" cy="365" r="11"/>
      <path class="atom" d="M150 155 C210 95 280 160 230 220 C180 275 115 210 150 155Z"/>
      <ellipse class="atom" cx="195" cy="185" rx="85" ry="28"/>
      <circle class="dot" cx="195" cy="185" r="8"/>
      <text class="art-label" x="92" y="465">OBSERVE · TEST · DISCOVER</text>
    </svg>`;
  }

  // Internet / digital culture
  if (kind === 'internet' || kind === 'digital') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <rect class="browser" x="105" y="95" width="590" height="330" rx="18"/>
      <circle class="browser-dot" cx="135" cy="125" r="6"/>
      <circle class="browser-dot" cx="158" cy="125" r="6"/>
      <circle class="browser-dot" cx="181" cy="125" r="6"/>
      <rect class="address" x="220" y="112" width="300" height="26" rx="13"/>
      <path class="network" d="M190 220 L330 285 L470 205 L610 285 L520 360 L330 285"/>
      <circle class="node" cx="190" cy="220" r="13"/>
      <circle class="node" cx="330" cy="285" r="13"/>
      <circle class="node" cx="470" cy="205" r="13"/>
      <circle class="node" cx="610" cy="285" r="13"/>
      <circle class="node" cx="520" cy="360" r="13"/>
      <text class="code" x="150" y="395">01001001 00110010</text>
      <text class="art-label" x="92" y="465">THE DIGITAL RABBIT HOLE</text>
    </svg>`;
  }

  // History / documents
  if (kind === 'history') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <rect class="document" x="220" y="75" width="360" height="350" rx="8"/>
      <path class="document-line" d="M265 145 H530 M265 185 H505 M265 225 H535 M265 265 H470"/>
      <path class="map" d="M105 335 C170 270 195 350 245 300 M565 170 C620 115 680 180 705 125"/>
      <circle class="stamp" cx="515" cy="340" r="48"/>
      <text class="stamp-text" x="483" y="346">ARCHIVE</text>
      <text class="art-label" x="92" y="465">TRACES FROM ANOTHER TIME</text>
    </svg>`;
  }

  // Mysteries
  if (kind === 'mystery' || kind === 'mysteries') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <path class="evidence-line" d="M145 120 L330 235 L530 135 L665 300 L420 385 L245 330 Z"/>
      <circle class="evidence" cx="145" cy="120" r="15"/>
      <circle class="evidence" cx="330" cy="235" r="15"/>
      <circle class="evidence" cx="530" cy="135" r="15"/>
      <circle class="evidence" cx="665" cy="300" r="15"/>
      <circle class="evidence" cx="420" cy="385" r="15"/>
      <rect class="case-file" x="275" y="165" width="250" height="140" rx="5"/>
      <text class="case-text" x="315" y="215">CASE</text>
      <text class="case-text" x="315" y="255">UNKNOWN</text>
      <text class="art-label" x="92" y="465">THE EVIDENCE DOESN'T FIT</text>
    </svg>`;
  }

  // Coincidences / patterns
  if (kind === 'coincidence') {
    return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
      <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
      <circle class="orbit" cx="400" cy="260" r="155"/>
      <circle class="orbit" cx="400" cy="260" r="95"/>
      <circle class="dot" cx="245" cy="260" r="8"/>
      <circle class="dot" cx="400" cy="105" r="8"/>
      <circle class="dot" cx="555" cy="260" r="8"/>
      <circle class="dot" cx="400" cy="415" r="8"/>
      <path class="pattern" d="M245 260 L400 105 L555 260 L400 415 Z"/>
      <text class="art-label" x="92" y="465">WHEN RANDOMNESS LOOKS LIKE DESIGN</text>
    </svg>`;
  }

  // Fallback: deliberately varied geometric composition.
  const seed = [...key].reduce((n, c) => n + c.charCodeAt(0), 0);
  const variant = slug === 'the-bloop' ? 17 : slug === 'the-year-without-a-summer' ? 18 : seed % 30;

  const visuals = [
    `<rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
     <path class="warm-fill" d="M110 390 L240 120 L380 390 Z"/>
     <circle class="focus-ring" cx="540" cy="245" r="105"/>
     <circle class="dot" cx="540" cy="245" r="12"/>`,
    `<rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
     <path class="network" d="M130 150 L300 330 L470 135 L660 350"/>
     <circle class="node" cx="130" cy="150" r="16"/>
     <circle class="node" cx="300" cy="330" r="16"/>
     <circle class="node" cx="470" cy="135" r="16"/>
     <circle class="node" cx="660" cy="350" r="16"/>`,
    `<rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
     <rect class="document" x="175" y="105" width="450" height="290" rx="12"/>
     <path class="document-line" d="M225 175 H565 M225 225 H510 M225 275 H550 M225 325 H460"/>
     <circle class="stamp" cx="545" cy="315" r="40"/>`,
    `<rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
     <path class="orbit" d="M145 350 C240 90 560 90 655 350"/>
     <path class="orbit" d="M190 350 C280 145 520 145 610 350"/>
     <circle class="warm" cx="400" cy="150" r="22"/>
     <circle class="dot" cx="245" cy="275" r="8"/>
     <circle class="dot" cx="555" cy="275" r="8"/>`
  ];

  return `<svg class="visual-svg" viewBox="0 0 800 520" role="img" aria-label="${label}">
    ${visuals[variant]}
    <text class="art-label" x="92" y="465">${label}</text>
  </svg>`;
}