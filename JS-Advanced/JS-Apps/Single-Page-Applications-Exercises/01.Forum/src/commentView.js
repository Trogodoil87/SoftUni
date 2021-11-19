import { changePage } from './changePage.js';

document.querySelector('nav a').addEventListener('click', changePage('home'));

export function commentView(event) {
    event.preventDefault();
    document.querySelector('.container').style.display = 'none';
   
}