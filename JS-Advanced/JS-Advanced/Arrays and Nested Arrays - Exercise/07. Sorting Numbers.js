function solve(inputNumbers) {

    let sorted = inputNumbers.sort((a, b) => b - a);
    for (let i = 0; i < sorted.length; i += 2) {
        let lastNum = sorted.pop();
        sorted.splice(i, 0, lastNum);
    }
    
    return sorted;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48];