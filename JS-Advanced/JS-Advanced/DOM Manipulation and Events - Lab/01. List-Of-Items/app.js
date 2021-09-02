function addItem() {
    let inputTextElement = document.querySelector('#newItemText');
    let listItemElements = document.querySelector('#items');

    let listElement = document.createElement('li');
    listElement.textContent = inputTextElement.value;
    listItemElements.appendChild(listElement);

    inputTextElement.value = '';
}