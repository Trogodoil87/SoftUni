function solve(input) {
    let actions = {
        Plunder: (citys, [town, peopleCount, gAmt]) => {
            let city = citys[town];
            peopleCount = Number(peopleCount);
            gAmt = Number(gAmt);

            if (gAmt >= city.gold) {
                gAmt = city.gold;
            }
            if (peopleCount >= city.population) {
                peopleCount = city.population;
            }

            city.gold -= gAmt;
            city.population -= peopleCount;

            console.log(`${town} plundered! ${gAmt} gold stolen, ${peopleCount} citizens killed.`)
            if (city.gold === 0 || city.population === 0) {
                console.log(`${town} has been wiped off the map!`);
                delete citys[town];
            }
        },
        Prosper: (citys, [town, gAmt]) => {
            let city = citys[town];
            gAmt = Number(gAmt);

            if (gAmt > 0) {
                city.gold += gAmt;
                console.log(`${gAmt} gold added to the city treasury. ${town} now has ${city.gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        },
    };
    let citys = {};

    while (input[0] !== 'Sail') {
        let [name, population, gold] = input.shift().split('||');
        if (!citys.hasOwnProperty(name)) {
            citys[name] = {
                population: 0,
                gold: 0
            };
        }

        citys[name].population += Number(population);
        citys[name].gold += Number(gold);
    }

    input.shift();

    while (input[0] !== 'End') {
        let [command, ...args] = input.shift().split('=>');
        let action = actions[command];
        action(citys, args);
    }

    if (Object.keys(citys).length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${Object.keys(citys).length} wealthy settlements to go to:`)
        Object.entries(citys).sort((a, b) => b[1].gold - a[1].gold || a[0].localeCompare(b[0])).forEach(ele => {
            console.log(`${ele[0]} -> Population: ${ele[1].population} citizens, Gold: ${ele[1].gold} kg`);
        })
    }
    for (let i = 10; i > 3; i-=2) {
        console.log(i);
    }
}
// solve(['Tortuga||20||10',
//     'Santo Domingo||10||20',
//     'Tortuga||0||-11',
//     'Sail',
//     'Plunder=>Tortuga=>75000=>380',
//     'Prosper=>Santo Domingo=>180',
//     'Plunder=>Santo Domingo=>10=>199',
//     'End']);
// console.log('----------------------------------');
solve(['Nassau||95000||1000',

    'San Juan||930000||1250',

    'Campeche||270000||690',

    'Port Royal||320000||1000',

    'Port Royal||100000||2000',

    'Sail',

    'Prosper=>Port Royal=>0',

    'Plunder=>Nassau=>94000=>750',

    'Plunder=>Nassau=>1000=>150',

    'Plunder=>Campeche=>150000=>690',

    'End']);