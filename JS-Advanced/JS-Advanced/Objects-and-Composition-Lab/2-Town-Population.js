function carCrate(arr) {
    let towns = {};
    for (const line of arr) {
        let [town, population] = line.split('<->').map((v, i) => i % 2 == 1 ? Number(v) : v.trim());
        if (!towns.hasOwnProperty(town)) {
            towns[town] = 0;
        }

        towns[town] += population;
    }

    for (const key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

carCrate(['Sofia <-> 1200000',

    'Montana <-> 20000',

    'New York <-> 10000000',

    'Washington <-> 2345000',

    'Las Vegas <-> 1000000']);