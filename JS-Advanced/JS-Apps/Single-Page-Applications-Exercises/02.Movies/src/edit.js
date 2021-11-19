import { showDetails } from './details.js';
import { showView } from './dom.js';

let movieData = JSON.parse(sessionStorage.getItem('movieData'));
let userData = JSON.parse(localStorage.getItem('userData'));

const section = document.querySelector('#edit-movie');
let titleElement = section.querySelector('#title');
let descriptionElement = section.querySelector('#description');
let imageUrlElement = section.querySelector('#imageUrl');

section.querySelector('.btn.btn-primary').addEventListener('click', editMovie)

section.remove();

export function showEdit() {
    showView(section);
    currentMovieEdit();
}

export async function editMovie(event) {
    event.preventDefault();

    if (titleElement.value !== '' && descriptionElement.value !== '' && imageUrlElement.value !== '') {

        fetch(`http://localhost:3030/data/movies/${movieData._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify({
                title: titleElement.value.trim(),
                description: descriptionElement.value.trim(),
                img: imageUrlElement.value.trim()
            })
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.clear();

                sessionStorage.setItem('movieData', JSON.stringify(data));
                movieData = JSON.parse(sessionStorage.getItem('movieData'));

                showDetails(movieData._id);
            })
            .catch(err => {
                alert(err);
            })
    }

}

export function currentMovieEdit() {
    titleElement.value = movieData.title;
    descriptionElement.value = movieData.description;
    imageUrlElement.value = movieData.img;
}