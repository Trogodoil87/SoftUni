import { logout } from './api/api.js';
import { render, page } from './lib.js';
import { clearUserData, getUserData } from './util.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { profilePage } from './views/profile.js';
import { registerPage } from './views/register.js';

const root = document.querySelector('main');
document.querySelector('.btnLogout').addEventListener('click', onLogout);

page(decorateContext);
page('/', homePage);
page('/home', homePage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/profile', profilePage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

updateUserNav();
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;

    next();
}

function updateUserNav() {
    const userData = getUserData();

    if (userData) {
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.user').forEach(e => e.style.display = 'inline-block')
    } else {
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'inline-block')
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/home');
}