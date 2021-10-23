function solve(matrixArr) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (const arr of matrixArr) {
        let currentMax = Math.max(...arr);
        if (currentMax > maxNum) {
            maxNum = currentMax;
        }
    }

    return maxNum;
}

solve([[20, 50, 10],

[8, 33, 145]]);