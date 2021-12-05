import { html, render } from "./lib.js";

let section = document.querySelector('.editPage');

const homeTemplate = () => html`${section}`;


export function showEditPage(ctx) {
    ctx.render(homeTemplate());
}