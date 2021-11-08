function attachEvents() {
    let url = `http://localhost:3030/jsonstore/phonebook/`;
    let liElements = [];

    let personElement = document.querySelector('#person');
    let phoneElement = document.querySelector('#phone');

    let phoneBookUlElement = document.querySelector('#phonebook');

    document.querySelector('#btnLoad').addEventListener('click', (e) => {
        liElements = [];
        removeAllChildNodes(phoneBookUlElement);
        
        onLoad();

    })

    document.querySelector('#btnCreate').addEventListener('click', (e) => {
        onCreate(personElement.value, phoneElement.value);
        personElement.value = '';
        phoneElement.value = '';
    });

    function createLiElement(person, phone) {
        let li = document.createElement('li');
        li.textContent = `${person}: ${phone}`;
        return li;
    }

    function createPhoneBookContact(person, phone, _id) {
        let button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', (e) => {
            onDelete(e.currentTarget.parentElement);
        });

        let contactLiElement = createLiElement(person, phone);
        contactLiElement.setAttribute('id', _id);
        contactLiElement.appendChild(button);
        liElements.push(contactLiElement);
    }

    function onCreate(person, phone) {
        fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    function onLoad() {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                for (const key in data) {
                    let person = data[key].person;
                    let phone = data[key].phone;
                    let _id = data[key]._id;

                    createPhoneBookContact(person, phone, _id)
                }

                for (const liElemnt of liElements) {
                    phoneBookUlElement.appendChild(liElemnt);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    function onDelete(liElemnt) {
        let _id = liElemnt.getAttribute('id');

        fetch(url + _id, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(err => {
                console.error(err);
            })
    }

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
}

attachEvents();