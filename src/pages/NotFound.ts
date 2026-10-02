import { navigate } from '../lib/router';
export function renderNotFound(){return `<main class="page"><div class="container empty section"><span class="kicker">404</span><h2 class="display">This doorway doesn’t exist.</h2><p class="muted">The Vault has plenty of real ones.</p><a class="btn btn-primary" href="/vault">RETURN TO VAULT →</a></div></main>`;}
export function bindNotFound(){document.querySelector('a[href="/vault"]')?.addEventListener('click',e=>{e.preventDefault();navigate('/vault');});}
