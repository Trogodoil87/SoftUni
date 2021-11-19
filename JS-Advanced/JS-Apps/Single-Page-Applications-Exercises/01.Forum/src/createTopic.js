import { e, showView } from "./dom.js";

let section = document.querySelector('.topic-title');

export function showTopic() {
    getTopics();
}

export async function getTopics() {
    let result = [];

    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
        .then(res => {
            if (res.status === 204) {
                return result;
            } else {
                return res.json();
            }
        })
        .then(data => {
            for (const key in data) {
                result.push(createTopic(key, data[key]));
                postComment(data[key]);
            }

            section.replaceChildren(...result);
        })
        .catch(err => {
            alert(err)
        })
}

async function postComment(topic) {
    fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            postId: topic._id,
            postComment: topic.postName
        })
    })
        .then(res => {
            if (res.status === 204) {
                throw Error('No comments');
            } else {
                return res.json();
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            alert(err)
        })
}

export function createTopic(id, topic) {


    let element = e('div', { className: 'topic-container' },
        e('div', { className: 'topic-name-wrapper' },
            e('div', { className: 'topic-name', id: id },
                e('a', { href: '#', className: 'normal' },
                    e('h2', {}, topic.topicName)
                ),
                e('div', { className: 'columns' },
                    e('div', {},
                        e('p', {}, 'Date: ', e('time', {}, `${topic.created}`)),
                        e('div', { className: 'nick-name' },
                            e('p', {}, 'Username: ', e('span', {}, topic.userName))
                        )
                    )
                )
            )
        )
    )

    return element;
}

