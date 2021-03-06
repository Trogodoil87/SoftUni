import { delteById, getById } from "./data.js";
import { e } from "./dom.js";

let section = document.querySelector('#detailsPage');
section.remove();

let ctx = null;
let id = null;

export function showDetailsPage(ctxTarget, idTarget) {
    id = idTarget;
    ctx = ctxTarget;
    ctx.showSection(section);
    loadIdeaDetail();
}


async function loadIdeaDetail() {

    const idea = await getById(id);


    const fragment = document.createDocumentFragment();
    fragment.appendChild(createIdeaDetail(idea));

    section.replaceChildren(fragment);
}

function createIdeaDetail(idea) {

    const fragment = document.createDocumentFragment();
    fragment.appendChild(e('img', { className: 'det-img', src: idea.img }));
    fragment.appendChild(e('div', { className: 'desc' },
        e('h2', { className: 'display-5' }, idea.title),
        e('p', { className: 'infoType' }, 'Description:'),
        e('p', { className: 'idea-description' }, idea.description))
    );

    let userData = JSON.parse(localStorage.getItem('userData'))
    if (userData !== null && userData.id === idea._ownerId) {
        fragment.appendChild(e('div', { className: 'text-center' },
            e('a', { className: 'btn detb', href: '', onClick: onDelete }, 'Delete'))
        );
    }

    async function onDelete(event) {
        event.preventDefault();
        const confirmed = confirm(`Are you sure you want to delete this idea?`);
        if (confirmed) {
            await delteById(id);
            ctx.goTo('catalog');
        }
    }
    return fragment;
}



