function solve(input) {
    let output = [];

    for (let num of input) {
        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }

    console.log(output.join('\n'));
}

solve([3, -2, 0, -1]);