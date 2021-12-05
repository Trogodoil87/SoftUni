const root = document.querySelector('#main-content');
import { showCatalogPage } from './catalog.js';
import { showCreatePage } from './create.js';
import { showDetailsPage } from './details.js';
import { showEditPage } from './edit.js';
import { showHomePage } from './home.js';
import { page, render } from './lib.js';
import { showLoginPage } from './login.js';
import { showRegisterPage } from './register.js';




page(decorateContext);
page('/home', showHomePage)
page('/users/login', showLoginPage)
page('/users/register', showRegisterPage)
page('/users/logout', showHomePage)
page('/data/albums?sortBy=_createdOn%20desc&distinct=name ', showCatalogPage)
page('/data/albums', showCreatePage)
page('/data/albums/:id', showDetailsPage)
page('/data/albums/:id', showEditPage)
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);

    next();
}


