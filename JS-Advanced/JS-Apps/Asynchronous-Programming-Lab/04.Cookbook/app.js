function solve() {
    let mainElement = document.querySelector('main');

    let recipesUrl = 'http://localhost:3030/jsonstore/cookbook/recipes';

    fetch(recipesUrl)
        .then(res => res.json())
        .then((dataObj) => {
            mainElement.childNodes[1].remove()

            for (let i = 1; i <= 3; i++) {
                mainElement.appendChild(createArticle(dataObj, `0${i}`)).addEventListener('click', (e) => {
                    fetch(`http://localhost:3030/jsonstore/cookbook/details/0${i}`)
                        .then(res => res.json())
                        .then((obj) => {
                            console.log(obj)
                            mainElement.appendChild(createRecipe(obj));
                        })
                });
            }

        })
        .catch((error) => {
            return `wtf`;
        })

    function createArticle(dataObj, key) {
        let articleElement = document.createElement('article');
        articleElement.classList.add('preview');

        let divElement1 = divCreator('title');
        let h2Element = document.createElement('h2');
        h2Element.textContent = 'Title';
        divElement1.appendChild(h2Element);

        let divElement2 = divCreator('small');
        let imgElement = document.createElement('img');
        imgElement.setAttribute('src', dataObj[key].img);
        divElement2.appendChild(imgElement);

        articleElement.appendChild(divElement1);
        articleElement.appendChild(divElement2);

        return articleElement;
    }

    function createRecipe(data) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.textContent = 'Title';
        article.appendChild(h2);

        let mainDiv1 = divCreator('band');
        let divChild1 = divCreator('thumb');
        let img = document.createElement('img');
        img.setAttribute('src', data.img);
        divChild1.appendChild(img);

        let divChild2 = divCreator('ingredients');
        let h3 = document.createElement('h3');
        h3.textContent = 'Ingredients:';

        let ul = document.createElement('ul');

        for (const inridient of data.ingredients) {
            let li = document.createElement('li');
            li.textContent = inridient;
            ul.appendChild(li);
        }

        divChild2.appendChild(ul);

        let mainDiv2 = divCreator('description');
        let h3Ele = document.createElement('h3');
        h3Ele.textContent = 'Preparation:'
        mainDiv2.appendChild(h3Ele);

        for (const step of data.steps) {
            let p = document.createElement('p');
            p.textContent = step;
            mainDiv2.appendChild(p);
        }

        mainDiv1.appendChild(divChild1);
        mainDiv1.appendChild(divChild2);

        

        article.appendChild(mainDiv1);
        article.appendChild(mainDiv2);

        return article;
    }

    function divCreator(className) {
        let div = document.createElement('div');
        div.classList.add(className);
        return div;
    }
}