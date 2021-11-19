import { createDom, showView } from './dom.js';
import { currentMovieEdit, showEdit } from './edit.js';
import { showHome } from './home.js';

const section = document.querySelector('#movie-example');
section.remove();


export function showDetails(movieId) {
    showView(section);
    getMovie(movieId);
}


export async function getMovie(id) {

    let requsts = [
        fetch(`http://localhost:3030/data/movies/` + id),
        fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`)
    ]

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData != null) {
        requsts.push(fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userData.id}%22`));
    }

    const [movieRes, likesRes, hasLikedRes] = await Promise.all(requsts);
    const [movieData, likes, hasLiked] = await Promise.all([
        movieRes.json(),
        likesRes.json(),
        hasLikedRes && hasLikedRes.json()
    ]);

    sessionStorage.setItem('movieData', JSON.stringify(movieData));

    section.replaceChildren(createDetails(movieData, likes, hasLiked));
}



function createDetails(movie, likes, hasLiked) {
    let controls = createDom('div', { className: 'col-md-4 text-center' },
        createDom('h3', { className: 'my-3' }, `Movie Description`),
        createDom('p', {}, movie.description),
    );

    let userData = JSON.parse(localStorage.getItem('userData'));
    if (userData != null) {
        if (userData.id === movie._ownerId) {
            controls.appendChild(createDom('a', { className: 'btn btn-danger', href: '#', id: 'deleteBtn' }, 'Delete'));
            controls.appendChild(createDom('a', { className: 'btn btn-warning', href: '#', id: 'editBtn' }, 'Edit'));
        } else {
            if (hasLiked.length > 0) {
                controls.appendChild(createDom('a', { className: 'btn btn-primary', href: '#', id: 'unLikeBtn' }, 'Unlike'));
            } else {
                controls.appendChild(createDom('a', { className: 'btn btn-primary', href: '#', id: 'likeBtn' }, 'Like'));
            }
        }
    }

    controls.appendChild(createDom('span', { className: 'enrolled-span' }, `Liked ${likes}`));

    let element = createDom('div', { className: 'container' },
        createDom('div', { className: 'row bg-light text-dark' },
            createDom('h1', {}, `Movie title: ${movie.title}`),
            createDom('div', { className: 'col-md-8' },
                createDom('img', { className: 'img-thumbnail', src: movie.img, alt: 'Movie' })
            ),
            controls
        )
    );

    let actions = {
        'likeBtn': onLike,
        'deleteBtn': onDelete,
        'editBtn': onEdit,
        'unLikeBtn': onUnLike
    };

    element.addEventListener('click', e => {
        e.preventDefault();
        let action = actions[e.target.id];
        if (typeof action === 'function') {
            action(e);
        }
    });

    return element;




    function onEdit(event) {
        event.preventDefault();

        showEdit();
    }

    async function onLike(event) {
        event.preventDefault();
        await fetch(`http://localhost:3030/data/likes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                movieId: movie._id
            })
        });

        showDetails(movie._id);

    }

    async function onUnLike(event) {
        event.preventDefault();
        await fetch(`http://localhost:3030/data/likes/${hasLiked[0]._id}`, {
            method: 'delete',
            headers: {
                'X-Authorization': userData.token
            }
        });

        showDetails(movie._id);

    }



    async function onDelete(event) {
        event.preventDefault();

        fetch(`http://localhost:3030/data/movies/${movie._id}`, {
            method: 'Delete',
            headers: {
                'X-Authorization': userData.token
            }
        })
            .then(res => res.json())
            .then(data => {
                showHome();
            })
            .catch(err => {
                alert(err);
            })
    }
}



/*
<div class="container">
    <div class="row bg-light text-dark">
        <h1>Movie title: Black Widow</h1>

        <div class="col-md-8">
            <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                alt="Movie">
        </div>

        <div class="col-md-4 text-center">
            <h3 class="my-3 ">Movie Description</h3>
            <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous
                conspiracy
                with ties to her past arises. Comes on the screens 2020.</p>
            <a class="btn btn-danger" href="#">Delete</a>
            <a class="btn btn-warning" href="#">Edit</a>
            <a class="btn btn-primary" href="#">Like</a>
            <span class="enrolled-span">Liked 1</span>
        </div>
    </div>
</div>
*/