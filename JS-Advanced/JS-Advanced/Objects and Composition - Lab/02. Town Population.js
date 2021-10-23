function solve(input) {
    let towns = {};

    for (let line of input) {
        let [name, population] = line.split('<->');
        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;
        }

        towns[name] += Number(population);
    }

    Object.entries(towns).forEach(ele => {
        console.log(`${ele[0]}: ${ele[1]}`);
    })
}

solve(['Istanbul <-> 100000',

    'Honk Kong <-> 2100004',

    'Jerusalem <-> 2352344',

    'Mexico City <-> 23401925',

    'Istanbul <-> 1000']);