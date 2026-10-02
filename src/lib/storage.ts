const KEYS = {
  saved: 'cv:saved',
  explored: 'cv:explored',
  quizzes: 'cv:quizzes',
  rabbit: 'cv:rabbit'
} as const;

function readSet(key: string): Set<string> {
  try {
    const raw = localStorage.getItem(key);
    return new Set<string>(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}
function writeSet(key: string, value: Set<string>) {
  try { localStorage.setItem(key, JSON.stringify([...value])); } catch { /* storage may be unavailable */ }
}

export function getSaved(): Set<string> { return readSet(KEYS.saved); }
export function toggleSaved(slug: string): boolean {
  const set = readSet(KEYS.saved);
  if (set.has(slug)) set.delete(slug); else set.add(slug);
  writeSet(KEYS.saved, set);
  return set.has(slug);
}
export function markExplored(slug: string) {
  const set = readSet(KEYS.explored); set.add(slug); writeSet(KEYS.explored, set);
}
export function markQuizCompleted(id: string) {
  const set = readSet(KEYS.quizzes); set.add(id); writeSet(KEYS.quizzes, set);
}
export function markRabbitDiscovered(id: string) {
  const set = readSet(KEYS.rabbit); set.add(id); writeSet(KEYS.rabbit, set);
}
export function getProgress() {
  const explored = readSet(KEYS.explored);
  const quizzes = readSet(KEYS.quizzes);
  const rabbit = readSet(KEYS.rabbit);
  return { explored, quizzes, rabbit };
}
