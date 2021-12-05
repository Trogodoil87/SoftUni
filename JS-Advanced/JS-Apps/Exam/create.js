import { html, render } from "./lib.js";

let section = document.querySelector('.createPage');

const homeTemplate = () => html`${section}`;


export function showCreatePage(ctx) {
    ctx.render(homeTemplate());
}
