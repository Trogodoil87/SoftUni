import { changePage } from './changePage.js';

export function createTopic(name, createdOn, username) {

    let topicContainer = createDiv('topic-container');

    let topicWrapper = createDiv('topic-name-wrapper');
    topicContainer.appendChild(topicWrapper);

    let topicNameDiv = createDiv('topic-name');
    topicWrapper.appendChild(topicNameDiv);

    let a = document.createElement('a');
    a.addEventListener('click', changePage);
    a.setAttribute('href', '#');
    a.classList.add('normal');
    let h2 = document.createElement('h2');
    h2.textContent = name;
    a.appendChild(h2);
    topicNameDiv.appendChild(a);

    let columns = createDiv('columns');
    let columnsDiv = createDiv();
    let p = document.createElement('p');
    p.textContent = 'Date: ';
    let time = document.createElement('time');
    time.textContent = createdOn;
    p.appendChild(time);
    columnsDiv.appendChild(p);

    let nickName = createDiv('nick-name');
    let userPElement = document.createElement('p');
    userPElement.textContent = 'Username: ';
    let userNameSpan = document.createElement('span');
    userNameSpan.textContent = username;
    userPElement.appendChild(userNameSpan);
    nickName.appendChild(userPElement);

    columnsDiv.appendChild(nickName)
    columns.appendChild(columnsDiv);
    topicNameDiv.appendChild(columns);

    return topicContainer;
}

function createDiv(className) {
    let div = document.createElement('div');
    if (className !== '') {
        div.classList.add(className);
    }
    return div;
}















