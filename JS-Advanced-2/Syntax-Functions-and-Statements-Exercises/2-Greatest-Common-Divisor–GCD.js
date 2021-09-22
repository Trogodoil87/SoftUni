function solve(firstNum, secondNum) {
    let minimumValue = Math.min(firstNum, secondNum);
    let maximumValue = Math.max(firstNum, secondNum);

    let commonDivision = -1;

    for (let index = minimumValue; index > 0; index--) {
        if (minimumValue % index === 0 && maximumValue % index === 0) {
            commonDivision = index;
            break;
        }
    }

    console.log(commonDivision);
}

solve(15, 5);