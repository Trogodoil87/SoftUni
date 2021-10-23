function solve(arr, sortOrder) {
    return sortOrder == 'asc' ? arr.sort((a, b) => { return a - b }) : arr.sort((a, b) => { return b - a });
    // return sortOrder == 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}
let a = solve([1, 2, 3, 4], 'd');
console.log(solve([1, 2, 3, 4], 'd'));
