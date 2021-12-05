import { html, render } from "./lib.js";

let section = document.querySelector('#loginPage');

const homeTemplate = () => html`${section}`;


export function showLoginPage(ctx) {
    ctx.render(homeTemplate());
}