function solve() {
    let convertOptionElement = document.querySelector('#selectMenuTo');
    let binaryOption = document.createElement('option');

    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';

    let hexadecimalOption = document.createElement('option');

    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    convertOptionElement.appendChild(binaryOption);
    convertOptionElement.appendChild(hexadecimalOption);

    let selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    let convertBtnElement = document.querySelector('#container > button');

    convertBtnElement.addEventListener('click', (e) => {
        let numberInput = Number(document.querySelector('#input').value);
        let resultElement = document.querySelector('#result');

        resultElement.value = selectMap[convertOptionElement.value](numberInput);

    })
}