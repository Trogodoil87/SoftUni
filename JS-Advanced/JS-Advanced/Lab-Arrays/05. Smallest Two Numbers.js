function solve(input) {
    let oredered = input.sort((a, b) => a - b);

    console.log(oredered[0] + ' ' + oredered[1]);
}

solve([30, 15, 50, 5]);