function printNumbers(firstInput, secondInput) {
    let start = Number(firstInput);
    let end = Number(secondInput);

    let result = 0;

    for (let i = start; i <= end; i++) {
        result += i;
    }

    console.log(result);
}