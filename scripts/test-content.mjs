import { stories } from '../dist/src/data/stories.js';
import { quizzes } from '../dist/src/data/quizzes.js';

const fail = (msg) => { console.error(`FAIL: ${msg}`); process.exitCode = 1; };
const slugs = new Set(stories.map(s => s.slug));
const ids = new Set(quizzes.map(q => q.id));

if (stories.length !== 30) fail(`expected 30 stories, got ${stories.length}`);
if (quizzes.length !== 10) fail(`expected 10 quizzes, got ${quizzes.length}`);
if (slugs.size !== 30) fail('story slugs are not unique');
if (ids.size !== 10) fail('quiz ids are not unique');

for (const s of stories) {
  for (const key of ['title','hook','description','slug','category','visual']) if (!s[key]) fail(`${s.slug}: missing ${key}`);
  if (!s.sections?.length) fail(`${s.slug}: no sections`);
  if (!s.interaction?.type) fail(`${s.slug}: no interaction`);
  if (!s.sources?.length) fail(`${s.slug}: no sources`);
  for (const src of s.sources) if (!/^https?:\/\//.test(src.url)) fail(`${s.slug}: invalid source URL ${src.url}`);
  for (const ref of [...s.rabbitHole, ...s.related]) if (!slugs.has(ref)) fail(`${s.slug}: broken story reference ${ref}`);
}
for (const q of quizzes) {
  if (!q.questions?.length) fail(`${q.id}: no questions`);
  for (const [i, item] of q.questions.entries()) {
    if (!item.options?.length || item.answer < 0 || item.answer >= item.options.length) fail(`${q.id}: invalid answer at question ${i+1}`);
    if (!item.explanation) fail(`${q.id}: missing explanation at question ${i+1}`);
  }
  if (!q.result?.length) fail(`${q.id}: no result profiles`);
}
if (!process.exitCode) console.log(`PASS content integrity: ${stories.length} stories, ${quizzes.length} quizzes, references and source URLs structurally valid.`);
