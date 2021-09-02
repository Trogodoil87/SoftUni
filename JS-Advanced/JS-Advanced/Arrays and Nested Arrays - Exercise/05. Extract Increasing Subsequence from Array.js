function solve(inputArr) {
    let numsArr = inputArr.map(Number);
    let currentBiggestNum = Number.MIN_SAFE_INTEGER;

    let output = numsArr.filter(num => {
        if (num > currentBiggestNum || num === currentBiggestNum) {
            currentBiggestNum = num;
            return true;
        } else {
            return false;
        }
    })


    return output;
}

solve([1,

    3,

    8,

    4,

    10,

    12,

    3,

    2,

    24]);