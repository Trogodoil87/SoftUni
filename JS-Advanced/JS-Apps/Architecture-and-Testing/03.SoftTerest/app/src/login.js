import { login } from "./api.js";
import { ctx } from "./app.js";


const section = document.querySelector('#login');
section.remove();
let form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function showLoginPage(ctx) {
    ctx.showSection(section);
}



async function onSubmit(event) {
    event.preventDefault();

    let formData = new FormData(form);

    let email = formData.get('email').trim();
    let password = formData.get('password').trim();

    if (email !== '' && password !== '') {
        await login(email, password);

        ctx.goTo('home');
        event.target.reset();
    }
}