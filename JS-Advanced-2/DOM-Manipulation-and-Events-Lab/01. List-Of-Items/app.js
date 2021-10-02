function addItem() {
    let inputElement = document.querySelector('#newItemText');
    let ulElement = document.querySelector('#items');
    
    if (inputElement.value !== '') {
        let liElement = document.createElement('li');
        liElement.textContent = inputElement.value;
        inputElement.value = '';
    
        ulElement.appendChild(liElement);
    }
}