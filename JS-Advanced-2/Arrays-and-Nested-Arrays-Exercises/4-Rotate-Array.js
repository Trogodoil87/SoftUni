function solve(strArr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let currentLast = strArr.pop();
        strArr.unshift(currentLast);
    }

    console.log(strArr.join(' '));
}

solve(['1',

    '2',

    '3',

    '4'],

    2);