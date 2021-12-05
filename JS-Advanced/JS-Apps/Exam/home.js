import { html, render } from "./lib.js";

let section = document.querySelector('#welcomePage');

const homeTemplate = () => html`${section}`;


export function showHomePage(ctx) {
    ctx.render(homeTemplate());
}
