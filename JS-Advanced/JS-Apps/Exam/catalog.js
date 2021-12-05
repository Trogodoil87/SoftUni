import { html, render } from "./lib.js";

let section = document.querySelector('#catalogPage');

const catalogTemplate = () => html`
            <section id="catalogPage">
                <h1>All Albums</h1>
                <div class="card-box">
                    html``
                </div>
            </section>
`;


export function showCatalogPage(ctx) {
    ctx.render(catalogTemplate());
}