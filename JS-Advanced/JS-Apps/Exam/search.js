import { html, render } from "./lib.js";

let section = document.querySelector('#searchPage');

const homeTemplate = () => html`${section}`;


export function showSearchPage(ctx) {
    ctx.render(homeTemplate());
}