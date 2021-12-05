import { render, html } from "./node_modules/lit-html/lit-html.js";
const url = 'http://localhost:3030/jsonstore/advanced/dropdown/';

const selectTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value="${i._id}">${i.text}</option>`)}
</select>
`

// document.querySelector('button').addEventListener('click', onDel);

const dropdown = document.querySelector('div');
const form = document.querySelector('form');
form.addEventListener('submit', addData);
getData();


function update(items) {
    const result = selectTemplate(items);

    render(result, dropdown);
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();

    update(Object.values(data));
}

async function addData(e) {
    e.preventDefault();

    const text = document.querySelector('#itemText').value.trim();
    if (text !== '') {

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({text})
        });

        if (res.ok) {
            getData();
            e.target.reset();
        }
    } else {
        alert('Field must be filled!');
    }

}
// async function onDel(e) {
//     e.preventDefault();

//     let allOptions = document.querySelectorAll('option');
//     allOptions.forEach(o => {
//         if (o.selected) {
//             deleteData(o);
//         }
//     })
//     async function deleteData(o) {
//         const res = await fetch(url + o.value, {
//             method: 'DELETE',
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })

//         if (res.ok) {
//             getData();
//         }
//     }
// }


