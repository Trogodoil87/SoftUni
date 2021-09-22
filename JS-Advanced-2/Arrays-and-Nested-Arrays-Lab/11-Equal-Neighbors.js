function solve(martixArr) {
    let counter = 0;

    for (let r = 0; r < martixArr[0].length; r++) {
        for (let c = 0; c < martixArr[0].length; c++) {
            if (c == martixArr.length - 1) {
                break;
            }
            // console.log(martixArr[c][0 + r]);
            // console.log(martixArr[1 + c][0 + r]);
            if (martixArr[c][0 + r] == martixArr[1 + c][0 + r]) {
                counter++;
            }
            if (martixArr[c][0 + r] == martixArr[c][1 + r]) {
                counter++;
            }
            if (martixArr[c][0 + r] == martixArr[c][r - 1]) {
                counter++;
            }
        }
    }

    console.log(counter);
}

solve([['2', '2', '5', '7', '4'],

['4', '0', '5', '3', '4'],

['2', '5', '5', '4', '2']]);
solve([[1, 2, 1],
[2, 3, 1],
[1, 5, 4]]);