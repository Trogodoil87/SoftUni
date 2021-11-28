import * as data from './data.js';

let section = document.querySelector('#createPage');
let form = section.querySelector('form');
form.addEventListener('submit', onCreate);
section.remove();


let ctx = null;

export function showCreatePage(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section)
}

async function onCreate(event) {
    event.preventDefault();


    let titlePattern = /.{6,}/i;
    let descriptionPattern = /.{10,}/i;
    let imagePattern = /.{5,}/i;

    let formData = new FormData(form);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('imageURL').trim();

    if (title !== '' && titlePattern.test(title) &&
        description !== '' && descriptionPattern.test(description) &&
        img !== '' && imagePattern.test(img)) {

            let idea = {
                title,
                description,
                img
            };
        await data.createIdea(idea);
        ctx.goTo('home');
        event.target.reset();

    }


}