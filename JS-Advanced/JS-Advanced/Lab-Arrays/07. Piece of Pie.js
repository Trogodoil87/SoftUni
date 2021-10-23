function solve(input, start, end) {
    let startIndex = input.indexOf(start);
    let endIndex = input.indexOf(end);

    let output = input.slice(startIndex, endIndex + 1);
    return output;
}

solve(['Pumpkin Pie',

    'Key Lime Pie',

    'Cherry Pie',

    'Lemon Meringue Pie',

    'Sugar Cream Pie'],

    'Key Lime Pie',

    'Lemon Meringue Pie');