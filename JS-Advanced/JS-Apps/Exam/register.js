import { html, render } from "./lib.js";

let section = document.querySelector('#registerPage');

const homeTemplate = () => html`${section}`;


export function showRegisterPage(ctx) {
    ctx.render(homeTemplate());
}