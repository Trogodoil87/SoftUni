function solve(inputArr) {
    let sum = inputArr.reduce((a, v) => a + v, 0);
    let concat = inputArr.join('');
    let inverseSum = inputArr.reduce((a, v) => a + 1 / v, 0);
    console.log(sum);
    console.log(inverseSum);
    console.log(concat);
}

solve([1, 2, 3]);