export function navigate(path) {
    history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
export function getRoute() {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length === 0)
        return { name: 'home', params: {} };
    if (parts[0] === 'vault')
        return { name: 'vault', params: {} };
    if (parts[0] === 'story' && parts[1])
        return { name: 'story', params: { slug: decodeURIComponent(parts.slice(1).join('/')) } };
    if (parts[0] === 'quizzes')
        return { name: 'quizzes', params: {} };
    if (parts[0] === 'quiz' && parts[1])
        return { name: 'quiz', params: { id: decodeURIComponent(parts[1]) } };
    if (parts[0] === 'saved')
        return { name: 'saved', params: {} };
    if (parts[0] === 'rabbit-hole' && parts[1])
        return { name: 'rabbit', params: { id: decodeURIComponent(parts[1]) } };
    return { name: '404', params: {} };
}
export function link(path, label, className = '') {
    return `<a class="${className}" href="${path}">${label}</a>`;
}
