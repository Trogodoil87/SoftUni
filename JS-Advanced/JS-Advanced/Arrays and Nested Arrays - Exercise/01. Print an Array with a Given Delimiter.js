function solve(...params) {
    let output = '';

    for (let i = 0; i < params[0].length; i++) {
        output += params[0][i];

        if (i < params[0].length - 1) {
            output += params[1];
        }
    }

    console.log(output);
}

solve(['One',

    'Two',

    'Three',

    'Four',

    'Five'],

    '-');