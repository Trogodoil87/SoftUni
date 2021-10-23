function solve(input) {
    let output = input.filter((v, i) => i % 2 === 1).map((v, i) => v * 2).reverse();
    return output;
}

console.log(solve([10, 15, 20, 25]));