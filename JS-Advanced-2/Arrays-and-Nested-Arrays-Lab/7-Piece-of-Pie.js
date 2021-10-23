function solve(stringsArr, start, end) {
    let startIndex = stringsArr.indexOf(start);
    let endIndex = stringsArr.indexOf(end);

    let resultArr = stringsArr.slice(startIndex, endIndex + 1);

    return resultArr;
}

solve(['Pumpkin Pie',

    'Key Lime Pie',

    'Cherry Pie',

    'Lemon Meringue Pie',

    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie');