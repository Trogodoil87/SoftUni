function solve(inputMatrix) {
    let leftDiagonalSum = 0;
    for (let i = 0; i < inputMatrix.length; i++) {
        let currentDigit = inputMatrix[i][i];
        leftDiagonalSum += currentDigit;
    }

    let rightDiagonalSum = 0;
    for (let r = 0; r < inputMatrix.length; r++) {
        for (let i = inputMatrix.length - 1; i >= 0; i--) {
            let currentDigit = inputMatrix[r][i - r];
            rightDiagonalSum += currentDigit;
            break;
        }
    }


    console.log(leftDiagonalSum + ' ' + rightDiagonalSum);
}

console.log(solve([[3, 5, 17],

[-1, 7, 14],

[1, -8, 89]]));