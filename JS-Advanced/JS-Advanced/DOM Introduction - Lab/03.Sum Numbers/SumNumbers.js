function calc() {
    // TODO: sum = num1 + num2
    let firstNumberElement = document.querySelector('#num1');
    let secondNumberElement = document.querySelector('#num2');
    let resultElement = document.querySelector('#sum');

    let sum = Number(firstNumberElement.value) + Number(secondNumberElement.value);
    resultElement.value = sum;
    
    // my upgarde
    // firstNumberElement.value = '';
    // secondNumberElement.value = '';
    // resultElement.value = sum;
}
