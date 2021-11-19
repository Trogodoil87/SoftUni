
import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showRegister } from './register.js';


let views = {
    'homeLink': showHome,
    'loginLink': showLogin,
    'registerLink': showRegister
}


updateNav();
showHome();

document.querySelector('#logoutBtn').addEventListener('click', onLogout);
document.querySelector('nav').addEventListener('click', (e) => {
    let view = views[e.target.id];
    if (typeof view == 'function') {
        e.preventDefault();
        view();
    }
});



export function updateNav() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData !== null) {
        document.querySelector('#userLogin').textContent = `Welcome, ${userData.email}`;
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        document.querySelectorAll('.user').forEach(e => e.style.display = 'block');
    } else {
        document.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
        document.querySelectorAll('.user').forEach(e => e.style.display = 'none');
    }
}



function onLogout(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    let { token } = JSON.parse(localStorage.getItem('userData'));

    fetch(`http://localhost:3030/users/logout`, {
        headers: {
            'X-Authorization': token
        }
    })
        .then(res => {
            if (res.ok == true) {
                localStorage.clear();
                updateNav();
                showHome();
            }
        })
}


