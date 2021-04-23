function solve(input) {
    let count = Number(input.shift());
    let plants = {};

    for (let i = 0; i < count; i++) {
        let [name, rarity] = input.shift().split('<->');
        rarity = Number(rarity);

        if (!plants.hasOwnProperty(name)) {
            plants[name] = {
                rarity: 0,
                rating: []
            };
        }

        plants[name].rarity += rarity;
    }

    while (input[0] !== 'Exhibition') {
        let [command, ...args] = input.shift().split(': ');
        let [plant, data] = args.shift().split(' - ');
        if (plants.hasOwnProperty(plant)) {
            switch (command) {
                case 'Rate':
                    plants[plant].rating.push(Number(data));
                    break;
                case 'Update':
                    plants[plant].rarity = Number(data);
                    break;
                case 'Reset':
                    plants[plant].rating = [];
                    break;
                default:
                    console.log(`error`);
                    break;
            }
        } else {
            console.log(`error`);
        }
    }

    let sortedPlants = Object.keys(plants).sort((a, b) =>
        plants[b].rarity - plants[a].rarity ||
        average(plants[b].rating) - average(plants[a].rating));
    console.log(`Plants for the exhibition:`);

    for (let plant of sortedPlants) {
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${average(plants[plant].rating).toFixed(2)}`);
    }

    function average(arr) {
        if (!arr.length) {
            return 0;
        }
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

solve(['3',

    'Arnoldii<->4',

    'Woodii<->7',

    'Welwitschia<->2',

    'Rate: Woodii - 10',

    'Rate: Welwitschia - 7',

    'Rate: Arnoldii - 3',

    'Rate: Woodii - 5',

    'Update: Woodii - 5',

    'Reset: Arnoldii',

    'Exhibition']);