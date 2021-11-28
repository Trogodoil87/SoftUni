import { showCreatePage } from "./create.js";
import { showCatalogPage } from "./dashboard.js";
import { logout } from "./data.js";
import { showSection } from "./dom.js";
import { showHomePage } from "./home.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";
import { showDetailsPage } from './details.js';

export let ctx = {
    showSection,
    goTo,
    updateNav
};

showHomePage(ctx);

document.querySelector('body').addEventListener('click', onNavigate);
document.querySelector('#logoutBtn').addEventListener('click', async (event) => {
    event.preventDefault();
    await logout();
    goTo('home');
})

const links = {
    'catalogLink': 'catalog',
    'createLink': 'create',
    'loginLink': 'login',
    'registerLink': 'register',
    'homeLink': 'home',
    'btn': 'details'
};

const views = {
    'home': showHomePage,
    'catalog': showCatalogPage,
    'register': showRegisterPage,
    'login': showLoginPage,
    'create': showCreatePage,
    'details': showDetailsPage
};

function onNavigate(event) {

    let name = links[event.target.id];
    if (name) {
        event.preventDefault();
        goTo(name);
    }
}

function goTo(name, ...params) {
    const view = views[name];
    if (typeof view == 'function') {
        view(ctx, ...params);
    }
}

function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    const nav = document.querySelector('nav');

    if (userData != null) {
        nav.querySelectorAll('.user').forEach(e => e.style.display = 'block');
        nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');

    } else {
        nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
        nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
    }
}