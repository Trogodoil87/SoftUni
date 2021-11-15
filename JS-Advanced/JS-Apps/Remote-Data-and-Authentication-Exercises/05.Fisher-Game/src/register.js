let logedUser = document.querySelector('#user');
logedUser.style.display = 'none';

removeClass(document.querySelectorAll('nav a'));

let registerTab = document.querySelector('div #register');
registerTab.classList.add('active');



let registerFrom = document.querySelector('form');

registerFrom.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    fetch(`http://localhost:3030/users/register`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    })
        .then(res => res.json())
        .then(data => {
            try {
                if (data.hasOwnProperty('code')) {
                    throw data.message;
                }
                // let userData = {
                //     email: data.email,
                //     token: data.accessToken,
                //     id: data._id
                // };
                // saveToken(userData);
                window.location = 'index.html';

            } catch (error) {
                alert(error);
            }
        })
        .catch(err => {
            alert(err);
        })
});

function removeClass(menuTabs) {
    for (const menuTab of menuTabs) {
        menuTab.classList.remove('active');
    }
}

function saveToken(data) {
    localStorage.setItem('auth_token', JSON.stringify(data));
}