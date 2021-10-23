function solve(matrixArr) {
    let leftDiagonalSum = 0;

    for (let i = 0; i < matrixArr.length; i++) {
        leftDiagonalSum += matrixArr[i][i];
    }

    let rightDiagonalSum = 0;
    for (let r = 0; r < matrixArr.length; r++) {
        for (let c = matrixArr.length - 1; c >= 0; c--) {
            rightDiagonalSum += matrixArr[r][c - r];
            break;
        }
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}

solve([[3, 5, 17],

[-1, 7, 14],

[1, -8, 89]]);