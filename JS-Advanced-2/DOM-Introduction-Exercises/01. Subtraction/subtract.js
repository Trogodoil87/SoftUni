function subtract() {
    let firstNumElement = document.querySelector('#firstNumber');
    let secondNumElement = document.querySelector('#secondNumber');
    let resultElement = document.querySelector('#result');

    resultElement.textContent = Number(firstNumElement.value) - Number(secondNumElement.value);
}