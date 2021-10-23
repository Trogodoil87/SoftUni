function sumTable() {
    let bodyElements = document.querySelectorAll('tbody tr td');
    let totalElement = document.getElementById('sum');

    let sum = 0;
    for (let i = 1; i < bodyElements.length - 1; i++) {
        if (i % 2 === 1) {
            sum += Number(bodyElements[i].textContent);
        }
    }

    console.log(sum);
    totalElement.textContent = sum;
}