function solve(number) {
    let sum = number
        .toString()
        .split('')
        .map((v, i) => Number(v))
        .reduce((a, v) => a + v, 0);

    number = number.toString().split('').map((v, i) => Number(v));

    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] !== number[i + 1]) {
            console.log('false');
            console.log(sum);
            return;
        }
    }
    console.log('true');
    console.log(sum);
}

solve(212);