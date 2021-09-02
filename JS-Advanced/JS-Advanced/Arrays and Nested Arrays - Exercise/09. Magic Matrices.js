function magicMatrix(matrixArr) {
    let lengthOfInitialArr = matrixArr[0].length;
    for (let r = 1; r < matrixArr.length; r++) {
        let currentLengthOfArr = matrixArr[r].length;

        if (lengthOfInitialArr !== currentLengthOfArr) {
            return false;
        }
    }
    let horizontalSums = matrixArr.map((el) => el.reduce((a, b) => a + b));
    let colums = matrixArr.map((row, i, arr) => arr[i].map((col, y) => arr[y][i]));

    let columsSums = colums.map((el) => el.reduce((a, b) => a + b));

    console.log(horizontalSums.concat(columsSums).every((v, i, arr) => v === arr[0]));
}

magicMatrix([[11, 32, 45],

[21, 0, 1],

[21, 1, 1]]);