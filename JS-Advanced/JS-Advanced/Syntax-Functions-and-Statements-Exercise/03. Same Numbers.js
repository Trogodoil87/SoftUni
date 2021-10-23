function solve(number) {
    let isEqual = true;
    let result = 0;

    number = number.toString().split('');
    for (let i = 0; i < number.length; i++) {
        let currentDigit = Number(number[i]);
        result += currentDigit;
        if (currentDigit !== Number(number[0])) {
            isEqual = false;
        }
    }

    console.log(isEqual);
    console.log(result);
}

solve(2222);