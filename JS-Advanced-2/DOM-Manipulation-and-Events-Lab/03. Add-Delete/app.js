function addItem() {
    //TODO...
    let newItemTextElement = document.querySelector('#newItemText');
    let itemsElements = document.querySelector('#items');

    let listLiElemnts = document.createElement('li');
    listLiElemnts.textContent = newItemTextElement.value;

    let buttonElement = document.createElement('a');
    buttonElement.setAttribute('href', '#');
    buttonElement.textContent = '[Delete]';

    listLiElemnts.appendChild(buttonElement);
    itemsElements.appendChild(listLiElemnts);

    buttonElement.addEventListener('click', (e) => {
        // e.currentTarget.parentNode.remove();
        console.log(e.currentTarget.parentNode.remove())
    })

    newItemTextElement.value = '';
}