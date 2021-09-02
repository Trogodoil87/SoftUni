function solve(...params) {
    let inputArr = params[0].slice();
    let rotations = Number(params[1]);

    for (let i = 0; i < rotations; i++) {
        let lastItem = inputArr.pop();
        inputArr.unshift(lastItem);
    }

    console.log(inputArr.join(' '));
}

solve(['Banana',

    'Orange',

    'Coconut',

    'Apple'],

    15);