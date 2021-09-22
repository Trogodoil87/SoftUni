function solve(numbers) {
    let sorted = numbers.sort((a, b) => a - b);
    let length = sorted.length / 2;
    let outputArr = [];

    for (let i = 0; i < length; i++) {
        outputArr.push(sorted.shift());
        outputArr.push(sorted.pop());
    }

    return outputArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);