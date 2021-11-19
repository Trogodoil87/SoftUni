import { createdOn } from './dateOfCreation.js';
import { getTopic } from './getTopic.js';
import { createPost } from './createPost.js';

export function onPublic(event) {
    event.preventDefault();
    let formData = new FormData(document.querySelector('form'));

    let isEmpty = [...formData.values()].some((v) => v.trim() === '');
    if (isEmpty === false) {
        let date = createdOn();

        fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                topicName: formData.get('topicName').trim(),
                username: formData.get('username').trim(),
                postText: formData.get('postText').trim(),
                _createdOn: date
            })
        })
            .then(res => res.json())
            .then(data => {
                createPost(data.postText, data._id);
                getTopic();
            })
            .catch(err => {
                alert(err);
            })
        document.querySelectorAll('form [type="text"]').forEach(element => {
            element.value = '';
        })
    } else {
        alert('All fields must be valid')
    }
}