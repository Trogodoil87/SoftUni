function addItem() {
    const newTextElement = document.getElementById('newItemText');
    const newValueElement = document.getElementById('newItemValue');
    let selectElement = document.getElementById('menu');
    let newOptionElement = document.createElement('option');

    newOptionElement.textContent = newTextElement.value;
    newOptionElement.value = newValueElement.value;

    selectElement.appendChild(newOptionElement);

    newTextElement.value = '';
    newValueElement. value = '';
}