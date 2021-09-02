function solve(input) {
    let index = 1;
    let outputArr = [];

    for (let command of input) {
        if (command === 'add') {
            outputArr.push(index);
        } if (command === 'remove') {
            outputArr.pop();
        }
        index++;
    }

    console.log(outputArr.length > 0 ? outputArr.join(`\n`) : `Empty`);
}

solve(['add',

    'add',

    'remove',

    'add',

    'add']);