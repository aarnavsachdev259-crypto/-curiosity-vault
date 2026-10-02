import type { Story } from './types';

export const stories: Story[] = [
  {
    id: 1, slug: 'the-stroop-trap', category: 'Psychology', title: 'The Stroop Trap',
    hook: 'Your brain can know exactly what you should say—and still make the wrong answer feel automatic.',
    description: 'A tiny color-word conflict became one of psychology’s classic demonstrations of mental interference.', minutes: 4, curiosity: 9,
    visual: 'psych', tags: ['attention','interference','cognition'],
    sections: [
      { heading: 'The tiny task', paragraphs: ['Imagine the word BLUE printed in red ink. Your job is not to read the word. You have to name the ink color. Easy—until you actually try it.', 'The strange part is that reading the word is so practiced that it barges into the task without being invited. The result is a measurable slowdown and a surprising number of slips.'] },
      { heading: 'What Stroop found', paragraphs: ['In 1935, J. Ridley Stroop compared ordinary word reading with naming ink colors when the written word and the ink disagreed. Naming the color took dramatically longer under conflict in his experiment.', 'The lesson is less “your brain is bad at colors” and more “automatic skills can interfere with deliberate ones.” Your experience of control is sometimes built on top of processes that have already started moving.'] },
      { heading: 'Why it matters', paragraphs: ['The Stroop task became a compact tool for studying attention, inhibition and processing speed. Modern versions are everywhere because one sheet of words can expose a surprisingly rich tug-of-war between habits.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'You see BLUE written in red. What should you say?', options: [
      { label: 'BLUE', correct: false, feedback: 'That is the automatic reading response—the trap.' },
      { label: 'RED', correct: true, feedback: 'Correct. You are naming the ink, while suppressing the word.' },
      { label: 'PURPLE', correct: false, feedback: 'Nice try, but the ink is red.' },
      { label: 'Whatever you noticed first', correct: false, feedback: 'The task is designed to force a deliberate rule.' }
    ] },
    rabbitHole: ['the-stroop-trap','the-invisible-gorilla','the-choice-you-did-not-choose','the-doorway-that-erases-a-thought'],
    related: ['the-invisible-gorilla','the-choice-you-did-not-choose','the-doorway-that-erases-a-thought'],
    sources: [{ title: 'Stroop, 1935 — Journal of Experimental Psychology', url: 'https://doi.org/10.1037/h0054651' }, { title: 'Classics in the History of Psychology — Stroop', url: 'https://psychclassics.yorku.ca/Stroop/?c=01' }]
  },
  {
    id: 2, slug: 'the-invisible-gorilla', category: 'Human Behaviour', title: 'The Invisible Gorilla',
    hook: 'You can look directly at something unusual and still fail to see it when attention is pointed elsewhere.',
    description: 'The famous selective-attention experiment that turned “I would notice that” into a much shakier assumption.', minutes: 5, curiosity: 10,
    visual: 'psych', tags: ['attention','vision','experiment'],
    sections: [
      { heading: 'The prediction', paragraphs: ['Watch a short scene. Count the passes made by one team. Now make a prediction before you start: would you definitely notice someone in an animal costume crossing the action?', 'Many people confidently say yes. The experiment makes that confidence interesting.'] },
      { heading: 'The reveal', paragraphs: ['In the original selective-attention study by Christopher Chabris and Daniel Simons, a person in a gorilla costume walked through a video while viewers counted basketball passes. A substantial portion of viewers missed the gorilla entirely.', 'The point is not that people are blind. It is that attention is selective. When a task strongly controls what you are looking for, unexpected information can fail to reach conscious report.'] },
      { heading: 'The uncomfortable bit', paragraphs: ['This does not mean eyewitnesses can never be trusted, or that attention is always poor. It means confidence in noticing is not the same thing as actually noticing. That distinction matters in real-world settings where people assume the unusual will automatically pop out.'] }
    ],
    interaction: { type: 'true-false', prompt: 'True or false: If something visually obvious crosses your field of view, you will almost certainly notice it.', options: [
      { label: 'TRUE', correct: false, feedback: 'False. Salience helps, but attention can still filter unexpected events.' },
      { label: 'FALSE', correct: true, feedback: 'Correct. The classic experiment shows that obvious events can be missed during focused attention.' }
    ] },
    rabbitHole: ['the-invisible-gorilla','the-stroop-trap','the-doorway-that-erases-a-thought','the-phantom-phone-buzz'],
    related: ['the-stroop-trap','the-doorway-that-erases-a-thought','the-phantom-phone-buzz'],
    sources: [{ title: 'Simons & Chabris, Gorillas in Our Midst', url: 'https://doi.org/10.1037/0022-3514.76.2.198' }]
  },
  {
    id: 3, slug: 'the-choice-you-did-not-choose', category: 'Psychology', title: 'The Choice You Didn’t Choose',
    hook: 'People can sometimes defend a choice they never actually made.',
    description: 'Choice blindness is a strange gap between what we choose and what we later think we chose.', minutes: 5, curiosity: 9,
    visual: 'coincidence', tags: ['choice','introspection','decision making'],
    sections: [
      { heading: 'A simple swap', paragraphs: ['Researchers asked participants to choose between pairs of faces based on attractiveness. After a choice, the experiment sometimes covertly presented the non-chosen face instead.', 'The striking part was what happened next: people often failed to notice the mismatch. Then they could produce reasons for the choice they believed they had made.'] },
      { heading: 'The bigger idea', paragraphs: ['Choice blindness does not show that you have no access to your own mind. It shows that introspection is not a perfect readout. Sometimes we build a plausible explanation from the information currently in front of us.', 'That is one reason explanations for decisions can feel more certain than the underlying process deserves.'] },
      { heading: 'A useful pause', paragraphs: ['The next time you catch yourself thinking “I chose this because…” try treating that sentence as a hypothesis, not a recording of your brain’s hidden transcript.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'A researcher swaps your chosen option after you select it. Which outcome is documented in choice-blindness research?', options: [
      { label: 'Everyone notices instantly', correct: false, feedback: 'The effect exists precisely because some conspicuous mismatches go unnoticed.' },
      { label: 'Some people may not notice and can still explain the apparent choice', correct: true, feedback: 'Correct. That mismatch between choice and explanation is the heart of the effect.' },
      { label: 'Nobody can explain a choice', correct: false, feedback: 'People often generate confident reasons.' }
    ] },
    rabbitHole: ['the-choice-you-did-not-choose','dunning-kruger-is-more-complicated','the-mere-exposure-pull','lost-in-a-memory'],
    related: ['dunning-kruger-is-more-complicated','the-mere-exposure-pull','lost-in-a-memory'],
    sources: [{ title: 'Johansson et al., Science (2005)', url: 'https://doi.org/10.1126/science.1111709' }, { title: 'Lund University research portal', url: 'https://www.lunduniversity.lu.se/publication/c579a9b6-1b4a-4572-932e-0ff15f9832b4' }]
  },
  {
    id: 4, slug: 'lost-in-a-memory', category: 'Psychology', title: 'Lost in a Memory',
    hook: 'A detailed childhood memory can feel real even when the event was introduced as fiction.',
    description: 'How false-memory experiments changed the way researchers think about confidence, recall and suggestion.', minutes: 5, curiosity: 9,
    visual: 'psych', tags: ['memory','false memory','suggestion'],
    sections: [
      { heading: 'The setup', paragraphs: ['Researchers have used carefully controlled versions of a “lost in the mall” scenario: participants receive real childhood information from a relative plus one fabricated event, then discuss what they remember.', 'Some participants later report details and feelings about the fabricated event. That does not mean memories are generally fake. It shows that memory can be reconstructive.'] },
      { heading: 'The replication', paragraphs: ['A preregistered 2023 replication with a much larger sample again found that a portion of participants reported a false memory for getting lost in a mall. The researchers also found high rates of reported memories and beliefs for the fabricated event in the extension.', 'The careful takeaway is not “never trust memory.” It is that confidence and accuracy can come apart.'] },
      { heading: 'Why this matters', paragraphs: ['Memory is useful because it rebuilds a past scene from stored information. That flexibility helps learning, but it also creates opportunities for suggestion, source confusion and reconstruction.'] }
    ],
    interaction: { type: 'sequence', prompt: 'Which order best fits reconstructive memory?', steps: ['A cue appears','You retrieve stored fragments','Your brain reconstructs the episode','New information can influence the reconstruction'] },
    rabbitHole: ['lost-in-a-memory','the-choice-you-did-not-choose','the-doorway-that-erases-a-thought','the-zeigarnik-loop'],
    related: ['the-choice-you-did-not-choose','the-doorway-that-erases-a-thought','the-zeigarnik-loop'],
    sources: [{ title: 'PubMed — Lost in the mall again (2023 replication)', url: 'https://pubmed.ncbi.nlm.nih.gov/37017540/' }]
  },
  {
    id: 5, slug: 'the-mere-exposure-pull', category: 'Psychology', title: 'The Mere-Exposure Pull',
    hook: 'Sometimes familiarity quietly masquerades as liking.',
    description: 'Repeated exposure can increase positive feelings toward otherwise neutral things—a small effect with a surprisingly long history.', minutes: 4, curiosity: 8,
    visual: 'psych', tags: ['familiarity','preference','habits'],
    sections: [
      { heading: 'Nothing special', paragraphs: ['Show someone a neutral symbol once. Then show it again. Then again. There is no reward, story or argument attached. Just repeated exposure.', 'Robert Zajonc’s 1968 work proposed that repeated exposure itself could make a stimulus feel more favorable. The effect became known as the mere-exposure effect.'] },
      { heading: 'The interesting limit', paragraphs: ['Familiarity is not magic and it does not override strong negative attitudes. Contemporary descriptions emphasize that the effect is most likely when the initial attitude is not already negative.', 'It helps explain why a song can start as background noise and become oddly appealing after repeated listens.'] },
      { heading: 'The rabbit hole', paragraphs: ['Once you notice the effect, everyday preference gets more interesting: how much of what feels “my taste” is a deliberate judgment, and how much is accumulated familiarity?'] }
    ],
    interaction: { type: 'slider', prompt: 'How many neutral exposures would you predict before a tiny familiarity effect might appear?', slider: { min: 0, max: 10, start: 4, left: 'almost never', right: 'very often', revealAt: 5, feedback: 'The classic effect is about repeated exposure, but there is no universal magic number. More exposure can help, especially when the stimulus is neutral.' } },
    rabbitHole: ['the-mere-exposure-pull','the-choice-you-did-not-choose','the-placebo-before-the-pill','the-phantom-phone-buzz'],
    related: ['the-choice-you-did-not-choose','the-placebo-before-the-pill','the-phantom-phone-buzz'],
    sources: [{ title: 'Zajonc, 1968 — Attitudinal Effects of Mere Exposure', url: 'https://web.mit.edu/curhan/www/docs/Articles/biases/9_J_Personality_Social_Psychology_1_%28Zajonc%29.pdf' }, { title: 'APA Dictionary — Mere-exposure effect', url: 'https://dictionary.apa.org/mere-exposure-effect' }]
  },
  {
    id: 6, slug: 'the-zeigarnik-loop', category: 'Psychology', title: 'The Zeigarnik Loop',
    hook: 'An unfinished task can keep tugging at your attention—but the famous story is more complicated than the meme.',
    description: 'The unfinished-business effect has a long cultural afterlife, while modern evidence gives it important caveats.', minutes: 5, curiosity: 8,
    visual: 'psych', tags: ['memory','unfinished tasks','attention'], status: 'DISPUTED',
    sections: [
      { heading: 'The famous story', paragraphs: ['The classic tale says Bluma Zeigarnik noticed waiters remembered unsettled orders better than completed ones. She then studied memory for interrupted and completed actions in the 1920s.', 'The “unfinished tasks stick in your head” version became one of psychology’s best-known popular effects.'] },
      { heading: 'But there is a catch', paragraphs: ['Later research has not always reproduced the original pattern cleanly. A 2026 meta-analysis of unfinished work tasks found a robust relationship with work-related thoughts during off-job time, while also showing that the literature is about more than a simple memory advantage.', 'So the useful idea is not that every unfinished task haunts you. It is that incompletion can keep a mental representation active, especially under certain conditions.'] },
      { heading: 'The practical twist', paragraphs: ['Sometimes writing down a concrete plan is enough to quiet the loop. The brain can stop rehearsing a task when it has a clearer place to store the next step.'] }
    ],
    interaction: { type: 'reveal', prompt: 'What is the better modern takeaway?', reveal: 'Unfinished goals can keep attention active, but the size and reliability of the classic “memory advantage” are debated. Treat the effect as a useful lens, not a law of the brain.' },
    rabbitHole: ['the-zeigarnik-loop','lost-in-a-memory','the-doorway-that-erases-a-thought','the-stroop-trap'],
    related: ['lost-in-a-memory','the-doorway-that-erases-a-thought','the-stroop-trap'],
    sources: [{ title: 'Zeigarnik, 1927 — DOI record', url: 'https://doi.org/10.1007/BF02409755' }, { title: '2026 meta-analysis — Zeigarnik effect in work recovery', url: 'https://pubmed.ncbi.nlm.nih.gov/41554526/' }]
  },
  {
    id: 7, slug: 'dunning-kruger-is-more-complicated', category: 'Psychology', title: 'Dunning–Kruger Is More Complicated',
    hook: 'The famous graph is a meme. The underlying finding is about calibration, not a license to call other people clueless.',
    description: 'What the original study actually tested—and why the pop-culture version overstates the story.', minutes: 5, curiosity: 9,
    visual: 'coincidence', tags: ['metacognition','confidence','skill'], status: 'FACT',
    sections: [
      { heading: 'The original question', paragraphs: ['Kruger and Dunning asked how accurately people could judge their performance in areas including humor, grammar and logic. In their 1999 paper, lower-performing participants tended to overestimate how well they had done.', 'The authors argued that the skills needed to produce correct answers can also help people recognize errors—creating a double burden when skill is low.'] },
      { heading: 'What the meme misses', paragraphs: ['The study was not a universal “stupid people think they are geniuses” claim. It was about metacognitive calibration in tested tasks. The famous confidence curve has also been reinterpreted and debated by later researchers.', 'A more faithful takeaway is humbler: people can have trouble judging their own accuracy, and better domain knowledge can improve self-calibration.'] },
      { heading: 'The useful question', paragraphs: ['Instead of asking “Am I Dunning–Kruger-ing right now?” ask “What feedback would let me check my estimate?” That is much closer to what metacognition is for.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'Which description best matches the original 1999 study?', options: [
      { label: 'A universal law that unskilled people always think they are geniuses', correct: false, feedback: 'That is a popular exaggeration.' },
      { label: 'A study of performance estimation and metacognitive calibration', correct: true, feedback: 'Correct. The paper examined people’s estimates of their performance across specific tasks.' },
      { label: 'A personality test', correct: false, feedback: 'It was not a general personality test.' }
    ] },
    rabbitHole: ['dunning-kruger-is-more-complicated','the-choice-you-did-not-choose','the-invisible-gorilla','the-stroop-trap'],
    related: ['the-choice-you-did-not-choose','the-invisible-gorilla','the-stroop-trap'],
    sources: [{ title: 'Kruger & Dunning, 1999 — PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/10626367/' }, { title: 'Dunkel, Nedelec & van der Linden, 2023 — Reevaluating the effect', url: 'https://doi.org/10.1016/j.intell.2022.101717', note: 'A later replication found a statistically significant but small effect and discusses methodological alternatives.' }]
  },
  {
    id: 8, slug: 'the-placebo-before-the-pill', category: 'Human Behaviour', title: 'The Placebo Before the Pill',
    hook: 'Expectation can change how a symptom feels—before the treatment has had a chance to do anything pharmacological.',
    description: 'Placebo research shows how expectation, learning and social context can shape subjective symptoms, especially pain.', minutes: 5, curiosity: 9,
    visual: 'science', tags: ['expectation','pain','placebo'],
    sections: [
      { heading: 'The surprising ingredient', paragraphs: ['A placebo is not a secret ingredient that cures disease. It is an inactive treatment used as a comparison in trials. The “placebo effect” refers to beneficial changes influenced by expectation and treatment context.', 'Pain is one of the areas where placebo effects have been studied most deeply.'] },
      { heading: 'Context is information', paragraphs: ['Research reviews describe how verbal suggestions, previous experiences, conditioning, social learning and the clinician–patient relationship can all contribute to expectations that influence symptom perception.', 'That does not make symptoms imaginary. The perception of pain is a biological process, and changing the brain’s expectations can change the experience of it.'] },
      { heading: 'The boundary', paragraphs: ['Placebo responses do not mean inactive pills can replace effective treatments for serious conditions. Randomized placebo-controlled trials exist precisely to separate treatment-specific effects from contextual ones.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'Which factor is supported as part of placebo mechanisms?', options: [
      { label: 'Expectation and learning', correct: true, feedback: 'Correct. Expectation, conditioning and social learning are central themes in placebo research.' },
      { label: 'A hidden dose of the real medicine', correct: false, feedback: 'A placebo is inactive; that is the point of the control.' },
      { label: 'Only imagination', correct: false, feedback: 'Placebo responses involve measurable psychophysiological mechanisms.' }
    ] },
    rabbitHole: ['the-placebo-before-the-pill','the-mere-exposure-pull','the-phantom-phone-buzz','the-doorway-that-erases-a-thought'],
    related: ['the-mere-exposure-pull','the-phantom-phone-buzz'],
    sources: [{ title: 'NIH/NCCIH — Placebo Effect', url: 'https://www.nccih.nih.gov/health/placebo-effect' }, { title: 'Annual Review — The Placebo Effect in Pain Therapies', url: 'https://www.annualreviews.org/content/journals/10.1146/annurev-pharmtox-010818-021542' }]
  },
  {
    id: 9, slug: 'the-doorway-that-erases-a-thought', category: 'Human Behaviour', title: 'The Doorway That Erases a Thought',
    hook: 'Walk into another room and suddenly forget why you went there? Researchers have tested that exact feeling.',
    description: 'Event boundaries can update a mental scene and influence what remains accessible in working memory.', minutes: 4, curiosity: 8,
    visual: 'history', tags: ['memory','doorway','event boundaries'],
    sections: [
      { heading: 'The experience', paragraphs: ['You walk into the kitchen for something. Then you stop: why am I here? It feels like the doorway itself erased the plan.', 'Researchers have explored this using virtual and real environments, finding location-updating effects when people move between contexts.'] },
      { heading: 'Not a magic doorway', paragraphs: ['The finding is better understood as an event-boundary effect. A change in context can trigger an update to the current mental “event,” which can interfere with retrieval of information tied to the previous event.', 'In follow-up work, simply returning to the original room did not always restore memory, which makes the phenomenon more subtle than a literal reset button.'] },
      { heading: 'The strange comfort', paragraphs: ['The next time this happens, you do not need to blame your memory as “broken.” Your brain may simply have switched models of what is happening.'] }
    ],
    interaction: { type: 'true-false', prompt: 'True or false: Researchers have found evidence that changing locations can create a location-updating effect on memory.', options: [
      { label: 'TRUE', correct: true, feedback: 'Correct. Experiments have measured memory changes across location shifts.' },
      { label: 'FALSE', correct: false, feedback: 'The effect has been observed in virtual and real environments.' }
    ] },
    rabbitHole: ['the-doorway-that-erases-a-thought','lost-in-a-memory','the-zeigarnik-loop','the-invisible-gorilla'],
    related: ['lost-in-a-memory','the-zeigarnik-loop','the-invisible-gorilla'],
    sources: [{ title: 'Radvansky et al., 2011 — Quarterly Journal of Experimental Psychology', url: 'https://doi.org/10.1080/17470218.2011.571267' }]
  },
  {
    id: 10, slug: 'the-phantom-phone-buzz', category: 'Human Behaviour', title: 'The Phantom Phone Buzz',
    hook: 'Your pocket vibrates. You check. Nothing happened. Your nervous system invented a notification.',
    description: 'Phantom vibration is a documented sensory experience linked to frequent device use and conditioned attention.', minutes: 4, curiosity: 8,
    visual: 'internet', tags: ['phones','sensation','conditioning'],
    sections: [
      { heading: 'The fake notification', paragraphs: ['A phone that is not vibrating can still feel as though it is. Researchers call the experience phantom vibration syndrome: a false sensation that a phone or pager is buzzing.', 'In one early survey of medical staff, 68% of respondents reported experiencing phantom vibrations.'] },
      { heading: 'Why it feels plausible', paragraphs: ['Your brain is always interpreting ambiguous sensory signals. A small movement of clothing, muscle twitch or pressure can be matched to a familiar “incoming message” pattern, especially when vibrate mode is a frequent cue.', 'The experience is not a supernatural glitch. It is a useful reminder that perception is inference, not a raw recording.'] },
      { heading: 'The digital rabbit hole', paragraphs: ['The more phones become part of our routines, the more often a tiny bodily sensation can arrive with a pre-loaded interpretation: someone just contacted me. Sometimes the body speaks first; the notification arrives second—or never.'] }
    ],
    interaction: { type: 'reveal', prompt: 'Reveal the weirdest part of phantom vibration research.', reveal: 'In a 2012 survey of medical staff, 68% reported phantom vibrations. The frequency was associated with factors including where the device was carried, how long it was carried and use of vibrate mode.' },
    rabbitHole: ['the-phantom-phone-buzz','the-mere-exposure-pull','the-placebo-before-the-pill','cicada-3301'],
    related: ['the-mere-exposure-pull','the-placebo-before-the-pill','cicada-3301'],
    sources: [{ title: 'PubMed — Phantom vibration syndrome among medical staff', url: 'https://pubmed.ncbi.nlm.nih.gov/21159761/' }]
  },
  {
    id: 11, slug: 'the-mary-celeste', category: 'Mysteries', title: 'The Mary Celeste',
    hook: 'A ship was found adrift, seaworthy and stocked with supplies—but everyone aboard was gone.',
    description: 'The 1872 maritime mystery became a magnet for sensational theories, even though several clues point toward more ordinary possibilities.', minutes: 6, curiosity: 10,
    visual: 'mystery', tags: ['ocean','ship','mystery'], status: 'THEORY',
    sections: [
      { heading: 'The empty ship', paragraphs: ['On December 4, 1872, the brigantine Dei Gratia encountered the Mary Celeste in the Atlantic east of the Azores. The ship was deserted, but cargo and supplies remained.', 'The lifeboat was missing. The logbook offered a narrow window into what had happened, but not a satisfying conclusion.'] },
      { heading: 'Theories multiply', paragraphs: ['Over decades, stories grew: mutiny, pirates, monsters, sabotage and more. Arthur Conan Doyle even turned the premise into fiction, helping the case become part maritime history and part folklore.', 'Modern investigations have explored possibilities such as alcohol-vapor pressure, rough weather and an overhasty decision to abandon ship, but no single explanation is proven.'] },
      { heading: 'What we actually know', paragraphs: ['The strongest version of the mystery is the boringly precise one: people vanished from a vessel that could still sail, and the surviving evidence does not let us reconstruct the final sequence with certainty.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'Which statement is the safest conclusion?', options: [
      { label: 'The crew were definitely taken by pirates', correct: false, feedback: 'There is no proof establishing piracy.' },
      { label: 'The mystery is completely solved', correct: false, feedback: 'No explanation is universally accepted as proven.' },
      { label: 'The ship was found abandoned and the exact sequence remains uncertain', correct: true, feedback: 'Correct. That is the evidence-first version.' }
    ] },
    rabbitHole: ['the-mary-celeste','the-bermuda-triangle','the-wow-signal','the-bloop'],
    related: ['the-bermuda-triangle','the-wow-signal','the-bloop'],
    sources: [{ title: 'Smithsonian — Abandoned Ship: The Mary Celeste', url: 'https://www.smithsonianmag.com/history/abandoned-ship-the-mary-celeste-174488104/' }, { title: 'Smithsonian — Mary Celeste, 1872', url: 'https://www.smithsonianmag.com/smart-news/an-abandoned-merchant-ship-was-discovered-floating-in-the-atlantic-1872-the-mystery-its-missing-crew-never-solved-180985547/' }]
  },
  {
    id: 12, slug: 'dyatlov-pass-and-the-slab-avalanche', category: 'Mysteries', title: 'Dyatlov Pass & the Slab Avalanche',
    hook: 'A decades-old mystery gained a new physics-based hypothesis: a rare kind of snow movement may fit the scene better than its reputation suggests.',
    description: 'A 1959 mountain tragedy remains debated, but modern modeling has supplied a plausible natural mechanism.', minutes: 6, curiosity: 10,
    visual: 'mystery', tags: ['snow','mountains','forensics'], status: 'THEORY',
    sections: [
      { heading: 'The mystery', paragraphs: ['In February 1959, nine experienced Russian mountaineers died during an expedition in the northern Urals. The unusual conditions at the abandoned tent generated decades of theories.', 'The surviving evidence was incomplete, and popular retellings often magnified the strangest clues.'] },
      { heading: 'A new mechanism', paragraphs: ['A 2021 paper in Communications Earth & Environment modeled how a delayed slab avalanche could be triggered after the team cut into the slope to pitch a tent. The researchers argued that a small slab could produce dangerous loading even on a slope that looked too gentle for the classic avalanche picture.', 'Follow-up field work reported that slab avalanches are possible in the area and that traces can be erased quickly by wind.'] },
      { heading: 'Still a theory', paragraphs: ['The model makes the avalanche scenario physically plausible; it does not turn an incomplete historical record into certainty. The case is a good example of how science can update a mystery without pretending uncertainty has vanished.'] }
    ],
    interaction: { type: 'sequence', prompt: 'Arrange the proposed mechanism in the modeled order.', steps: ['Snow accumulates on a wind-loaded slope','A delayed slab releases above the tent','The moving slab impacts the tent area','The group reacts under severe conditions'] },
    rabbitHole: ['dyatlov-pass-and-the-slab-avalanche','the-bermuda-triangle','the-mary-celeste','the-taos-hum'],
    related: ['the-mary-celeste','the-taos-hum','the-bloop'],
    sources: [{ title: 'Nature — Mechanisms of slab avalanche release at Dyatlov Pass', url: 'https://www.nature.com/articles/s43247-020-00081-8' }, { title: 'Nature — Follow-up expeditions reveal avalanches at Dyatlov Pass', url: 'https://doi.org/10.1038/s43247-022-00393-x' }]
  },
  {
    id: 13, slug: 'the-wow-signal', category: 'Science', title: 'The Wow! Signal',
    hook: 'For 72 seconds in 1977, a radio telescope recorded something so striking an astronomer wrote one word beside the data: “Wow!”',
    description: 'A single narrow-band signal became SETI’s most famous mystery because it looked interesting—and never returned.', minutes: 5, curiosity: 10,
    visual: 'science', tags: ['radio astronomy','SETI','signal'], status: 'UNVERIFIED',
    sections: [
      { heading: 'The printout', paragraphs: ['On August 15, 1977, Ohio State University’s Big Ear radio telescope detected a strong narrow-band signal during a routine sky survey. The intensity rose and fell in a way expected when a fixed celestial source sweeps through the telescope beam.', 'Astronomer Jerry Ehman later saw the encoded sequence 6EQUJ5 and wrote “Wow!” beside it.'] },
      { heading: 'The problem', paragraphs: ['A promising signal is only promising if it can be checked. Follow-up searches did not reproduce the event. Without a repeat detection, there is no confirmed source or confirmed extraterrestrial message.', 'That tension is what makes the story interesting: the data were unusual enough to survive decades of attention, but not complete enough to close the case.'] },
      { heading: 'The honest label', paragraphs: ['It is best described as an unexplained or unverified candidate signal—not proof of alien life. SETI researchers continue to distinguish intriguing anomalies from confirmed detections.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'Why is the Wow! Signal still famous?', options: [
      { label: 'It was observed repeatedly for years', correct: false, feedback: 'It was not repeated.' },
      { label: 'It was a strong narrow-band signal with an intriguing shape, but never confirmed', correct: true, feedback: 'Exactly. The one-off nature is part of the mystery.' },
      { label: 'Scientists decoded an alien message', correct: false, feedback: 'No message was decoded.' }
    ] },
    rabbitHole: ['the-wow-signal','the-bloop','the-taos-hum','cicada-3301'],
    related: ['the-bloop','the-taos-hum','cicada-3301'],
    sources: [{ title: 'SETI Institute — The Wow! Signal', url: 'https://www.seti.org/research/seti-101/the-wow-signal' }, { title: 'Ohio Big Ear archive', url: 'https://bigear.org/odisplays/ohscol/ohscol.htm' }]
  },
  {
    id: 14, slug: 'the-voynich-manuscript', category: 'Mysteries', title: 'The Voynich Manuscript',
    hook: 'A centuries-old illustrated manuscript sits in Yale’s library, filled with writing no one has convincingly decoded.',
    description: 'An undeciphered script, botanical drawings and strange diagrams turned one manuscript into a permanent cryptographic rabbit hole.', minutes: 5, curiosity: 10,
    visual: 'history', tags: ['manuscript','cipher','renaissance'], status: 'UNVERIFIED',
    sections: [
      { heading: 'A real object', paragraphs: ['The Voynich Manuscript—Yale’s Beinecke MS 408—is a real parchment codex produced in Central Europe in the fifteenth century. Radiocarbon work places the parchment in the early 1400s.', 'Its pages contain an unidentified script alongside plant, astronomical, bathing and pharmaceutical-looking illustrations.'] },
      { heading: 'A century of decoding', paragraphs: ['The manuscript was bought by bookseller Wilfrid Voynich in 1912 and quickly became an object of intense cryptographic interest. Many proposed solutions have appeared; none has been accepted as a definitive reading.', 'Yale is careful about the distinction between what can be observed and what can be interpreted. The manuscript is real; its language and meaning remain unsettled.'] },
      { heading: 'The best clue', paragraphs: ['The strangest thing is not that nobody has solved it. It is that the manuscript is available to study in high-resolution scans, so the mystery remains public rather than hidden behind access.'] }
    ],
    interaction: { type: 'reveal', prompt: 'Reveal the one thing we can say with confidence about the manuscript.', reveal: 'It is not a modern hoax printed last century. Yale describes MS 408 as a fifteenth-century parchment codex; scientific testing has placed the parchment in the early 1400s.' },
    rabbitHole: ['the-voynich-manuscript','the-devils-bible','cicada-3301','the-wow-signal'],
    related: ['the-devils-bible','cicada-3301','the-wow-signal'],
    sources: [{ title: 'Yale Beinecke — The Voynich Manuscript', url: 'https://beinecke.library.yale.edu/beinecke/collections/beinecke-cipher-voynich-manuscript' }, { title: 'Yale University Press — The Voynich Manuscript', url: 'https://yalebooks.yale.edu/book/9780300217230/the-voynich-manuscript/' }]
  },
  {
    id: 15, slug: 'the-bermuda-triangle', category: 'Mysteries', title: 'The Bermuda Triangle',
    hook: 'A famous patch of ocean became legendary—but the official record does not support supernatural explanations.',
    description: 'Separating the folklore from the weather, navigation and geography around one of the world’s most famous “mystery zones.”', minutes: 5, curiosity: 8,
    visual: 'mystery', tags: ['ocean','folklore','weather'], status: 'POPULAR CLAIM',
    sections: [
      { heading: 'The legend', paragraphs: ['For decades, stories about ships and aircraft disappearing in the western North Atlantic were bundled into a named “triangle.” The stories often added compasses, strange lights, time distortions or other extraordinary causes.', 'But the boundaries themselves are not official: the U.S. Board of Geographic Names does not recognize “Bermuda Triangle” as an official geographic name.'] },
      { heading: 'The ordinary suspects', paragraphs: ['NOAA points to hurricanes, rapidly changing weather, the Gulf Stream, shallow waters around islands and human navigation errors as plausible contributors to maritime accidents in the region.', 'The ocean is large and hard to search. That alone creates dramatic stories when records are incomplete.'] },
      { heading: 'The reality check', paragraphs: ['NOAA states that there is no evidence that mysterious disappearances occur more frequently there than in other large, well-traveled areas of ocean.'] }
    ],
    interaction: { type: 'true-false', prompt: 'True or false: NOAA says there is evidence of unusually frequent mysterious disappearances in the Bermuda Triangle.', options: [
      { label: 'TRUE', correct: false, feedback: 'No. NOAA says there is no evidence of unusually frequent mysterious disappearances.' },
      { label: 'FALSE', correct: true, feedback: 'Correct. The legend is much stronger than the evidence.' }
    ] },
    rabbitHole: ['the-bermuda-triangle','the-mary-celeste','the-wow-signal','the-bloop'],
    related: ['the-mary-celeste','the-wow-signal','the-bloop'],
    sources: [{ title: 'NOAA Ocean Service — What is the Bermuda Triangle?', url: 'https://oceanservice.noaa.gov/facts/bermudatri.html' }]
  },
  {
    id: 16, slug: 'the-max-headroom-hijacking', category: 'Internet', title: 'The Max Headroom Hijacking',
    hook: 'Two Chicago TV stations were interrupted in 1987 by a masked figure wearing Max Headroom’s face. The culprit was never identified.',
    description: 'A real broadcast intrusion became one of television’s strangest unsolved pieces of digital folklore.', minutes: 5, curiosity: 10,
    visual: 'internet', tags: ['television','piracy','broadcast'], status: 'UNVERIFIED',
    sections: [
      { heading: 'November 22, 1987', paragraphs: ['During a Sunday evening broadcast, WGN’s news signal was hijacked for roughly half a minute. Later that night WTTW’s broadcast was interrupted again, this time for around 90 seconds, by a person in a Max Headroom mask.', 'The footage was bizarre enough to become a local legend almost immediately.'] },
      { heading: 'The technical clue', paragraphs: ['WTTW engineers said the interruption required sophisticated broadcast knowledge. The Federal Communications Commission investigated, but the person responsible was never publicly identified.', 'Because the attack was brief and no credible perpetrator was established, later internet retellings filled the gap with theories.'] },
      { heading: 'Why it stuck', paragraphs: ['It was not a fictional creepypasta. The underlying event happened. The unresolved identity is what turned an engineering crime into an enduring cultural mystery.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'What part of the story is confirmed?', options: [
      { label: 'The broadcast interruptions happened', correct: true, feedback: 'Correct. WGN and WTTW were both interrupted on November 22, 1987.' },
      { label: 'The hijacker was publicly identified', correct: false, feedback: 'The investigation never established the person responsible.' },
      { label: 'The incident was invented online', correct: false, feedback: 'The real broadcast intrusion predates internet creepypasta.' }
    ] },
    rabbitHole: ['the-max-headroom-hijacking','cicada-3301','the-voynich-manuscript','the-wow-signal'],
    related: ['cicada-3301','the-voynich-manuscript','the-wow-signal'],
    sources: [{ title: 'WTTW — Max Headroom Incident', url: 'https://news.wttw.com/2017/11/21/30-years-later-notorious-max-headroom-incident-remains-mystery' }]
  },
  {
    id: 17, slug: 'cicada-3301', category: 'Internet', title: 'Cicada 3301',
    hook: 'A black image, a hidden message, and a trail that jumped from cryptography to real-world locations created the internet’s most famous recruiting puzzle.',
    description: 'Cicada 3301 blurred the line between puzzle, recruitment attempt and internet myth.', minutes: 6, curiosity: 10,
    visual: 'internet', tags: ['cryptography','internet','puzzles'], status: 'UNVERIFIED',
    sections: [
      { heading: 'The first post', paragraphs: ['In January 2012, an anonymous account posted an image saying it was looking for highly intelligent individuals and had hidden a message inside the image. The trail continued through cryptography, steganography, literature and technical clues.', 'Later stages pointed solvers toward physical locations in several countries, turning an online puzzle into a global scavenger hunt.'] },
      { heading: 'Recruitment or game?', paragraphs: ['The organizers’ identity and exact purpose have never been conclusively established. Some people have suggested intelligence agencies, privacy groups or private recruitment; those claims are not proof.', 'The documented core is simpler: the puzzles existed, people solved portions of them, and the trail repeatedly disappeared or advanced beyond the public crowd.'] },
      { heading: 'Why it still matters', paragraphs: ['Cicada is a perfect internet rabbit hole because the medium became part of the puzzle. Finding the next clue required knowing how information could hide inside information.'] }
    ],
    interaction: { type: 'sequence', prompt: 'Put the early puzzle flow in the right order.', steps: ['Hidden message inside an image','Cryptographic / steganographic clue','Book or text-based clue','Real-world location clue'] },
    rabbitHole: ['cicada-3301','the-voynich-manuscript','the-max-headroom-hijacking','the-wow-signal'],
    related: ['the-voynich-manuscript','the-max-headroom-hijacking','the-wow-signal'],
    sources: [{ title: 'The Guardian — Cicada 3301', url: 'https://www.theguardian.com/technology/2014/jan/10/cicada-3301-i-tried-the-hardest-puzzle-on-the-internet-and-failed-spectacularly' }, { title: 'CBS News — Cicada 3301', url: 'https://www.cbsnews.com/news/cicada-3301-code-breaking-scavenger-hunt-has-the-internet-mystified/' }]
  },
  {
    id: 18, slug: 'the-dancing-plague-of-1518', category: 'History', title: 'The Dancing Plague of 1518',
    hook: 'In Strasbourg, hundreds of people were reported to dance uncontrollably for weeks. Historians still debate exactly what happened.',
    description: 'A bizarre episode at the edge of documented history where social contagion, belief and biology collide.', minutes: 6, curiosity: 10,
    visual: 'history', tags: ['strasbourg','social contagion','history'], status: 'THEORY',
    sections: [
      { heading: 'A strange summer', paragraphs: ['In July 1518, reports from Strasbourg describe Frau Troffea beginning to dance in the street, followed by many more people over the following days and weeks. Historical accounts differ in details and scale, but the outbreak itself is well documented in contemporary sources.', 'Later summaries have popularized the number of roughly 400 participants.'] },
      { heading: 'Why would doctors encourage it?', paragraphs: ['One of the strangest details is that authorities reportedly arranged spaces and musicians because they believed continued movement might help the afflicted. Whatever the original reasoning, the response may have reinforced the social environment around the episode.', 'The leading modern interpretations often invoke some form of mass psychogenic illness or social contagion, while older theories include ergot poisoning. The evidence does not settle the question cleanly.'] },
      { heading: 'The useful uncertainty', paragraphs: ['The story is compelling precisely because it resists a neat diagnosis. Medieval records are incomplete, and the modern categories we use were not the categories people in 1518 used.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'Which explanation is commonly discussed today?', options: [
      { label: 'Mass psychogenic illness / social contagion', correct: true, feedback: 'Yes. It is one of the leading modern interpretations, though not a proven single cause.' },
      { label: 'A confirmed extraterrestrial signal', correct: false, feedback: 'There is no evidence for that.' },
      { label: 'A universally accepted poisoning mechanism', correct: false, feedback: 'Ergot poisoning has been proposed, but the evidence is disputed.' }
    ] },
    rabbitHole: ['the-dancing-plague-of-1518','the-great-molasses-flood','the-great-beer-flood','the-great-stink-of-london'],
    related: ['the-great-molasses-flood','the-great-beer-flood','the-great-stink-of-london'],
    sources: [{ title: 'National Geographic — Dancing Plague of 1518', url: 'https://www.nationalgeographic.com/history/article/dancing-plague-of-1518-strasbourg-choreomania' }]
  },
  {
    id: 19, slug: 'the-great-molasses-flood', category: 'History', title: 'The Great Molasses Flood',
    hook: 'In 1919 Boston, a huge industrial tank ruptured and sent a wave of molasses through the North End.',
    description: 'A disaster that sounds fictional until the engineering, weather and legal history come into focus.', minutes: 5, curiosity: 9,
    visual: 'history', tags: ['boston','engineering','disaster'],
    sections: [
      { heading: 'The impossible-sounding wave', paragraphs: ['On January 15, 1919, a storage tank holding roughly 2.3 million gallons of molasses ruptured in Boston’s North End. Contemporary accounts describe a fast-moving wave that damaged buildings and infrastructure.', 'The phrase “slow as molasses” makes the story sound absurd. In a sudden release from a huge elevated tank, gravity and pressure can create a very different flow.'] },
      { heading: 'The science after the fact', paragraphs: ['Smithsonian’s historical account records an estimated wave speed of about 35 miles per hour. Later engineering analysis focused on the tank’s construction, fermentation gases, temperature and structural stresses.', 'The event became an important part of the history of industrial safety and liability in Boston.'] },
      { heading: 'Why remember it?', paragraphs: ['The disaster is a reminder that familiar materials can become dangerous systems when scale, containment and engineering assumptions line up badly.'] }
    ],
    interaction: { type: 'true-false', prompt: 'True or false: the 1919 Boston molasses disaster involved a tank containing millions of gallons of molasses.', options: [
      { label: 'TRUE', correct: true, feedback: 'Correct. The tank held about 2.3 million gallons.' },
      { label: 'FALSE', correct: false, feedback: 'It was a truly enormous industrial storage tank.' }
    ] },
    rabbitHole: ['the-great-molasses-flood','the-great-beer-flood','the-great-stink-of-london','the-dancing-plague-of-1518'],
    related: ['the-great-beer-flood','the-great-stink-of-london','the-dancing-plague-of-1518'],
    sources: [{ title: 'Smithsonian — Without Warning, Molasses Surged Over Boston', url: 'https://www.smithsonianmag.com/history/without-warning-molasses-january-surged-over-boston-180971251/' }, { title: 'Smithsonian — The Sticky Science Behind the Disaster', url: 'https://www.smithsonianmag.com/smart-news/why-boston-molasses-disaster-was-so-deadly-180961209/' }]
  },
  {
    id: 20, slug: 'the-great-beer-flood', category: 'Strange', title: 'The Great Beer Flood',
    hook: 'London once experienced a flood of beer. It was not a joke, and eight people died.',
    description: 'The 1814 Horseshoe Brewery vat failure is one of history’s strangest industrial accidents.', minutes: 4, curiosity: 9,
    visual: 'history', tags: ['london','brewery','accident'],
    sections: [
      { heading: 'The vat', paragraphs: ['In 1814, at the Horseshoe Brewery in London, an enormous vat burst and released a torrent of beer. Nearby buildings were damaged and eight people were killed.', 'The event quickly became legendary because of the absurdity of its material: a city street overtaken by beer.'] },
      { heading: 'Engineering lessons', paragraphs: ['The accident sits in the long history of industrial-scale storage. Large containers do not fail like kitchen bottles: pressure, structural joints and the consequences of failure increase dramatically with scale.', 'The brewery continued operating after the disaster, a reminder that industrial history is full of systems that were gradually redesigned rather than instantly abandoned.'] },
      { heading: 'Museum-worthy weirdness', paragraphs: ['It sounds invented because the setup is almost too perfect for a story. The London Museum’s collection records the flood as a real 1814 event.'] }
    ],
    interaction: { type: 'reveal', prompt: 'Reveal the historical source note.', reveal: 'London Museum records that Meux’s Horseshoe Brewery suffered the Great Beer Flood in 1814, when an enormous vat burst, collapsed surrounding buildings and killed eight people.' },
    rabbitHole: ['the-great-beer-flood','the-great-molasses-flood','the-great-stink-of-london','the-year-without-a-summer'],
    related: ['the-great-molasses-flood','the-great-stink-of-london','the-year-without-a-summer'],
    sources: [{ title: 'London Museum — Historic breweries', url: 'https://www.londonmuseum.org.uk/collections/london-stories/pint-sized-guide-londons-historic-breweries/' }]
  },
  {
    id: 21, slug: 'the-year-without-a-summer', category: 'Science', title: 'The Year Without a Summer',
    hook: 'A volcanic eruption thousands of kilometres away helped turn 1816 into a year of frost, crop failures and summer snow.',
    description: 'The climatic aftershock of Mount Tambora is a clean demonstration of how a local event can become global.', minutes: 5, curiosity: 9,
    visual: 'science', tags: ['volcano','climate','1816'],
    sections: [
      { heading: 'The eruption', paragraphs: ['Mount Tambora in Indonesia erupted catastrophically in April 1815. Ash and sulfur-rich material spread through the atmosphere, changing how sunlight interacted with Earth’s climate system.', 'The following year, 1816, became known as the “Year Without a Summer” in parts of the Northern Hemisphere.'] },
      { heading: 'The chill', paragraphs: ['NOAA records widespread cooling, crop failures and food shortages, with snow reported in New England in July. Historical weather observations provide a window into how the event was experienced locally.', 'The key mechanism is atmospheric particles that altered the radiation balance, producing a temporary volcanic cooling effect.'] },
      { heading: 'A global connection', paragraphs: ['The story is an early natural experiment in Earth-system coupling: a volcano in Indonesia could influence agriculture and daily life far away.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'What followed the 1815 Tambora eruption?', options: [
      { label: 'A temporary period of global / Northern Hemisphere cooling', correct: true, feedback: 'Correct. 1816 became famous for unusual cooling and crop failures.' },
      { label: 'A permanent ice age', correct: false, feedback: 'The cooling was temporary, not an ice age.' },
      { label: 'No detectable climate effects', correct: false, feedback: 'Historical and instrumental evidence show substantial effects.' }
    ] },
    rabbitHole: ['the-year-without-a-summer','the-tunguska-event','the-tardigrades','the-bloop'],
    related: ['the-tunguska-event','the-tardigrades','the-bloop'],
    sources: [{ title: 'NOAA — Mount Tambora and the Year Without a Summer', url: 'https://www.nesdis.noaa.gov/news/day-history-mount-tambora-explosively-erupts-1815' }, { title: 'NOAA Repository — 1816 observations', url: 'https://repository.library.noaa.gov/view/noaa/22105' }]
  },
  {
    id: 22, slug: 'the-tunguska-event', category: 'Science', title: 'The Tunguska Event',
    hook: 'In 1908, something exploded over Siberia with enough energy to flatten a vast forest—without leaving a normal crater.',
    description: 'A cosmic impact without the classic impact hole: the atmosphere did the exploding for it.', minutes: 5, curiosity: 10,
    visual: 'science', tags: ['asteroid','siberia','impact'],
    sections: [
      { heading: 'June 30, 1908', paragraphs: ['Eyewitnesses in a remote part of Siberia reported a bright fireball, a huge explosion and widespread destruction. The first scientific expedition reached the area years later because of the remoteness.', 'Investigators found a vast region of flattened and burned trees, but no simple impact crater.'] },
      { heading: 'The airburst', paragraphs: ['Modern understanding points to a small asteroid or fragment exploding in the atmosphere before reaching the ground intact. NASA describes an atmospheric explosion as the best explanation for the pattern of devastation.', 'That is why the event feels paradoxical: something from space caused an impact-like disaster without a classic hole in the ground.'] },
      { heading: 'The planetary-defense connection', paragraphs: ['Tunguska is one reason planetary defense is taken seriously. Objects can break apart high above Earth while still releasing enormous energy.'] }
    ],
    interaction: { type: 'sequence', prompt: 'What happened in the simplest physical sequence?', steps: ['A space object entered the atmosphere','Atmospheric heating and pressure increased rapidly','The object fragmented / exploded in an airburst','A shock wave damaged the forest'] },
    rabbitHole: ['the-tunguska-event','the-year-without-a-summer','the-wow-signal','the-bloop'],
    related: ['the-year-without-a-summer','the-wow-signal','the-bloop'],
    sources: [{ title: 'NASA — Tunguska Asteroid Impact Event', url: 'https://www.nasa.gov/history/115-years-ago-the-tunguska-asteroid-impact-event/' }]
  },
  {
    id: 23, slug: 'the-lake-nyos-gas-cloud', category: 'Science', title: 'The Lake Nyos Gas Cloud',
    hook: 'A quiet volcanic lake can store dissolved gas. In 1986, that hidden chemistry became catastrophic.',
    description: 'A rare natural phenomenon known as a limnic eruption can release carbon dioxide from deep lake water.', minutes: 5, curiosity: 9,
    visual: 'science', tags: ['lake nyos','geology','gas'],
    sections: [
      { heading: 'The hidden reservoir', paragraphs: ['Lake Nyos in Cameroon sits in a volcanic region where carbon dioxide can accumulate in deep water. Under stable conditions, the gas remains dissolved under pressure.', 'In August 1986, a sudden disturbance caused a large amount of carbon dioxide-rich water to rise, releasing gas into the surrounding area.'] },
      { heading: 'Why the water mattered', paragraphs: ['This is called a limnic eruption: not an eruption of lava, but a rapid overturning and degassing of a lake. Because carbon dioxide is denser than air, a concentrated release can pool near the ground.', 'Scientists later engineered systems to remove dissolved gas from the lake more gradually.'] },
      { heading: 'The odd lesson', paragraphs: ['The event looks supernatural in retellings because the lake itself appears calm. The cause is hidden in pressure, chemistry and geology—systems you cannot see from the shoreline.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'What is a limnic eruption?', options: [
      { label: 'A sudden release of dissolved gas from a lake', correct: true, feedback: 'Correct. It is a rare lake-gas phenomenon.' },
      { label: 'A volcanic lava flow under water', correct: false, feedback: 'Different process.' },
      { label: 'An earthquake that only happens under lakes', correct: false, feedback: 'Not the definition.' }
    ] },
    rabbitHole: ['the-lake-nyos-gas-cloud','the-tunguska-event','the-mpemba-question','the-tardigrades'],
    related: ['the-tunguska-event','the-mpemba-question','the-tardigrades'],
    sources: [{ title: 'USGS — Lake Nyos disaster and limnic eruptions', url: 'https://pubs.usgs.gov/publication/70176723' }]
  },
  {
    id: 24, slug: 'the-tardigrades', category: 'Science', title: 'The Tardigrades',
    hook: 'Microscopic “water bears” can enter a suspended state that lets some species survive environmental extremes that would kill most animals.',
    description: 'Tardigrades are not immortal—but their survival tricks are weird enough to look fictional.', minutes: 5, curiosity: 9,
    visual: 'science', tags: ['tardigrades','space biology','extremophiles'],
    sections: [
      { heading: 'The tiny animal', paragraphs: ['Tardigrades are microscopic, eight-legged invertebrates found in many environments. They are famous for surviving conditions that are lethal to most active animals.', 'The crucial phrase is “some species” and “certain states.” Active tardigrades are vulnerable; extreme survival often involves entering a dehydrated, metabolically suppressed state called cryptobiosis.'] },
      { heading: 'Space is not their superpower', paragraphs: ['NASA has studied tardigrades as models for biological stress. In 2007, tardigrades were shown to survive and generally reproduce during an 11-day exposure to low-Earth orbit on the Foton-M3 mission.', 'That does not mean they are invincible or that they can casually live forever in outer space. Their biology is a study in controlled shutdown and recovery.'] },
      { heading: 'The deeper discovery', paragraphs: ['The interesting question is not “How tough are they?” It is “How does an animal protect its cells while almost completely changing its relationship with water and metabolism?”'] }
    ],
    interaction: { type: 'reveal', prompt: 'Reveal the key survival trick.', reveal: 'Some tardigrades enter cryptobiosis: a metabolically suspended state associated with extreme resistance to dehydration and other stresses. The active animal itself is not simply immune to everything.' },
    rabbitHole: ['the-tardigrades','the-mpemba-question','the-lake-nyos-gas-cloud','the-tunguska-event'],
    related: ['the-mpemba-question','the-lake-nyos-gas-cloud','the-tunguska-event'],
    sources: [{ title: 'NASA — Cell Science-04: Water Bears', url: 'https://science.nasa.gov/biological-physical/investigations/cell-science-04/' }, { title: 'NASA — Tardigrades and space-like conditions', url: 'https://astrobiology.nasa.gov/news/check-type-tardigrades-eggs-survive-space-like-conditions/' }]
  },
  {
    id: 25, slug: 'the-mpemba-question', category: 'Science', title: 'The Mpemba Question',
    hook: 'Can hot water freeze faster than cooler water? Sometimes—but the famous effect is a physics question, not a guaranteed kitchen trick.',
    description: 'A counterintuitive freezing claim became a scientific puzzle involving evaporation, convection, dissolved gases and experimental design.', minutes: 5, curiosity: 9,
    visual: 'science', tags: ['freezing','water','physics'], status: 'DISPUTED',
    sections: [
      { heading: 'The counterintuitive claim', paragraphs: ['The Mpemba effect refers to observations where, under some conditions, a hotter sample of water can freeze before a cooler sample. Erasto Mpemba famously drew attention to the phenomenon in the 1960s.', 'The key phrase is “under some conditions.”'] },
      { heading: 'Why the setup matters', paragraphs: ['Temperature does not tell the whole story. Evaporation can change mass; convection changes heat transfer; dissolved gases and container conditions can matter; and the definition of “freezing first” can vary.', 'A 2016 paper in Scientific Reports described ways the effect can arise in certain experimental setups, while the broader phenomenon remains sensitive to conditions.'] },
      { heading: 'Curiosity with caveats', paragraphs: ['The fun is not that physics breaks its own rules. It is that a simple system can contain multiple coupled processes, and changing one starting condition can change the path to the outcome.'] }
    ],
    interaction: { type: 'true-false', prompt: 'True or false: hot water will always freeze faster than cold water.', options: [
      { label: 'TRUE', correct: false, feedback: 'No. The phenomenon is conditional and not a universal rule.' },
      { label: 'FALSE', correct: true, feedback: 'Correct. Under some experimental conditions the hotter sample can freeze first, but not always.' }
    ] },
    rabbitHole: ['the-mpemba-question','the-tardigrades','the-stroop-trap','the-bloop'],
    related: ['the-tardigrades','the-stroop-trap','the-bloop'],
    sources: [{ title: 'Scientific Reports — Mpemba effect', url: 'https://www.nature.com/articles/srep19392' }]
  },
  {
    id: 26, slug: 'the-devils-bible', category: 'History', title: 'The Devil’s Bible',
    hook: 'A gigantic medieval manuscript became famous for a full-page devil illustration—and its true story is stranger than the nickname.',
    description: 'Codex Gigas is enormous, richly illustrated and very real; the devil lore was built around the book rather than evidence of supernatural authorship.', minutes: 5, curiosity: 9,
    visual: 'history', tags: ['codex','medieval','manuscript'], status: 'POPULAR CLAIM',
    sections: [
      { heading: 'The object', paragraphs: ['Codex Gigas was made in Bohemia between about 1204 and 1230. The National Library of Sweden records it as a parchment manuscript written in Latin, containing biblical books and other texts.', 'Its physical scale is extraordinary: the catalog lists 309 leaves and a height of roughly 890 mm.'] },
      { heading: 'Where the devil enters', paragraphs: ['The manuscript contains a striking full-page image of the devil, which helped create the popular nickname “Devil’s Bible.” Legends later claimed that a monk completed the entire work overnight with supernatural help.', 'There is no evidence that a supernatural being created the manuscript. The documented history points to a large medieval book assembled over time.'] },
      { heading: 'The real rabbit hole', paragraphs: ['The genuinely fascinating part is what a manuscript this large tells us about medieval knowledge: scripture, medical texts, chronicles and practical information could occupy the same physical object.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'What does the Swedish manuscript catalogue actually document?', options: [
      { label: 'A medieval Latin parchment manuscript', correct: true, feedback: 'Correct. That is the documented object.' },
      { label: 'A book proven to have been written overnight by the devil', correct: false, feedback: 'That is legend, not catalogued evidence.' },
      { label: 'A modern prop', correct: false, feedback: 'It is an authentic medieval manuscript.' }
    ] },
    rabbitHole: ['the-devils-bible','the-voynich-manuscript','the-great-stink-of-london','the-dancing-plague-of-1518'],
    related: ['the-voynich-manuscript','the-great-stink-of-london','the-dancing-plague-of-1518'],
    sources: [{ title: 'National Library of Sweden — Codex Gigas', url: 'https://www.manuscripta.se/ms/100500' }]
  },
  {
    id: 27, slug: 'the-taos-hum', category: 'Mysteries', title: 'The Taos Hum',
    hook: 'Some people in and around Taos, New Mexico report a persistent low-frequency hum. Others hear nothing.',
    description: 'A classic modern mystery where subjective perception, environmental noise and incomplete measurements overlap.', minutes: 5, curiosity: 9,
    visual: 'mystery', tags: ['sound','new mexico','perception'], status: 'UNVERIFIED',
    sections: [
      { heading: 'The report', paragraphs: ['Since the 1990s, people in the Taos area have described a low, droning sound that can be difficult to locate. Reports vary, and the experience is not universal.', 'Investigations have considered industrial machinery, roads, electrical infrastructure and the possibility that some listeners are sensitive to sounds below or near the edge of ordinary hearing.'] },
      { heading: 'The measurement problem', paragraphs: ['Mysteries involving sound are unusually difficult because “I hear it” and “there is a measurable external sound” are different claims. A strong investigation has to record the environment at the right frequencies while also accounting for attention and hearing differences.', 'The public record has not produced one agreed source that explains every report.'] },
      { heading: 'The rabbit hole', paragraphs: ['It sits in a fascinating middle ground: not every unexplained sensation is imaginary, but an unresolved sensation is not automatically evidence of a hidden machine.'] }
    ],
    interaction: { type: 'reveal', prompt: 'What remains unresolved?', reveal: 'There is no single confirmed source that explains every reported “Taos Hum” experience. The uncertainty is part of the evidence story: different listeners and environments may not share one cause.' },
    rabbitHole: ['the-taos-hum','the-wow-signal','the-bloop','dyatlov-pass-and-the-slab-avalanche'],
    related: ['the-wow-signal','the-bloop','dyatlov-pass-and-the-slab-avalanche'],
    sources: [{ title: 'Wikipedia overview (starting point; claims remain contested)', url: 'https://en.wikipedia.org/wiki/The_Hum', note: 'Use as a map of the disputed literature, not as proof of a single cause.' }]
  },
  {
    id: 28, slug: 'the-great-stink-of-london', category: 'History', title: 'The Great Stink of London',
    hook: 'In the summer of 1858, Parliament was hit by such a severe smell from the Thames that a sewer revolution followed.',
    description: 'An urban sanitation crisis shows how an absurdly physical problem can trigger major infrastructure change.', minutes: 5, curiosity: 8,
    visual: 'history', tags: ['london','sewers','public health'],
    sections: [
      { heading: 'The river as infrastructure', paragraphs: ['By the mid-nineteenth century, London had outgrown old waste-disposal systems. Sewage and refuse reached the Thames, and a hot, dry summer made the smell dramatically worse.', 'The river was not just dirty. It was tangled into the city’s water and drainage system, turning sanitation into an engineering problem.'] },
      { heading: 'Parliament could smell it', paragraphs: ['Royal Museums Greenwich records that the smell became so intense that curtains in the Houses of Parliament were treated with chloride of lime. The political system could literally smell the infrastructure failure.', 'A bill to fund major sewage works passed quickly, with Joseph Bazalgette later designing the system that became the backbone of London’s modern sewers.'] },
      { heading: 'The hidden lesson', paragraphs: ['Sometimes the turning point for public infrastructure is not a neat spreadsheet. It is the moment a problem becomes impossible for decision-makers to ignore.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'What did the Great Stink help accelerate?', options: [
      { label: 'A massive new sewer system', correct: true, feedback: 'Correct. Bazalgette’s sewer works followed the crisis.' },
      { label: 'A ban on the Thames', correct: false, feedback: 'The response was engineering, not banning the river.' },
      { label: 'The end of London', correct: false, feedback: 'London obviously survived and the sewer network transformed it.' }
    ] },
    rabbitHole: ['the-great-stink-of-london','the-great-molasses-flood','the-great-beer-flood','the-year-without-a-summer'],
    related: ['the-great-molasses-flood','the-great-beer-flood','the-year-without-a-summer'],
    sources: [{ title: 'Royal Museums Greenwich — Dickens and the Great Stink', url: 'https://www.rmg.co.uk/stories/maritime-history/library-archive/dickens-great-stink-1858' }, { title: 'London Museum — The Great Stink', url: 'https://www.londonmuseum.org.uk/collections/london-stories/great-stink-of-1858/' }]
  },
  {
    id: 29, slug: 'lincoln-kennedy-and-the-coincidence-machine', category: 'Coincidences', title: 'Lincoln, Kennedy & the Coincidence Machine',
    hook: 'The famous list of Lincoln–Kennedy coincidences looks eerie until you start checking which ones are actually true.',
    description: 'A case study in how humans turn selective facts into an uncanny pattern.', minutes: 5, curiosity: 9,
    visual: 'coincidence', tags: ['coincidence','myth','pattern'], status: 'POPULAR CLAIM',
    sections: [
      { heading: 'The list', paragraphs: ['A familiar internet list pairs facts about Abraham Lincoln and John F. Kennedy: election years, names, assassin details and other numerical similarities. Some are genuine coincidences. Several famous versions contain errors or selective wording.', 'The list itself became mainstream folklore in the years after Kennedy’s assassination.'] },
      { heading: 'The pattern problem', paragraphs: ['Martin Gardner later examined the claims and pointed out misinformation in versions of the list. The more facts you collect around two long biographies, the easier it becomes to find matches after the fact.', 'That is a classic feature of coincidence stories: the pattern is selected backward from what happened, rather than predicted in advance.'] },
      { heading: 'The bigger idea', paragraphs: ['Coincidences feel meaningful because pattern detection is one of the mind’s strengths. The same ability that helps us spot genuine structure can also turn a large pile of possibilities into an eerie-seeming story.'] }
    ],
    interaction: { type: 'true-false', prompt: 'True or false: every famous Lincoln–Kennedy coincidence in the viral lists is accurate.', options: [
      { label: 'TRUE', correct: false, feedback: 'False. Several popular versions contain misinformation or selective claims.' },
      { label: 'FALSE', correct: true, feedback: 'Correct. The list mixes genuine coincidences with errors and folklore.' }
    ] },
    rabbitHole: ['lincoln-kennedy-and-the-coincidence-machine','the-choice-you-did-not-choose','the-mere-exposure-pull','cicada-3301'],
    related: ['the-choice-you-did-not-choose','the-mere-exposure-pull','cicada-3301'],
    sources: [{ title: 'Wikipedia overview — Lincoln–Kennedy coincidences', url: 'https://en.wikipedia.org/wiki/Lincoln%E2%80%93Kennedy_coincidences_urban_legend', note: 'This story uses the page for the documented history of the list and its debunking; individual coincidence claims should be checked separately.' }]
  },
  {
    id: 30, slug: 'the-bloop', category: 'Science', title: 'The Bloop',
    hook: 'A mysterious ocean sound was once loud enough to spark sea-monster theories. NOAA eventually traced it to ice.',
    description: 'The Bloop is a perfect mystery story with a satisfying ending: the monster was a glacier cracking apart.', minutes: 4, curiosity: 9,
    visual: 'science', tags: ['ocean','sound','icequake'], status: 'FACT',
    sections: [
      { heading: 'The recording', paragraphs: ['In 1997, NOAA hydrophones detected an unusually powerful, low-frequency underwater sound in the southern Pacific. The signal could be detected across thousands of kilometres.', 'Because its acoustic profile did not immediately resemble a familiar source, the internet supplied a giant-creature hypothesis.'] },
      { heading: 'The ice answer', paragraphs: ['NOAA later matched the sound to icequakes associated with large icebergs cracking and fracturing. Similar sounds were recorded in the same region, including signals associated with large ice movements.', 'The result was not less fascinating. It was more useful: a weird signal became a tool for understanding remote cryogenic activity.'] },
      { heading: 'A satisfying ending', paragraphs: ['Good mysteries do not always end with aliens. Sometimes the answer is a physical process we underestimated because we had not yet learned its sound signature.'] }
    ],
    interaction: { type: 'multiple-choice', prompt: 'What did NOAA conclude the Bloop was consistent with?', options: [
      { label: 'An icequake / large iceberg fracture', correct: true, feedback: 'Correct. NOAA matched it to cryogenic ice activity.' },
      { label: 'A confirmed giant animal', correct: false, feedback: 'That was internet speculation, not NOAA’s conclusion.' },
      { label: 'A secret submarine', correct: false, feedback: 'NOAA’s acoustic analysis pointed toward ice.' }
    ] },
    rabbitHole: ['the-bloop','the-wow-signal','the-taos-hum','the-tunguska-event'],
    related: ['the-wow-signal','the-taos-hum','the-tunguska-event'],
    sources: [{ title: 'NOAA Ocean Service — What is the Bloop?', url: 'https://oceanservice.noaa.gov/facts/bloop.html' }, { title: 'NOAA PMEL — Icequakes (Bloop)', url: 'https://www.pmel.noaa.gov/acoustics/sounds/bloop.html' }]
  }
];

export const categories = ['All','Psychology','Human Behaviour','Mysteries','Internet','History','Science','Strange','Coincidences'] as const;
