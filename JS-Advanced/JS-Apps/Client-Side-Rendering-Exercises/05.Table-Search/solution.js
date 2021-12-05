import { render, html } from './node_modules/lit-html/lit-html.js';

getData();
document.querySelector('#searchBtn').addEventListener('click', onClick);
function onClick(event) {
   event.preventDefault();
   const search = document.querySelector('#searchField');
   const text = search.value.trim();
   searchText(text);
   search.value = '';
}

function searchText(search) {
   const allTdElements = document.querySelectorAll('tbody tr');
   allTdElements.forEach(tr => {
      let tdElemnts = Object.values(tr.querySelectorAll('td'));
      let res = tdElemnts.map(td => td.textContent.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
      if (res.includes(true)) {
         tr.classList.add('select');
      } else {
         tr.classList.remove('select');
      }
   })
}

const template = (items) => html`
      ${items.map(i => html`<tr>
         <td>${i.firstName} ${i.lastName}</td>
         <td>${i.email}</td>
         <td>${i.course}</td>
      </tr>
      `)}
`

function update(data) {
   const root = document.querySelector('tbody');

   render(template(Object.values(data)), root);
}

async function getData() {
   const res = await fetch('http://localhost:3030/jsonstore/advanced/table');
   if (res.ok) {
      const data = await res.json();

      update(data);
   } else {
      alert('No');
   }
}