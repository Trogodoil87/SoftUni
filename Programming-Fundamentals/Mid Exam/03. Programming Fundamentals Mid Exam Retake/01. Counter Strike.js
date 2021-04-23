function solve(input) {
    let initialHealth = Number(input.shift());

    let battlesWon = 0;

    while (true) {
        let energy = input.shift();
        if (energy === 'End of battle') {
            console.log(`Won battles: ${battlesWon}. Energy left: ${initialHealth}`);
            return;
        }
        if (initialHealth - Number(energy) >= 0) {
            battlesWon++;
            initialHealth -= Number(energy);
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${initialHealth} energy`);
            return;
        }
        if (battlesWon % 3 === 0) {
            initialHealth += battlesWon;
        }
    }
}
solve([100,
    10,
    10,
    10,
    1,
    2,
    3,
    73,
    10]);

// solve([0,

//     54,

//     14,

//     28,

//     13,

//     'End of battle']);