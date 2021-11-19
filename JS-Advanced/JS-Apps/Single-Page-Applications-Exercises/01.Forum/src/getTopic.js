let topicElement = document.querySelector('.topic-title');
let topics = [];
import { createTopic } from './createTopicSection.js';

export async function getTopic() {
    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`)
        .then(res => {
            if (res.status == 204) {
                return;
            }

            return res.json();
        })
        .then(data => {
            topics = [];
            for (const key in data) {
                let { topicName, username, _createdOn } = data[key];
                topics.push(createTopic(topicName, _createdOn, username));
            }

            if (topicElement !== null) {
                topicElement.replaceChildren(...topics)
            }
        })
        .catch(err => {
            alert(err);
        })
}