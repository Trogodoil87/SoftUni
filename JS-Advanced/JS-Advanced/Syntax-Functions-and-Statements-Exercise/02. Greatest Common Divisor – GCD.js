function solve(...params) {
    let minNumber = Math.min(...params);
    let maxNumber = Math.max(...params);

    for (let i = minNumber; i > 0; i--) {
        if (minNumber % i === 0 && maxNumber % i === 0) {
            console.log(i);
            break;
        }
    }
}

solve(2154, 458);