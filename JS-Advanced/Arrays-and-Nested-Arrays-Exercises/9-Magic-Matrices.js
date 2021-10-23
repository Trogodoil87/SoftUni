function carCrate(arrs) {
    let horizontalSums = [];
    let isMagic = true;
    for (const arr of arrs) {
        let currentSum = arr.reduce((a, v) => a + v, 0);
        horizontalSums.push(currentSum);
    }

    let verticalSums = [];
    for (let r = 0; r < arrs.length; r++) {
        let currentSum = 0;
        for (let c = 0; c < arrs[r].length; c++) {
            currentSum += arrs[0 + c][r];
        }
        verticalSums.push(currentSum);
    }

    for (let i = 0; i < horizontalSums.length; i++) {
        if (horizontalSums[i] !== verticalSums[i]) {
            isMagic = false;
            break;
        }
    }    

    console.log(isMagic);
}

carCrate([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);