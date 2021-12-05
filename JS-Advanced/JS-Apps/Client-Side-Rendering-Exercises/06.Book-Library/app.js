import { render, html } from './node_modules/lit-html/lit-html.js';
const url = 'http://localhost:3030/jsonstore/collections/books/';

const pageTemplate = html`
<body>
    <button @click="${onLoad}" id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <form @submit="${addBook}" style="display: block" class="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>

    <form @submit="${editBook}" style="display: none" class="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Save">
    </form>
</body>
`
const bookTemplate = (books) => html`
${books.length > 0 ? books.map(book => html`<tr>
    <td class="title">${book.title}</td>
    <td class="author">${book.author}</td>
    <td>
        <button id="${book.id}" @click="${onEdit}">Edit</button>
        <button class="${book.id}" @click="${onDelete}">Delete</button>
    </td>
</tr>
`) : confirm('No books do you wish to add some?')}
`
initialStart();

function initialStart() {
    const root = document.querySelector('html');

    render(pageTemplate, root);
}

function update(data) {
    const root = document.querySelector('tbody');

    render(bookTemplate(data), root);
}

async function onEdit(e) {
    e.preventDefault();

    document.querySelector('.add-form').style.display = 'none';
    const editForm = document.querySelector('.edit-form');
    editForm.style.display = 'block';

    const id = e.target.id;

    try {
        const book = await getBook(id);
        editForm.querySelector('input[name="title"]').value = book.title;
        editForm.querySelector('input[name="author"]').value = book.author;
        editForm.querySelector('input[type="submit"]').id = id;
    } catch (error) {
        alert(error)
    }
}

async function getBook(id) {
    const res = await fetch(url + id);
    if (res.ok) {
        const data = await res.json();
        return data;
    }
    if (res.status == 204) {

        throw new Error('No resuorce found');
    }
}

async function onDelete(e) {
    e.preventDefault();
    const id = e.target.className;

    let result = confirm('Are you sure you want to delete book?');

    if (result) {
        const res = await fetch(url + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
    }
}

async function onLoad(e) {
    e.preventDefault();
    const res = await fetch(url);
    if (res.ok) {
        const data = await res.json();
        const arr = [];
        for (const key in data) {
            const bookData = {
                id: key,
                author: data[key].author,
                title: data[key].title
            }
            arr.push(bookData);
        }
        update(arr);
    } else {
        alert('No books to load!');
    }
}

async function editBook(e) {
    e.preventDefault();
    const id = e.currentTarget.querySelector('input[type="submit"]').id;

    const formData = new FormData(e.target);
    const title = formData.get('title').trim();
    const author = formData.get('author').trim();
    if (title !== '' && author !== '') {
        const res = await fetch(url + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        });
        e.target.reset();
        document.querySelector('.add-form').style.display = 'block';
        e.target.style.display = 'none';
    } else {
        alert(`Title and Author cannot be empty!`);
    }
}

async function addBook(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const title = formData.get('title').trim();
    const author = formData.get('author').trim();

    if (title !== '' && author !== '') {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, author })
        })

        e.target.reset();
    } else {
        alert('Title and Author cannot be empty!')
    }

}


