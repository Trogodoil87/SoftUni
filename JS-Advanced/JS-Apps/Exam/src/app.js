import { homePage } from "./views/home.js";
import { page, render } from './lib.js';
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { logout } from "./api/api.js";
import { getUserData } from "./util.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { searchPage } from "./views/search.js";


const root = document.querySelector('#main-content');
document.querySelector('#btnLogout').addEventListener('click', onLogout);

page(decorateContext);
page('/home', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/catalog', catalogPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/search', searchPage)
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
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.user').forEach(el => el.style.display = 'inline');
    } else {
        document.querySelectorAll('.guest').forEach(el => el.style.display = 'inline');
        document.querySelectorAll('.user').forEach(el => el.style.display = 'none');
    }
}

async function onLogout() {
    await logout();
    updateUserNav();
    page.redirect('/');
}
