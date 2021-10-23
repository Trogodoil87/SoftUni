function simpleCalculator(...params) {
    let firstNum = Number(params[0]);
    let secondNum = Number(params[1]);
    let operator = params[2];
    let sumResult = 0;

    switch (operator) {
        case "+":
            sumResult = firstNum + secondNum;
            break;
        case "-":
            sumResult = firstNum - secondNum;
            break;
        case "/":
            sumResult = firstNum / secondNum;
            break;
        case "*":
            sumResult = firstNum * secondNum;
            break;
        case "**":
            sumResult = firstNum ** secondNum;
            break;
        case '%':
            sumResult = firstNum % secondNum;
            break;
        default:
            break;
    }

    console.log(sumResult);
}

simpleCalculator(5, 6, '+');