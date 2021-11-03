function solution() {
    let mainElement = document.querySelector('#main');

    fetch(`http://localhost:3030/jsonstore/advanced/articles/list`)
        .then(res => res.json())
        .then((data) => {
            for (const object of data) {
                mainElement.appendChild(createNewDivWithContent(object));
            }
        })
        .catch((e) => {
            console.log('error')
        });

    function createDivElement(className) {
        let div = document.createElement('div');
        div.classList.add(className);
        return div;
    }

    function createNewDivWithContent(object) {
        let accordionDiv = createDivElement('accordion');
        let divHead = createDivElement('head');

        let span = document.createElement('span');
        span.textContent = object.title;
        divHead.appendChild(span);

        let button = document.createElement('button');
        button.addEventListener('click', (event) => {
            eventHandler(event);
        });
        button.classList.add('button');
        button.setAttribute('id', object._id);
        button.textContent = 'More';
        divHead.appendChild(button);

        accordionDiv.appendChild(divHead);

        let divExtra = createDivElement('extra');
        divExtra.setAttribute('id', '_extra');
        let p = document.createElement('p');
        p.textContent = `${object.title} .....`;
        divExtra.appendChild(p);

        accordionDiv.appendChild(divExtra);
        return accordionDiv;
    }

    function eventHandler(event) {
        let eventId = event.currentTarget.getAttribute('id');
        let extraElement = event.currentTarget.parentElement.parentElement.querySelector('#_extra');

        if (event.currentTarget.textContent == 'More') {
            event.currentTarget.textContent = 'Less';
            fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${eventId}`)
                .then(res => res.json())
                .then((data) => {
                    extraElement.children[0].textContent = data.content;
                    extraElement.classList.remove('extra');
                })
                .catch((e) => {
                    throw Error('Error');
                })
        } else {
            event.currentTarget.textContent = 'More';
            extraElement.classList.add('extra');
        }
    }
}
solution()