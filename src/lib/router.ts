export function navigate(path: string) {
  history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function getRoute() {
  const parts = location.pathname.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'home' as const, params: {} };
  if (parts[0] === 'vault') return { name: 'vault' as const, params: {} };
  if (parts[0] === 'story' && parts[1]) return { name: 'story' as const, params: { slug: decodeURIComponent(parts.slice(1).join('/')) } };
  if (parts[0] === 'quizzes') return { name: 'quizzes' as const, params: {} };
  if (parts[0] === 'quiz' && parts[1]) return { name: 'quiz' as const, params: { id: decodeURIComponent(parts[1]) } };
  if (parts[0] === 'saved') return { name: 'saved' as const, params: {} };
  if (parts[0] === 'rabbit-hole' && parts[1]) return { name: 'rabbit' as const, params: { id: decodeURIComponent(parts[1]) } };
  return { name: '404' as const, params: {} };
}

export function link(path: string, label: string, className = '') {
  return `<a class="${className}" href="${path}">${label}</a>`;
}
