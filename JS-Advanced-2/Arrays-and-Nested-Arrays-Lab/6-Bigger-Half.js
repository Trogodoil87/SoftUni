function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b).splice(arr.length % 2 == 0 ? arr.length / 2 : Math.floor(arr.length / 2));
    return sortedArr;
}

solve([3, 19, 14, 7, 2, 19, 6]);