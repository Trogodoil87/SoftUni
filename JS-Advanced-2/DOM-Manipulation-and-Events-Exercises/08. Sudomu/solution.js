function solve() {
    let buttonElements = document.querySelectorAll('button');

    let firstRowElements = Array.from(document.querySelectorAll('tr > td:nth-of-type(4n+1)')).splice(1, 3);
    let secondRowElemnts = Array.from(document.querySelectorAll('tr > td:nth-of-type(4n+2)'));
    let thirdRowElements = Array.from(document.querySelectorAll('tr > td:nth-of-type(4n+3)'));
    let resultElement = document.querySelector('#check');

    let borderStyleElement = document.querySelector('table');

    function calculateRowSums(...params) {
        return params.map((x) => x.reduce((a, v) => a + v, 0));
    }
    function calculateColSums(...params) {
        let firstArr = params[0];
        let secondArr = params[1];
        let thirdArr = params[2];

        let output = [];

        output.push(firstArr[0] + secondArr[0] + thirdArr[0]);
        output.push(firstArr[1] + secondArr[1] + thirdArr[1]);
        output.push(firstArr[2] + secondArr[2] + thirdArr[2]);

        return output;
    }
    function checkEqualRowCol(firstArr, secondArr) {
        for (let i = 0; i < firstArr.length; i++) {
            if (firstArr[i] !== secondArr[i]) {
                return false;
            }
        }

        return true;
    }
 
    for (const buttonElement of buttonElements) {
        buttonElement.addEventListener('click', (e) => {
            if (e.currentTarget.textContent === 'Quick Check') {
                let firstRowNumbers = firstRowElements.map((x) => Number(x.children[0].value));
                let secondRowNumbers = secondRowElemnts.map((x) => Number(x.children[0].value));
                let thirdRowNumbers = thirdRowElements.map((x) => Number(x.children[0].value));

                let rowSums = calculateRowSums(firstRowNumbers, secondRowNumbers, thirdRowNumbers);

                let colSums = calculateColSums(firstRowNumbers, secondRowNumbers, thirdRowNumbers);
                let isEqual = checkEqualRowCol(rowSums, colSums);
                let rowsCheck = checkEqulRows(rowSums, colSums);
                console.log(rowsCheck);

                if (isEqual) {
                    resultElement.textContent = "You solve it! Congratulations!"
                    borderStyleElement.style.border = '2px solid green';

                } else {
                    resultElement.textContent = "NOP! You are not done yet...";
                    borderStyleElement.style.border = '2px solid red';
                }
            } else {
                firstRowElements.map((x) => x.children[0].value = '');
                secondRowElemnts.map((x) => x.children[0].value = '');
                thirdRowElements.map((x) => x.children[0].value = '');
                resultElement.textContent = '';
                borderStyleElement.style.border = 'none';
            }
        })
    }

}