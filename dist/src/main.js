import { getRoute } from './lib/router';
import { renderNav, bindNav } from './components/Nav';
import { renderFooter } from './components/Footer';
import { renderHome, bindHome } from './pages/Home';
import { renderVault, bindVault } from './pages/Vault';
import { renderStory, bindStory } from './pages/Story';
import { renderQuizzes, bindQuizzes } from './pages/Quizzes';
import { renderQuiz, bindQuiz } from './pages/Quiz';
import { renderSaved, bindSaved } from './pages/Saved';
import { renderRabbit, bindRabbit } from './pages/RabbitHole';
import { renderNotFound, bindNotFound } from './pages/NotFound';
import { stories } from './data/stories';
function renderApp() {
    const route = getRoute();
    const app = document.getElementById('app');
    let main = '';
    let active = route.name;
    if (route.name === 'home') {
        main = renderHome();
    }
    if (route.name === 'vault') {
        main = renderVault();
    }
    if (route.name === 'story') {
        main = renderStory(route.params.slug);
    }
    if (route.name === 'quizzes') {
        main = renderQuizzes();
    }
    if (route.name === 'quiz') {
        main = renderQuiz(route.params.id);
    }
    if (route.name === 'saved') {
        main = renderSaved();
    }
    if (route.name === 'rabbit') {
        main = renderRabbit(route.params.id);
        active = 'vault';
    }
    if (route.name === '404') {
        main = renderNotFound();
        active = 'vault';
    }
    app.innerHTML = `<div class="site-shell">${renderNav(active)}${main}${renderFooter()}</div>`;
    bindNav();
    if (route.name === 'home')
        bindHome();
    if (route.name === 'vault')
        bindVault();
    if (route.name === 'story')
        bindStory(stories.find(s => s.slug === route.params.slug));
    if (route.name === 'quizzes')
        bindQuizzes();
    if (route.name === 'quiz')
        bindQuiz(route.params.id);
    if (route.name === 'saved')
        bindSaved();
    if (route.name === 'rabbit')
        bindRabbit(route.params.id);
    if (route.name === '404')
        bindNotFound();
}
window.addEventListener('popstate', renderApp);
window.addEventListener('cv:storage-change', () => {
    if (getRoute().name === 'home' || getRoute().name === 'saved' || getRoute().name === 'vault' || getRoute().name === 'quizzes')
        renderApp();
});
renderApp();
