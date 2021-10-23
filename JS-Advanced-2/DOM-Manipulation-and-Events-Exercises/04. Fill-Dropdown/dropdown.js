function addItem() {
    let newItemNameElement = document.querySelector('#newItemText');
    let newItemValueElement = document.querySelector('#newItemValue');
    let selectElement = document.querySelector('#menu');
    
    let optionElement = document.createElement('option');

    optionElement.textContent = newItemNameElement.value;
    optionElement.setAttribute('value', newItemValueElement.value);

    selectElement.appendChild(optionElement);

    newItemNameElement.value = '';
    newItemValueElement.value = '';
}