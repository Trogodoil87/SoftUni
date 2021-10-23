function solve(input) {
    let ascendingOreder = input.sort((a, b) => a - b);

    if (ascendingOreder.length % 2 === 0) {
        let output = ascendingOreder.slice(ascendingOreder.length / 2);
        return output;
    } else {
        let output = ascendingOreder.slice(Math.floor(ascendingOreder.length / 2));
        return output;
    }
}

solve([3, 19, 14, 7, 2, 19, 6]);