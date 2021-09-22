function solve(inputArr) {
    let output = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 === 0) {
            output.push(inputArr[i]);
        }
    }

    console.log(output.join(' '));
}

solve(['20', '30', '40', '50', '60']);