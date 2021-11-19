import { getTopics, showTopic } from "./createTopic.js";
import { showView } from "./dom.js";
import { viewTopic } from "./view.js";
let now = time();

let buttons = {
    'public': onPost,
    'cancel': onCancel
};

let section = document.querySelector('.container');
section.addEventListener('click', e => {
    e.preventDefault();
    let button = buttons[e.target.className];
    if (typeof button === 'function') {
        button();
    }
});
document.querySelector('a').addEventListener('click', e => {
    showHome();
});
document.querySelector('.topic-title').addEventListener('click', e => {
    if (e.target.tagName === 'H2') {
        const id = e.target.parentElement.parentElement.id;
        viewTopic(id);
    }
})

section.remove();
export function showHome() {
    showView(section);
    showTopic();
}

showHome();


async function onPost() {
    let formData = new FormData(section.querySelector('form'));

    let topic = formData.get('topicName').trim();
    let user = formData.get('username').trim();
    let post = formData.get('postText').trim();

    if (topic !== '' && user !== '' && post !== '') {

        fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                topicName: topic,
                userName: user,
                postName: post,
                created: now
            })
        })
            .then(res => res.json())
            .then(data => {

                showTopic();
            })
            .catch(err => {
                alert(err)
            })
    } else {
        alert('All fields must be filled');
    }
}

function onCancel() {
    let form = section.querySelector('form');
    form.reset();
}

function time() {
    let now = new Date();
    let currentNow = `${now.getMonth()}/${now.getDay()}/${now.getFullYear()},${now.getHours() < 10 ? '0' + now.getHours() : now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}:${now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds()}`;

    return currentNow;
}
