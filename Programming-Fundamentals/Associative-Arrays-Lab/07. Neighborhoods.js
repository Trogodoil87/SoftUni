function streets(input) {
    let neighborStreets = {};
    let initialStreets = input.shift().split(', ');

    for (let street of initialStreets) {
        if (!neighborStreets.hasOwnProperty(street)) {
            neighborStreets[street] = [];
        }
    }

    for (let line of input) {
        let [street, name] = line.split(' - ');

        if (neighborStreets.hasOwnProperty(street)) {
            let existing = neighborStreets[street];
            existing.push(name);
        }
    }

    let sorted = Object.entries(neighborStreets).sort((a, b) => b[1].length - a[1].length);

    for (let adress of sorted) {
        console.log(`${adress[0]}: ${adress[1].length}`);
        if (adress[1].length > 0) {

            for (let i = 0; i < adress[1].length; i++) {
                console.log(`--` + adress[1][i]);
            }
        }

    }
}

streets(['Abbey Street, Herald Street, Bright Mews',

    'Bright Mews - Garry',

    'Bright Mews - Andrea',

    'Invalid Street - Tommy',

    'Abbey Street - Billy']);