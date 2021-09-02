function solve(input) {
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < input.length; i++) {
        let currentMax = Math.max(...input[i]);

        if (currentMax > maxNum) {
            maxNum = currentMax;
        }
    }

    return maxNum;
}

console.log(solve([[3, 5, 7, 12],

[-1, 4, 33, 2],

[8, 3, 0, 4]]));