const KEYS = {
    saved: 'cv:saved',
    explored: 'cv:explored',
    quizzes: 'cv:quizzes',
    rabbit: 'cv:rabbit'
};
function readSet(key) {
    try {
        const raw = localStorage.getItem(key);
        return new Set(raw ? JSON.parse(raw) : []);
    }
    catch {
        return new Set();
    }
}
function writeSet(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify([...value]));
    }
    catch { /* storage may be unavailable */ }
}
export function getSaved() { return readSet(KEYS.saved); }
export function toggleSaved(slug) {
    const set = readSet(KEYS.saved);
    if (set.has(slug))
        set.delete(slug);
    else
        set.add(slug);
    writeSet(KEYS.saved, set);
    return set.has(slug);
}
export function markExplored(slug) {
    const set = readSet(KEYS.explored);
    set.add(slug);
    writeSet(KEYS.explored, set);
}
export function markQuizCompleted(id) {
    const set = readSet(KEYS.quizzes);
    set.add(id);
    writeSet(KEYS.quizzes, set);
}
export function markRabbitDiscovered(id) {
    const set = readSet(KEYS.rabbit);
    set.add(id);
    writeSet(KEYS.rabbit, set);
}
export function getProgress() {
    const explored = readSet(KEYS.explored);
    const quizzes = readSet(KEYS.quizzes);
    const rabbit = readSet(KEYS.rabbit);
    return { explored, quizzes, rabbit };
}
