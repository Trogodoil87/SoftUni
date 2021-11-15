let logedUser = document.querySelector('#user');
logedUser.style.display = 'none';

removeClass(document.querySelectorAll('nav a'));

let loginTab = document.querySelector('div #login');
loginTab.classList.add('active');

let loginFrom = document.querySelector('form');

loginFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(e.currentTarget);

    fetch(`http://localhost:3030/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            password: data.get('password'),
            email: data.get('email')
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.message === 'Login or password don\'t match') {
                alert(data.message);
            } else {
             

                let userData = {
                    email: data.email,
                    token: data.accessToken,
                    id: data._id
                };

                saveToken(userData);
                window.location = 'index.html';
            }

        })
        .catch(err => {
            console.log(err);
        })
});

function saveToken(data) {
    localStorage.setItem('auth_token', JSON.stringify(data));
}

function removeClass(menuTabs) {
    for (const menuTab of menuTabs) {
        menuTab.classList.remove('active');
    }
}