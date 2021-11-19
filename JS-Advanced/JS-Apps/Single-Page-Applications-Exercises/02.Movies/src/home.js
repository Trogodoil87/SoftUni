import { showCreate } from './create.js';
import { showDetails } from './details.js';
import { createDom, showView } from './dom.js';

const section = document.querySelector('#home-page');
const catalog = section.querySelector('.card-deck.d-flex.justify-content-center');
section.querySelector('#createLink').addEventListener('click', (e) => {
    let userData = JSON.parse(localStorage.getItem('userData'));
    e.preventDefault();
    if (userData !== null) {
        showCreate();
    } else {
        alert('Only loged in users can add a movie!');
    }
});
catalog.addEventListener('click', e => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem('userData'));

    if (userData != null) {
        if (e.target.tagName === 'BUTTON') {
            let id = e.target.dataset.id;
            showDetails(id);
        }
    }

});


section.remove();

export function showHome() {
    showView(section);
    getMovies();
}

export async function getMovies() {
    fetch(`http://localhost:3030/data/movies`)
        .then(res => res.json())
        .then(data => {
            catalog.replaceChildren(...data.map(createMovieCard));
        })
        .catch(err => {
            alert(err);
        })
}

function createMovieCard(movie) {
    let element = createDom('div', { className: 'card mb-4' });
    element.innerHTML = `
    <img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
<div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
</div>
<div class="card-footer">
    <a href="#/details/6lOxMFSMkML09wux6sAF">
        <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
    </a>
</div>
    `
    return element;
}