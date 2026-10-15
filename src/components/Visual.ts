const artwork: Record<string, string> = {
  'the-stroop-trap': `
    <text class="word" x="115" y="165">RED</text><text class="word warm-text" x="415" y="165">BLUE</text>
    <text class="word small" x="145" y="270">GREEN</text><text class="word warm-text" x="470" y="270">YELLOW</text>
    <text class="word warm-text" x="140" y="375">BLUE</text><text class="word small" x="485" y="375">RED</text>
    <path class="line" d="M75 410 C210 350 285 470 405 405 S620 355 725 425"/>`,
  'the-invisible-gorilla': `
    <path class="soft" d="M105 165 H695 M105 330 H695"/>
    <g class="crowd"><circle cx="145" cy="160" r="25"/><circle cx="245" cy="195" r="25"/><circle cx="345" cy="150" r="25"/><circle cx="555" cy="190" r="25"/><circle cx="655" cy="155" r="25"/><circle cx="190" cy="330" r="25"/><circle cx="300" cy="365" r="25"/><circle cx="510" cy="345" r="25"/><circle cx="625" cy="365" r="25"/></g>
    <g class="gold"><circle cx="405" cy="145" r="28"/><path d="M380 175 L365 290 L390 365 M430 175 L450 290 L425 365 M370 220 L325 270 M440 220 L490 270"/></g>
    <circle class="focus-ring" cx="405" cy="145" r="54"/>`,
  'the-choice-you-did-not-choose': `
    <rect class="frame" x="130" y="115" width="210" height="265" rx="10"/><rect class="frame accent" x="460" y="115" width="210" height="265" rx="10"/>
    <circle class="gold-fill" cx="235" cy="210" r="48"/><path class="soft" d="M165 345 C175 275 295 275 305 345"/>
    <circle class="fill-pale" cx="565" cy="210" r="48"/><path class="soft" d="M495 345 C505 275 625 275 635 345"/>
    <path class="line" d="M350 205 C390 165 415 165 450 205 M450 285 C410 325 390 325 350 285"/><path class="gold" d="M435 190 L452 205 L432 215 M365 275 L348 285 L368 298"/>`,
  'lost-in-a-memory': `
    <rect class="frame" x="180" y="90" width="440" height="320" rx="12"/><path class="soft" d="M215 340 L320 235 L390 300 L465 190 L585 340Z"/>
    <circle class="gold" cx="500" cy="165" r="34"/><path class="line" d="M230 125 H345 M455 125 H570 M230 375 H345 M455 375 H570"/>
    <circle class="ghost" cx="320" cy="235" r="19"/><circle class="ghost" cx="465" cy="190" r="26"/>`,
  'the-mere-exposure-pull': `
    <g class="soft"><circle cx="165" cy="180" r="48"/><circle cx="325" cy="180" r="48"/><circle cx="485" cy="180" r="48"/><circle cx="645" cy="180" r="48"/></g>
    <g class="gold-fill"><circle cx="165" cy="180" r="24"/><circle cx="325" cy="180" r="24"/><circle cx="485" cy="180" r="24"/><circle cx="645" cy="180" r="24"/></g>
    <path class="line" d="M125 300 C210 235 300 365 390 300 S570 235 675 300"/>
    <path class="soft" d="M165 340 V390 M325 340 V390 M485 340 V390 M645 340 V390"/>`,
  'the-zeigarnik-loop': `
    <path class="soft" d="M400 105 A150 150 0 1 1 260 200"/><path class="line" d="M260 200 A150 150 0 0 1 520 145"/>
    <path class="gold" d="M505 130 L525 143 L503 154"/><rect class="frame" x="315" y="205" width="170" height="120" rx="8"/>
    <path class="soft" d="M345 240 H445 M345 267 H455 M345 294 H410"/><path class="gold" d="M428 294 H455"/>`,
  'dunning-kruger-is-more-complicated': `
    <path class="soft" d="M125 380 V125 M125 380 H690"/>
    <path class="line" d="M140 360 C190 345 220 110 290 120 C340 125 325 300 410 320 C495 345 560 280 690 235"/>
    <circle class="gold-fill" cx="290" cy="120" r="12"/><circle class="fill-pale" cx="410" cy="320" r="10"/>
    <path class="soft" d="M290 120 V380 M410 320 V380"/><text class="code" x="145" y="420">SKILL → CALIBRATION</text>`,
  'the-placebo-before-the-pill': `
    <rect class="frame" x="160" y="145" width="205" height="125" rx="62" transform="rotate(-24 262 207)"/>
    <path class="gold-fill" d="M190 165 L365 242 A62 62 0 0 1 310 295 L170 235 A62 62 0 0 1 190 165Z" transform="rotate(-24 262 207)"/>
    <path class="soft" d="M390 140 C475 95 555 115 600 170 M415 205 C505 170 580 195 635 250 M390 280 C485 250 540 275 585 325"/>
    <circle class="gold" cx="620" cy="125" r="12"/><circle class="ghost" cx="665" cy="305" r="20"/>`,
  'the-doorway-that-erases-a-thought': `
    <path class="frame" d="M245 405 V115 Q245 85 275 85 H525 Q555 85 555 115 V405"/>
    <path class="gold" d="M340 405 V155 Q340 135 360 135 H500 V405"/><circle class="gold-fill" cx="480" cy="275" r="8"/>
    <circle class="ghost" cx="170" cy="190" r="32"/><circle class="ghost" cx="110" cy="280" r="17"/><path class="soft" d="M190 190 L235 190 M135 280 L220 280"/>
    <path class="line" d="M585 225 H690 M670 205 L692 225 L670 245"/>`,
  'the-phantom-phone-buzz': `
    <rect class="frame" x="315" y="85" width="170" height="330" rx="24"/><rect class="gold-fill" x="335" y="125" width="130" height="220" rx="8"/>
    <circle class="ghost" cx="400" cy="380" r="10"/><path class="soft" d="M245 175 Q190 250 245 325 M205 140 Q115 250 205 360"/>
    <path class="line" d="M555 175 Q610 250 555 325 M595 140 Q685 250 595 360"/>
    <circle class="gold-fill" cx="400" cy="235" r="30"/><path class="soft" d="M400 220 V240 L415 250"/>`,
  'the-mary-celeste': `
    <circle class="gold-fill" cx="635" cy="120" r="38"/><path class="soft" d="M70 330 Q155 300 240 330 T410 330 T580 330 T740 330 M70 385 Q155 355 240 385 T410 385 T580 385 T740 385"/>
    <path class="frame" d="M210 295 H610 L545 365 H270Z"/><path class="gold" d="M330 295 V120 L455 215 L330 245Z M475 295 V150 L565 225 L475 248Z"/>
    <path class="soft" d="M330 120 V295 M475 150 V295"/>`,
  'dyatlov-pass-and-the-slab-avalanche': `
    <path class="soft" d="M80 370 L235 205 L305 280 L440 115 L720 370Z"/><path class="line" d="M440 115 L520 250 L585 220 L720 370"/>
    <path class="gold" d="M300 370 L365 270 L430 370Z"/><path class="gold" d="M365 270 V370 M300 370 L365 320 L430 370"/>
    <path class="ghost" d="M135 395 H660 M160 420 H630"/><circle class="gold-fill" cx="570" cy="150" r="26"/>`,
  'the-wow-signal': `
    <path class="soft" d="M85 140 H715 M85 205 H715 M85 270 H715 M85 335 H715 M85 400 H715"/>
    <path class="line" d="M90 270 H215 L235 255 L250 285 L270 230 L290 305 L310 190 L335 350 L365 120 L395 385 L425 175 L450 330 L475 220 L500 285 L525 270 H710"/>
    <text class="code" x="240" y="105">6EQUJ5</text><path class="gold" d="M365 115 V395"/>`,
  'the-voynich-manuscript': `
    <path class="frame" d="M170 100 Q285 75 400 115 V400 Q285 360 170 390Z M400 115 Q515 75 630 100 V390 Q515 360 400 400Z"/>
    <path class="gold" d="M400 115 V400"/><path class="soft" d="M205 155 Q260 130 350 160 M205 185 Q270 165 350 193 M450 155 Q525 130 595 157 M450 188 Q530 165 595 190"/>
    <path class="line" d="M285 340 C230 290 280 245 305 280 C330 245 365 280 330 320 C370 320 355 365 320 365 M520 330 C480 290 520 255 545 285 C570 250 600 285 570 325"/>`,
  'the-bermuda-triangle': `
    <path class="soft" d="M95 125 Q220 105 340 140 T580 125 T710 150 M80 355 Q210 335 330 365 T585 350 T720 375"/>
    <path class="line" d="M205 345 L390 125 L615 345 Z"/><circle class="gold-fill" cx="205" cy="345" r="11"/><circle class="gold-fill" cx="390" cy="125" r="11"/><circle class="gold-fill" cx="615" cy="345" r="11"/>
    <path class="soft" d="M205 345 Q300 250 390 125 M390 125 Q500 245 615 345"/><circle class="ghost" cx="390" cy="275" r="48"/>`,
  'the-max-headroom-hijacking': `
    <rect class="frame" x="135" y="95" width="530" height="320" rx="12"/><rect class="ghost" x="165" y="125" width="470" height="255" rx="4"/>
    <path class="soft" d="M170 155 H630 M170 175 H630 M170 195 H630 M170 215 H630 M170 235 H630 M170 255 H630 M170 275 H630 M170 295 H630 M170 315 H630 M170 335 H630"/>
    <path class="line" d="M165 275 L265 255 L235 300 L360 245 L340 315 L460 245 L445 305 L565 260 L540 305 L635 275"/>
    <rect class="gold-fill" x="325" y="135" width="145" height="54" rx="6"/><text class="code" x="345" y="172">SIGNAL LOST</text>`,
  'cicada-3301': `
    <circle class="ghost" cx="400" cy="250" r="165"/><circle class="gold" cx="400" cy="250" r="120"/><circle class="soft" cx="400" cy="250" r="72"/>
    <path class="line" d="M400 85 V415 M235 250 H565 M283 133 L517 367 M517 133 L283 367"/>
    <path class="gold-fill" d="M400 175 C355 195 350 280 400 325 C450 280 445 195 400 175Z M357 215 L315 198 L340 255 M443 215 L485 198 L460 255"/>
    <text class="code" x="320" y="455">3301 · FOLLOW THE CLUES</text>`,
  'the-dancing-plague-of-1518': `
    <circle class="gold-fill" cx="400" cy="120" r="28"/><path class="line" d="M400 150 L370 260 L440 300 M380 205 L315 175 M385 255 L325 360 M385 255 L475 390"/>
    <circle class="fill-pale" cx="235" cy="205" r="23"/><path class="soft" d="M235 230 L210 315 L265 350 M220 270 L165 245 M215 310 L180 390 M220 310 L280 390"/>
    <circle class="ghost" cx="580" cy="190" r="24"/><path class="soft" d="M580 214 L610 300 L555 355 M595 255 L655 230 M605 295 L655 380 M605 295 L525 395"/>
    <path class="gold" d="M115 130 Q155 175 115 220 M685 130 Q645 175 685 220"/>`,
  'the-great-molasses-flood': `
    <path class="frame" d="M250 105 H550 V300 Q400 345 250 300Z"/><path class="gold-fill" d="M255 235 Q320 215 390 240 T545 235 V300 Q400 345 255 300Z"/>
    <path class="line" d="M545 270 C595 250 605 325 660 305 S710 355 740 345 M545 310 C590 300 600 365 650 350"/>
    <path class="soft" d="M280 145 H520 M280 175 H520 M280 205 H520"/><path class="gold" d="M550 240 L585 220 L580 265"/>`,
  'the-great-beer-flood': `
    <path class="frame" d="M255 100 H545 V255 Q400 300 255 255Z"/><path class="gold-fill" d="M260 200 Q330 180 400 205 T540 200 V255 Q400 300 260 255Z"/>
    <path class="line" d="M260 255 C220 300 195 325 145 335 M540 255 C590 300 625 320 675 325"/>
    <path class="soft" d="M285 125 H515 M285 155 H515 M285 185 H515"/><circle class="gold" cx="340" cy="335" r="17"/><circle class="gold" cx="390" cy="365" r="13"/><circle class="gold" cx="440" cy="330" r="20"/>`,
  'the-year-without-a-summer': `
    <circle class="gold-fill" cx="610" cy="130" r="55"/><path class="soft" d="M110 340 L215 220 L270 285 L400 140 L465 235 L525 190 L650 340Z"/>
    <path class="line" d="M365 205 L400 140 L430 195 L407 184 L392 205Z"/><path class="fill-pale" d="M383 183 C355 155 385 135 370 110 C405 128 420 100 411 76 C448 104 430 125 457 138 C480 153 455 182 425 193Z"/>
    <path class="soft" d="M95 365 Q210 345 325 365 T555 365 T725 365 M145 395 H655"/>`,
  'the-tunguska-event': `
    <circle class="gold-fill" cx="395" cy="125" r="24"/><path class="line" d="M420 140 L535 245"/><path class="gold" d="M515 215 L550 258 L500 248"/>
    <path class="soft" d="M395 165 L165 365 M395 165 L285 390 M395 165 L395 405 M395 165 L510 390 M395 165 L630 365"/>
    <path class="frame" d="M100 405 L155 280 L210 405 M235 405 L300 255 L360 405 M455 405 L510 260 L570 405 M595 405 L645 290 L700 405"/>
    <circle class="ghost" cx="395" cy="205" r="80"/>`,
  'the-lake-nyos-gas-cloud': `
    <path class="soft" d="M105 340 Q200 300 305 340 T505 340 T700 340 L700 405 H105Z"/>
    <path class="line" d="M105 340 Q200 300 305 340 T505 340 T700 340"/><path class="ghost" d="M150 320 Q205 205 300 245 Q365 125 475 220 Q570 155 650 320"/>
    <g class="gold"><circle cx="230" cy="230" r="6"/><circle cx="285" cy="195" r="8"/><circle cx="355" cy="165" r="5"/><circle cx="430" cy="200" r="7"/><circle cx="505" cy="230" r="5"/><circle cx="570" cy="260" r="8"/></g>
    <path class="soft" d="M165 370 H645 M200 390 H610"/>`,
  'the-tardigrades': `
    <ellipse class="gold-fill" cx="400" cy="260" rx="120" ry="85"/><circle class="ghost" cx="400" cy="260" r="145"/>
    <path class="line" d="M315 205 L260 150 L245 115 M350 190 L325 125 L330 95 M390 180 L390 115 L410 90 M435 190 L470 130 L500 110 M485 215 L555 180 L590 195 M310 300 L250 340 L230 380 M355 325 L330 390 L345 420 M435 330 L460 395 L490 410 M485 305 L555 345 L575 385"/>
    <circle class="gold-fill" cx="360" cy="245" r="10"/><circle class="gold-fill" cx="430" cy="245" r="10"/><path class="soft" d="M370 285 Q400 305 430 285"/>`,
  'the-mpemba-question': `
    <path class="soft" d="M110 115 V395 H700 M110 395 H700"/><path class="line" d="M130 150 C240 160 225 255 320 300 S500 365 680 375"/>
    <path class="gold" d="M130 300 C240 305 285 315 350 340 S520 372 680 378"/>
    <circle class="gold-fill" cx="320" cy="300" r="11"/><circle class="fill-pale" cx="350" cy="340" r="9"/>
    <text class="code" x="165" y="105">HOT</text><text class="code" x="165" y="285">COLD</text><path class="ghost" d="M320 300 V395 M350 340 V395"/>`,
  'the-devils-bible': `
    <path class="frame" d="M190 95 Q300 75 400 120 Q500 75 610 95 V390 Q500 370 400 415 Q300 370 190 390Z"/>
    <path class="gold" d="M400 120 V415"/><path class="soft" d="M220 140 Q300 125 370 150 M220 175 Q300 160 370 185 M220 210 Q300 195 370 220 M430 145 Q505 125 580 140 M430 180 Q505 160 580 175 M430 215 Q505 195 580 210"/>
    <path class="gold-fill" d="M450 330 Q485 280 520 320 L550 285 L565 365 H435Z"/><circle class="gold" cx="480" cy="318" r="7"/><circle class="gold" cx="530" cy="318" r="7"/>`,
  'the-taos-hum': `
    <path class="frame" d="M105 345 L190 235 L250 300 L350 165 L450 305 L515 230 L640 345Z"/><path class="soft" d="M90 365 H710"/>
    <path class="line" d="M95 195 C135 150 175 240 215 195 S295 150 335 195 S415 240 455 195 S535 150 575 195 S655 240 705 195"/>
    <path class="gold" d="M170 130 Q230 80 290 130 M510 130 Q570 80 630 130"/><path class="ghost" d="M205 100 Q275 35 345 100 M455 100 Q525 35 595 100"/>`,
  'the-great-stink-of-london': `
    <circle class="frame" cx="585" cy="145" r="65"/><path class="soft" d="M585 90 V145 L620 165"/>
    <path class="frame" d="M125 340 V220 H205 V340 M205 340 V175 H295 V340 M295 340 V240 H370 V340 M430 340 V205 H510 V340 M510 340 V155 H625 V340"/>
    <path class="gold" d="M80 360 Q160 330 240 360 T400 360 T560 360 T720 360 M80 395 Q160 365 240 395 T400 395 T560 395 T720 395"/>
    <path class="soft" d="M160 230 H185 M240 195 H270 M455 225 H485 M545 180 H600"/>`,
  'lincoln-kennedy-and-the-coincidence-machine': `
    <path class="soft" d="M115 145 H685 M115 350 H685"/><path class="line" d="M180 245 H620"/>
    <circle class="gold-fill" cx="180" cy="245" r="18"/><circle class="gold-fill" cx="320" cy="245" r="18"/><circle class="gold-fill" cx="480" cy="245" r="18"/><circle class="gold-fill" cx="620" cy="245" r="18"/>
    <rect class="frame" x="130" y="105" width="100" height="75" rx="8"/><rect class="frame" x="570" y="105" width="100" height="75" rx="8"/>
    <rect class="frame accent" x="130" y="315" width="100" height="75" rx="8"/><rect class="frame accent" x="570" y="315" width="100" height="75" rx="8"/>
    <path class="gold" d="M235 140 H555 M235 355 H555"/>`,
  'the-bloop': `
    <path class="soft" d="M75 170 Q170 150 265 170 T455 170 T645 170 T725 170 M75 270 Q170 250 265 270 T455 270 T645 270 T725 270 M75 370 Q170 350 265 370 T455 370 T645 370 T725 370"/>
    <circle class="ghost" cx="410" cy="290" r="65"/><circle class="ghost" cx="410" cy="290" r="125"/><circle class="ghost" cx="410" cy="290" r="185"/>
    <path class="line" d="M80 420 H200 L220 395 L240 435 L260 400 L280 420 H330 L350 365 L370 440 L390 310 L410 455 L430 370 L450 420 H710"/>
    <circle class="gold-fill" cx="410" cy="290" r="7"/>`
};

const categoryArtwork: Record<string, string> = {
  psych: `
    <path class="soft" d="M300 350 C220 310 230 180 315 150 C355 85 465 105 490 165 C575 170 610 285 535 335 C500 400 390 410 300 350Z"/>
    <path class="gold" d="M335 175 C390 220 330 245 390 275 S370 345 430 365 M440 150 C400 205 480 210 440 260 S510 315 470 365"/>
    <circle class="gold-fill" cx="590" cy="180" r="12"/><circle class="gold-fill" cx="630" cy="230" r="7"/>`,
  science: `
    <path class="frame" d="M350 105 V250 L265 390 Q255 415 290 415 H510 Q545 415 535 390 L450 250 V105"/>
    <path class="gold-fill" d="M290 335 Q400 305 510 335 L535 395 Q520 415 490 415 H310 Q275 415 265 395Z"/>
    <circle class="gold-fill" cx="335" cy="355" r="9"/><circle class="gold-fill" cx="390" cy="330" r="6"/><circle class="gold-fill" cx="445" cy="365" r="11"/>
    <ellipse class="soft" cx="190" cy="185" rx="85" ry="28"/><ellipse class="gold" cx="190" cy="185" rx="28" ry="85"/><circle class="gold-fill" cx="190" cy="185" r="8"/>`,
  internet: `
    <rect class="frame" x="105" y="95" width="590" height="330" rx="18"/><circle class="gold-fill" cx="135" cy="125" r="6"/><circle class="gold-fill" cx="158" cy="125" r="6"/><circle class="gold-fill" cx="181" cy="125" r="6"/>
    <path class="line" d="M190 220 L330 285 L470 205 L610 285 L520 360 L330 285"/>
    <circle class="gold-fill" cx="190" cy="220" r="13"/><circle class="gold-fill" cx="330" cy="285" r="13"/><circle class="gold-fill" cx="470" cy="205" r="13"/><circle class="gold-fill" cx="610" cy="285" r="13"/><circle class="gold-fill" cx="520" cy="360" r="13"/>`,
  history: `
    <rect class="frame" x="220" y="75" width="360" height="350" rx="8"/><path class="soft" d="M265 145 H530 M265 185 H505 M265 225 H535 M265 265 H470"/>
    <path class="gold" d="M105 335 C170 270 195 350 245 300 M565 170 C620 115 680 180 705 125"/><circle class="gold-fill" cx="515" cy="340" r="48"/>`,
  mystery: `
    <path class="soft" d="M145 120 L330 235 L530 135 L665 300 L420 385 L245 330 Z"/>
    <circle class="gold-fill" cx="145" cy="120" r="15"/><circle class="gold-fill" cx="330" cy="235" r="15"/><circle class="gold-fill" cx="530" cy="135" r="15"/><circle class="gold-fill" cx="665" cy="300" r="15"/><circle class="gold-fill" cx="420" cy="385" r="15"/>
    <rect class="frame accent" x="275" y="165" width="250" height="140" rx="5"/>`,
  coincidence: `
    <circle class="ghost" cx="400" cy="260" r="155"/><circle class="gold" cx="400" cy="260" r="95"/>
    <circle class="gold-fill" cx="245" cy="260" r="8"/><circle class="gold-fill" cx="400" cy="105" r="8"/><circle class="gold-fill" cx="555" cy="260" r="8"/><circle class="gold-fill" cx="400" cy="415" r="8"/>
    <path class="line" d="M245 260 L400 105 L555 260 L400 415Z"/>`,
  strange: `
    <path class="frame" d="M260 110 H540 V265 Q400 310 260 265Z"/><path class="gold-fill" d="M265 210 Q330 190 400 215 T535 210 V265 Q400 310 265 265Z"/>
    <path class="line" d="M265 265 C220 310 195 335 145 345 M535 265 C585 310 620 330 675 335"/>
    <circle class="gold-fill" cx="340" cy="345" r="17"/><circle class="gold-fill" cx="400" cy="375" r="13"/><circle class="gold-fill" cx="460" cy="340" r="20"/>`
};

const categoryCaptions: Record<string, string> = {
  psych: 'THE MIND AT WORK',
  science: 'OBSERVE · TEST · DISCOVER',
  internet: 'THE DIGITAL RABBIT HOLE',
  history: 'TRACES FROM ANOTHER TIME',
  mystery: 'THE EVIDENCE DOESN’T FIT',
  coincidence: 'WHEN RANDOMNESS LOOKS LIKE DESIGN',
  strange: 'AN UNEXPECTED TURN'
};

const captions: Record<string, string> = {
  'the-stroop-trap': 'WORD AND COLOUR COMPETE',
  'the-invisible-gorilla': 'SELECTIVE ATTENTION',
  'the-choice-you-did-not-choose': 'CHOICE BLINDNESS',
  'lost-in-a-memory': 'MEMORY · RECALL · SUGGESTION',
  'the-mere-exposure-pull': 'FAMILIARITY BUILDS PREFERENCE',
  'the-zeigarnik-loop': 'THE UNFINISHED TASK',
  'dunning-kruger-is-more-complicated': 'CONFIDENCE AND COMPETENCE',
  'the-placebo-before-the-pill': 'EXPECTATION CHANGES EXPERIENCE',
  'the-doorway-that-erases-a-thought': 'THE DOORWAY EFFECT',
  'the-phantom-phone-buzz': 'A NOTIFICATION THAT NEVER CAME',
  'the-mary-celeste': 'A SHIP WITHOUT ITS CREW',
  'dyatlov-pass-and-the-slab-avalanche': 'THE URAL MOUNTAINS · 1959',
  'the-wow-signal': 'A RADIO BURST · 1977',
  'the-voynich-manuscript': 'AN UNDECIPHERED CODEX',
  'the-bermuda-triangle': 'THREE POINTS IN THE ATLANTIC',
  'the-max-headroom-hijacking': 'A BROADCAST INTERRUPTED',
  'cicada-3301': 'A PUZZLE HIDDEN IN PLAIN SIGHT',
  'the-dancing-plague-of-1518': 'STRASBOURG · 1518',
  'the-great-molasses-flood': 'BOSTON · 1919',
  'the-great-beer-flood': 'LONDON · 1814',
  'the-year-without-a-summer': 'TAMBORA · 1816',
  'the-tunguska-event': 'AN AIRBURST OVER SIBERIA',
  'the-lake-nyos-gas-cloud': 'CAMEROON · 1986',
  'the-tardigrades': 'THE MICROSCOPIC SURVIVOR',
  'the-mpemba-question': 'WHICH FREEZES FIRST?',
  'the-devils-bible': 'THE CODEX GIGAS',
  'the-taos-hum': 'A SOUND WITHOUT A SOURCE',
  'the-great-stink-of-london': 'THE THAMES · 1858',
  'lincoln-kennedy-and-the-coincidence-machine': 'PATTERNS IN THE PRESIDENTS',
  'the-bloop': 'SOUTH PACIFIC · ACOUSTIC EVENT · 1997'
};

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  })[character]!);
}

export function visualSvg(kind: string, label = 'ARCHIVE VISUAL', slug = '') {
  const key = slug.toLowerCase();
  const content = artwork[key] ?? categoryArtwork[kind] ?? `
    <circle class="ghost" cx="400" cy="260" r="155"/>
    <circle class="gold" cx="400" cy="260" r="95"/>
    <path class="line" d="M245 260 L400 105 L555 260 L400 415Z"/>
    <circle class="gold-fill" cx="400" cy="260" r="12"/>`;
  const caption = captions[key] ?? categoryCaptions[kind] ?? '';

  return `<svg class="visual-svg" viewBox="0 0 800 520" preserveAspectRatio="xMidYMid meet" data-kind="${escapeXml(kind)}" role="img" aria-label="${escapeXml(label)}">
    <rect class="visual-bg" x="0" y="0" width="800" height="520" rx="28"/>
    ${content}
    ${caption ? `<text class="art-label" x="64" y="480">${caption}</text>` : ''}
  </svg>`;
}
