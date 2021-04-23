function solve(input) {
    let count = Number(input.shift());
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let pattern = /@(?<planet>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<type>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;

    for (let i = 0; i < count; i++) {
        let line = input[i];

        let decryptKey = line.match(/[star]/gi) && line.match(/[star]/gi).length;
        let decryptMsg = [];

        for (let c of line) {
            let code = c.charCodeAt();
            code -= decryptKey;
            decryptMsg.push(String.fromCharCode(code));
        }
        decryptMsg = decryptMsg.join('');
        decryptMsg = pattern.exec(decryptMsg);

        if (decryptMsg) {
            if (decryptMsg.groups.type === 'A') {
                attackedPlanets.push(decryptMsg.groups.planet);
            } else {
                destroyedPlanets.push(decryptMsg.groups.planet);
            }
        }
    }

    let sortedAttacked = attackedPlanets.sort((a, b) => a.localeCompare(b));
    let sortedDestroyed = destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${sortedAttacked.length}`);
    sortedAttacked.forEach(planet => {
        console.log(`-> ${planet}`);
    })
    console.log(`Destroyed planets: ${sortedDestroyed.length}`);
    sortedDestroyed.forEach(planet => {
        console.log(`-> ${planet}`);
    })
}

solve([2,
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR',
    'STCDoghudd4=63333$D$0A53333',

    "EHfsytsnhf?8555&I&2C9555SR"
]);