function addItem() {
    let newItemTextElement = document.querySelector('#newItemText');
    let itemsElements = document.querySelector('#items');

    let listLiElement = document.createElement('li');
    listLiElement.textContent = newItemTextElement.value;

    let buttonElement = document.createElement('a');
    buttonElement.setAttribute('href', '#');
    buttonElement.textContent = '[Delete]';
    
    listLiElement.appendChild(buttonElement);
    itemsElements.appendChild(listLiElement);

    buttonElement.addEventListener('click', (e) => {
        e.currentTarget.parentNode.remove();
    })

    newItemTextElement.value = '';
}