import { ctx } from "./app.js";
import { register } from "./data.js";

let section = document.querySelector('#register');
let form = section.querySelector('form');
form.addEventListener('submit', onRegister);
section.remove();

export function showRegisterPage(ctx) {
    ctx.showSection(section);
}

async function onRegister(event) {
    event.preventDefault();

    let formData = new FormData(form);

    let email = formData.get('email').trim();
    let password = formData.get('password').trim();
    let repeatPassword = formData.get('repeatPassword').trim();

    let emailPattern = /[\w\W]{3,}/i;
    let passPattern = /[\w]{3,}/i

    if (emailPattern.test(email) && passPattern.test(password)) {
        if (password === repeatPassword) {
            try {
                await register(email, password);
                ctx.goTo('home');
            } catch (error) {

            }
        } else {
            alert('Password dose not match!');
        }
        event.target.reset();
    }
}