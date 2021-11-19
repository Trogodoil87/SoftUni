import { showView } from './dom.js';
import { showHome } from './home.js';

const section = document.querySelector('#add-movie');
section.addEventListener('submit', createMovie)
section.remove();

export function showCreate() {
    showView(section);
}


async function createMovie(event) {
    event.preventDefault();

    let formData = new FormData(section.querySelector('form'));
    let userData = JSON.parse(localStorage.getItem('userData'));

    let title = formData.get('title').trim();
    let description = formData.get('description').trim();
    let img = formData.get('imageUrl').trim();

    if (title !== '' && description !== '' && img !== '') {
       fetch(`http://localhost:3030/data/movies`, {
           method: 'POST',
           headers: {
               'Content-type': 'application/json',
               'X-Authorization': userData.token
           },
           body: JSON.stringify({
               title,
               description,
               img
           })
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