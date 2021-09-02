function solve(numbers) {
    let output = [];
    output.push(numbers.reduce((a, b) => a + b, 0));
    let sum = 0;
    numbers.forEach(num => {
        sum += 1 / num;
    });

    output.push(sum);
    let concatNumbers = '';
    numbers.forEach(num => {
        concatNumbers += num.toString();
    });

    output.push(concatNumbers);

    console.log(output.join(`\n`));
}

solve([1, 2, 3]);