window.addEventListener('load', solve);

function solve() {
    let addBtnElement = document.querySelector('#add-btn');
    let pattern = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/gm;

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        let allInputFieldsElements = document.querySelectorAll('.container-text input');

        let genreFieldElement = allInputFieldsElements[0];
        let songFieldElement = allInputFieldsElements[1];
        let authorFieldElement = allInputFieldsElements[2];
        let dateFieldElement = allInputFieldsElements[3];

        if (genreFieldElement.value !== '' && songFieldElement.value !== '' && authorFieldElement.value !== '' && dateFieldElement.value !== '') {
            let allHitsDivElement = document.querySelector('.all-hits-container');


            let divElement = document.createElement('div');
            divElement.classList.add('hits-info');

            let imgElement = document.createElement('img');
            imgElement.setAttribute('src', './static/img/img.png');

            let genreH2Element = createHTags('Genre:', genreFieldElement.value, 'h2');
            let songH2Element = createHTags('Name:', songFieldElement.value, 'h2');
            let authorH2Element = createHTags('Author:', authorFieldElement.value, 'h2');
            let dateH3Element = createHTags('Date:', dateFieldElement.value, 'h3');

            genreFieldElement.value = '';
            songFieldElement.value = '';
            authorFieldElement.value = '';
            dateFieldElement.value = '';

            let saveBtnElement = createButton('save-btn', 'Save song');
            saveBtnElement.addEventListener('click', (e) => {
                let savedConteinerElement = document.querySelector('.saved-container');

                let currentSongElement = e.currentTarget.parentElement;

                let likeBtn = e.currentTarget.parentElement.querySelectorAll('button')[1];
                let saveBtn = e.currentTarget.parentElement.querySelectorAll('button')[0];
                e.currentTarget.parentElement.removeChild(likeBtn);
                e.currentTarget.parentElement.removeChild(saveBtn);

                savedConteinerElement.appendChild(currentSongElement);

            });

            let likeBtnElement = createButton('like-btn', 'Like song');
            likeBtnElement.addEventListener('click', (e) => {
                let totalLikesElement = document.querySelector('.likes p');
                let currentLike = Number(totalLikesElement.textContent.split(' ')[2]);
                currentLike++;
                totalLikesElement.textContent = `Total Likes: ${currentLike}`;
                likeBtnElement.disabled = true;
            });

            let deleteBtnElement = createButton('delete-btn', 'Delete');
            deleteBtnElement.addEventListener('click', (e) => {
                e.currentTarget.parentElement.remove();
            });

            divElement.appendChild(imgElement);
            divElement.appendChild(genreH2Element);
            divElement.appendChild(songH2Element);
            divElement.appendChild(authorH2Element);
            divElement.appendChild(dateH3Element);
            divElement.appendChild(saveBtnElement);
            divElement.appendChild(likeBtnElement);
            divElement.appendChild(deleteBtnElement);
            allHitsDivElement.appendChild(divElement);

        }
    });

    function createHTags(genre, text, tagName) {
        let h2 = document.createElement(tagName);
        h2.textContent = `${genre} ${text}`;
        return h2;
    }

    function createButton(classValue, content) {
        let button = document.createElement('button');
        button.setAttribute('class', classValue);
        button.textContent = content;
        return button;
    }
}