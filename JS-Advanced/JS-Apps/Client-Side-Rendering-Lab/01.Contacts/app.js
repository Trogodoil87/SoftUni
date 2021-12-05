import { contacts } from "./contacts.js";
import { render, html } from "./lib/lib.js";
import { contactTemplate } from "./template/template.js";


start();

function start() {
    const container = document.querySelector('#contacts');

    onRender();

    function onDetails(contact) {
        contact.details = !(contact.details);
        onRender();
    }

    function onRender() {
        render(contacts.map(c => contactTemplate(c, onDetails)), container);
    }
}



