let userData = JSON.parse(localStorage.getItem('auth_token'));
console.log(userData)
window.addEventListener('DOMContentLoaded', () => {
    if (userData !== null) {
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('span').textContent = userData.email;
        document.querySelector('.add').disabled = false;
    } else {
        document.querySelector('#user').style.display = 'none';
    }

    document.querySelector('.load').addEventListener('click', loadData);
    document.querySelector('#logout').addEventListener('click', onLogout);
    document.querySelector('#addForm').addEventListener('submit', onCreateSubmit);
});

function onCreateSubmit(event) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    for (const key in data) {
        if (data[key] === '') {
            return;
        }
    }

    try {
        fetch(`http://localhost:3030/data/catches`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': userData.token
            },
            body: JSON.stringify(data)
        })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                alert(err);
            })

    } catch (error) {
        alert(error);
    }
}

function onLogout() {
    localStorage.clear();
    window.location = 'index.html';
}

function loadData() {
    // logic if add values are empty ->....
    fetch('http://localhost:3030/data/catches')
        .then(res => res.json())
        .then(data => {
            document.querySelector('#catches').replaceChildren(...data.map(createPreview))
        })
        .catch(err => {
            alert(err);
        })
}


function createPreview(data) {
    let isOwner = (userData && data._ownerId === userData.id);

    let div = document.createElement('div');
    div.classList.add('catch');

    div.appendChild(createLabel('Angler'));
    div.appendChild(createInput('text', 'angler', data.angler, !isOwner ? true : false));

    div.appendChild(createLabel('Weight'));
    div.appendChild(createInput('text', 'Weight', data.weight, !isOwner ? true : false));

    div.appendChild(createLabel('Species'));
    div.appendChild(createInput('text', 'Species', data.species, !isOwner ? true : false));

    div.appendChild(createLabel('Location'));
    div.appendChild(createInput('text', 'Location', data.location, !isOwner ? true : false));

    div.appendChild(createLabel('Bait'));
    div.appendChild(createInput('text', 'Bait', data.bait, !isOwner ? true : false));

    div.appendChild(createLabel('Capture Time'));
    div.appendChild(createInput('text', 'captureTime', data.captureTime, !isOwner ? true : false));

    div.appendChild(createButton('update', data._id, !isOwner ? true : false, 'Update'));
    div.appendChild(createButton('delete', data._id, !isOwner ? true : false, 'Delete'));

    return div;
}

function createLabel(content) {
    let label = document.createElement('label');
    label.textContent = content;
    return label;
}

function createInput(type, _class, value, condition) {
    let input = document.createElement('input');
    input.setAttribute('type', type)
    input.classList.add(_class);
    input.setAttribute('value', value)
    input.disabled = condition;
    return input;
}

function createButton(_class, _id, condition, content) {
    let button = document.createElement('button');
    button.textContent = content;
    button.classList.add(_class);
    button.setAttribute('id', _id);
    button.disabled = condition;
    button.addEventListener('click', onClick)
    return button;
}

function onClick(event) {
    switch (event.currentTarget.textContent) {
        case 'Update':
            onUpdate(event);
            break;
        case 'Delete':
            onDelete(event);
            break;
        default:
            break;
    }
}

function onDelete(event) {
    let currentCatch = event.currentTarget.parentElement;

    let id = currentCatch.querySelector('button').getAttribute('id');

    fetch(` http://localhost:3030/data/catches/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': userData.token
        }
    })
        .then(res => res.json())
        .then(data => {
        })
        .catch(err => {
            alert(err)
        })
}

function onUpdate(event) {
    let currentCatch = event.currentTarget.parentElement;

    let id = currentCatch.querySelector('button').getAttribute('id');
    let InputElements = currentCatch.querySelectorAll('input');

    let angler = InputElements[0].value;
    let weight = InputElements[1].value;
    let species = InputElements[2].value;
    let location = InputElements[3].value;
    let bait = InputElements[4].value;
    let captureTime = InputElements[5].value;

    // to check fields if they are empty
    // if empty - logic->...
    //else - logic ->...
    fetch(` http://localhost:3030/data/catches/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        })
    })
        .then(res => res.json())
        .then(data => {
        })
        .catch(err => {
            alert(err)
        })
}
