function solve(stringArr, delimeter) {
    let text = stringArr.map((v, i) => i < stringArr.length - 1 ? v + delimeter : v).join('');
    console.log(text);
}

solve(['One',

    'Two',

    'Three',

    'Four',

    'Five'],

    '-');