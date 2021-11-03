function lockedProfile() {
    let mainElement = document.querySelector('#main');
    document.querySelector('button').addEventListener('click', (e) => {
        eventHandler(e);
    })
    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            for (const key in data) {
                mainElement.appendChild(createNewProfile(data[key]));
            }
        })
        .catch(() => {
            throw Error('error');
        })

    function createNewProfile(object) {
        let div = document.createElement('div');
        div.classList.add('profile');

        let img = document.createElement('img');
        img.setAttribute('src', './iconProfile2.png');
        img.classList.add('userIcon');
        div.appendChild(img);

        div.appendChild(createNewLabel('Lock '));
        div.appendChild(createNewInput('radio', 'user1Locked', 'lock', 'checked'));
        div.appendChild(createNewLabel(' Unlock '));
        div.appendChild(createNewInput('radio', 'user1Locked', 'unlock'));
        let br = document.createElement('br');
        let hr1 = document.createElement('hr');
        div.appendChild(br);
        div.appendChild(hr1);
        div.appendChild(createNewLabel('Username '));
        div.appendChild(createNewInput('text', 'user1Username', object.username, '', 'redadonly'));

        let idDivElement = document.createElement('div');
        idDivElement.setAttribute('class', 'hiddenInfo');
        let hr2 = document.createElement('hr');
        idDivElement.appendChild(hr2);
        idDivElement.appendChild(createNewLabel('Email: '));
        idDivElement.appendChild(createNewInput('email', 'user1Email', object.email, '', 'readonly'));
        idDivElement.appendChild(createNewLabel('Age: '));
        idDivElement.appendChild(createNewInput('email', 'user1Age', object.age, '', 'readonly'));

        let button = document.createElement('button');
        button.textContent = 'Show more';
        button.addEventListener('click', (e) => {
            eventHandler(e);
        })

        div.appendChild(idDivElement);
        div.appendChild(button);

        return div;
    }

    function createNewLabel(content) {
        let label = document.createElement('label');
        label.textContent = content;
        return label;
    }

    function createNewInput(type, name, value, checked, disabled) {
        let input = document.createElement('input');
        input.setAttribute('type', type);
        input.setAttribute('name', name);
        input.setAttribute('value', value);

        if (checked) {
            input.setAttribute('checked', '')
        } else if (disabled) {
            input.setAttribute('disabled', 'readonly');
        }

        return input;
    }

    function eventHandler(e) {
        let inputElement = e.currentTarget.parentElement.querySelector('input');

        let hiddenInfoElement = e.currentTarget.parentElement.querySelector('div div');

        if (inputElement.checked === false) {
            if (e.currentTarget.textContent === 'Show more') {
                e.currentTarget.textContent = 'Hide it';
                hiddenInfoElement.classList.remove('hiddenInfo');
            } else {
                e.currentTarget.textContent = 'Show more';
                hiddenInfoElement.classList.add('hiddenInfo');
            }

        }
    }

}