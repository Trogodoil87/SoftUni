function solve(arr) {
    return arr.filter((v, i) => i % 2 === 1).reverse().map((v, i) => v * 2);
}

console.log(solve([10, 15, 20, 25]));