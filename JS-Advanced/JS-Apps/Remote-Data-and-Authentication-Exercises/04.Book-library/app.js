let titleElement = document.querySelector('input[name="title"]');
let authorElement = document.querySelector('input[name="author"]');

let formElement = document.querySelector('form')
let url = `http://localhost:3030/jsonstore/collections/books`;
console.log(formElement)
let tbodyElement = document.querySelector('tbody');
let h3Element = document.querySelector('form h3');

let bookElements = [];
let _currentId = '';

document.querySelector('#loadBooks').addEventListener('click', (e) => {
    _initial();
    loadAllBooks();
});

let submitBtn = document.querySelector('form button');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (submitBtn.textContent == 'Save') {
        editBook(_currentId);
        _currentId = '';
    } else {
        createBook(titleElement, authorElement);
    }
});

function loadAllBooks() {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            bookElements = [];

            for (const key in data) {
                bookElements.push(data[key]);
            }

            removeAllChildNodes(tbodyElement);

            for (const bookElement of bookElements) {
                let tr = createMovieTr(bookElement);
                tbodyElement.appendChild(tr);
            }

        })
        .catch(err => {
            console.error(err);
        })
}

function createBook(title, author) {


    if (title.value !== '' && author.value !== '') {
        fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: author.value.trim(),
                title: title.value.trim()
            })
        })
            .then(res => res.json())
            .then((data) => {
                title.value = '';
                author.value = '';
            })
            .catch(err => {
                console.log(err);
            })
    }
}

function createMovieTr(data) {
    let tr = document.createElement('tr');
    tr.setAttribute('id', data._id);
    tr.appendChild(createTdElement(data.title));
    tr.appendChild(createTdElement(data.author));

    let td = document.createElement('td');
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', (e) => {
        _currentId = e.currentTarget.parentElement.parentElement.getAttribute('id');

        formElement.childNodes[1].textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
    });

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
        deleteBook(e);
    });

    td.appendChild(editButton);
    td.appendChild(deleteButton);

    tr.appendChild(td);

    return tr;
}

function createTdElement(content) {
    let td = document.createElement('td');
    td.textContent = content;
    return td;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function deleteBook(e) {
    let id = e.currentTarget.parentElement.parentElement.getAttribute('id');
    fetch(`${url}/${id}`, {
        method: 'delete'
    })
        .then(res => res.json())
        .then(data => {
        })
        .catch(err => {
            console.error(err);
        })
}

function editBook(id) {

    if (authorElement.value !== '' && titleElement.value !== '') {

        fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                author: authorElement.value,
                title: titleElement.value
            })
        })
            .then(res => res.json())
            .then(data => {
                fetch(`${url}/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        _initial();
                    })
                    .catch(err => {
                        console.log(err);
                    })


            })
            .catch(err => {
                console.log(err);
            });
    } else {
        _initial();
    }
}

function _initial() {
    if (submitBtn.textContent === 'Save') {
        submitBtn.textContent = 'Submit';
        h3Element.textContent = 'FORM';
    }

    authorElement.value = '';
    titleElement.value = '';
}
