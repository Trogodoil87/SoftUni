import * as data from "./data.js";
import { e } from "./dom.js"


const section = document.querySelector('#dashboard-holder');
section.remove();
section.addEventListener('click', onDetails);

let ctx = null;

export function showCatalogPage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section)
    loadIdeas();
    //<h1>No ideas yet! Be the first one :)</h1>
}

async function loadIdeas() {
    const ideas = await data.getAllIdeas();
        if (ideas.length == 0) {
        section.replaceChildren(e('h1', {}, `No ideas yet! Be the first one :)`));
    } else {
        const fragment = document.createDocumentFragment();

        ideas.map(createIdea).forEach(i => fragment.appendChild(i));

        section.replaceChildren(fragment);
    }

}

export function createIdea(idea) {
    let element =
        e('div', { className: 'card overflow-hidden current-card details', style: 'width: 20rem; height: 18rem;' },
            e('div', { className: 'card-body' },
                e('p', { className: 'card-text' }, idea.title)),
            e('img', { className: 'card-image', src: idea.img, alt: 'Card image cap' }),
            e('a', { className: 'btn', href: '', 'id': idea._id }, 'Details'));
    return element;
}

function onDetails(event) {
    event.preventDefault();

    if (event.target.tagName === 'A') {
        event.preventDefault();
        let id = event.target.id;

        ctx.goTo('details', id);
    }
}