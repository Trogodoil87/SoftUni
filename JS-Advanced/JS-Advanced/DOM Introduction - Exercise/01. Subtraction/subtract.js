function subtract() {
    let firstNumberElement = document.querySelector('#firstNumber');
    let secondNumberElement = document.querySelector('#secondNumber');
    let resultElemnt  = document.querySelector('#result');

    resultElemnt.textContent = Number(firstNumberElement.value) - Number(secondNumberElement.value);
}