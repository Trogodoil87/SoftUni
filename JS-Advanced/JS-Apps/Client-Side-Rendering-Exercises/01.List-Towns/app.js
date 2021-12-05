import { html, render } from "./node_modules/lit-html/lit-html.js";


const form = document.querySelector('.content');
form.addEventListener('submit', onSubmit);

let townTemplate = (town) => html`
<ul>
    <li>${town}</li>
</ul>
`

function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const townsAsString = formData.get('towns');
    const towns = townsAsString.split(', ');

    let div = document.querySelector('#root');
    render(towns.map(townTemplate), div);
}