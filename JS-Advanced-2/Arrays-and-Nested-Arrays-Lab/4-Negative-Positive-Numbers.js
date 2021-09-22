function solve(arr) {
    let resultArr = [];
    for (const num of arr) {
        if (num >= 0) {
            resultArr.push(num);
        } else {
            resultArr.unshift(num);
        }
    }

    console.log(resultArr.join('\n'));
}

solve([7, -2, 8, 9]);