function attachEvents() {
    let url = `http://localhost:3030/jsonstore/messenger`;

    let textAreaElement = document.querySelector('#messages');
    let authorNameElement = document.querySelector('input[name="author"]');
    let msgTextElement = document.querySelector('input[name="content"]');

    document.querySelector('#submit').addEventListener('click', (e) => {
        if (authorNameElement.value !== '' && msgTextElement.value !== '') {
            onSend(authorNameElement.value.trim(), msgTextElement.value.trim());
        }

        authorNameElement.value = '';
        msgTextElement.value = '';
    });

    document.querySelector('#refresh').addEventListener('click', (e) => {
        textAreaElement.value = '';
        onRefresh();
    });

    function onSend(author, content) {

        let obj = {
            author,
            content
        };

        fetch(url, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    function onRefresh() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                for (const key in data) {
                    textAreaElement.value += `${data[key].author}: ${data[key].content}\n`;
                }
            })
            .catch(err => {
                console.error(err);
            })
    }
}

attachEvents();