import { cats } from './catSeeder.js';
import { html, render } from './node_modules/lit-html/lit-html.js';
import { styleMap } from './node_modules/lit-html/directives/style-map.js';


const section = document.querySelector('#allCats');

function catTemplate(cat) {
    return html`
        <li>
            <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
            <div class="info">
                <button class="showBtn" @click=${() => onClick(cat)}>${cat.info ? 'Hide' : 'Show'} status code</button>
                ${cat.info ? html`<div class="status" id=${cat.id}>
                    <h4>Status Code: ${cat.statusCode}</h4>
                    <p>${cat.statusMessage}</p>
                </div>`: null}
            </div>
        </li>   
`;
}

update();
cats.forEach(c => c.info = false)

function update() {
    render(html`<ul>${cats.map(catTemplate)}</ul>`, section);
}

function onClick(cat) {
    cat.info = !(cat.info);
    update();
}

