function sumTable() {
    let totalElement = document.querySelector('#sum');
    let bodyElements = document.querySelectorAll('tbody tr td');

    let sum = 0;

    for (let i = 1; i < bodyElements.length - 1; i++) {
        if (i % 2 === 1) {
            sum += Number(bodyElements[i].textContent);
        }
    }

    totalElement.textContent = sum;
}