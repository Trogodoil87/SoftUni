function solve(...params) {
    let output = [];
    for (let i = 0; i < params[0].length; i+= params[1]) {
        output.push(params[0][i]);
    }

    return output;
}

solve(['5',

    '20',

    '31',

    '4',

    '20'],

    2);