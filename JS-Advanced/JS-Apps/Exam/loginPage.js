// import { login } from "./api.js";
// import { updateNav } from "./app.js";
// import { showHomePage } from "./home.js";

// let section = document.querySelector('#loginPage');
// section.remove();

// export function showLoginPage() {
//     const main = document.querySelector('#main-content');
//     main.replaceChildren(section);
// }

// section.querySelector('form').addEventListener('submit', onLogin);

// async function onLogin(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);

//     let email = formData.get('email').trim();
//     let password = formData.get('password').trim();

//     if (email !== '' && password !== '') {
//         try {
//             const res = await login(email, password);
//             updateNav();
//             showHomePage();
//         } catch (error) {

//         }
//     } else {
//         alert('All field must be filled');
//     }

// }


