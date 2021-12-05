import { html, render } from "./lib.js";

let section = document.querySelector('#detailsPage');

const homeTemplate = () => html`${section}`;


export function showDetailsPage(ctx) {
    ctx.render(homeTemplate());
}