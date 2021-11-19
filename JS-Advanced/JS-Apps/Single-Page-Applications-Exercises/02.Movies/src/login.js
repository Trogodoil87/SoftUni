import { updateNav } from './app.js';
import { showView } from './dom.js';
import { showHome } from './home.js';

const section = document.querySelector('#form-login');
const form = section.querySelector('form');
form.addEventListener('submit', onLogin);
section.remove();

export function showLogin() {
    showView(section);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email');
    const password = formData.get('password');

    fetch(`http://localhost:3030/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => {
            if (res.ok == false) {
                throw Error(res.message)
            } else {
                return res.json();
            }
        })
        .then(data => {
            localStorage.setItem('userData', JSON.stringify({
                email: data.email,
                id: data._id,
                token: data.accessToken
            }));
            form.reset();

            updateNav();
            showHome();
        })
        .catch(err => {
            alert(err);
        })
}