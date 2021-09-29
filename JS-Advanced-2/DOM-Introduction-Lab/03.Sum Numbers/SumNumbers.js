function calc() {
    let firstNumEle = document.querySelector('#num1');
    let secondNumEle = document.querySelector('#num2');

    let resultEle = document.querySelector('#sum');

    resultEle.value = Number(firstNumEle.value) + Number(secondNumEle.value);
    firstNumEle.value = '';
    secondNumEle.value = '';
}
