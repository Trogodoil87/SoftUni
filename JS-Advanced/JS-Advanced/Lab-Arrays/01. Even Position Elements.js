function solve(input) {
    let result = input.filter((v, i) => i % 2 === 0);
    console.log(result.join(' '));
}

solve(['20', '30', '40']);