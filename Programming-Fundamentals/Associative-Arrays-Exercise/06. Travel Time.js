function travelCost(input) {
    let countrys = {};

    for (let line of input) {
        let [place, city, cost] = line.split(' > ');
        cost = Number(cost);

        if (!countrys.hasOwnProperty(place)) {
            countrys[place] = {};
        }

        if (!countrys[place].hasOwnProperty(city)) {
            countrys[place][city] = cost;
            console.log();
        } else {
            let existing = countrys[place][city];

            if (existing > cost) {
                countrys[place][city] = cost;
            }
        }
    }

    let orderedCountrys = Object.keys(countrys).sort((a, b) => a.localeCompare(b));
    let output = '';

    for (let name of orderedCountrys) {
        let sortedPrice = Object.keys(countrys[name]).sort((a, b) => byNum(a, b, countrys, name));
        output += name + ' -> ';

        for (let town of sortedPrice) {
            output += `${town} -> ${countrys[name][town]} `;
        }

        output += `\n`;
    }

    console.log(output);

    function byNum(a, b, countrys, name) {
        let priceA = countrys[name][a];
        let priceB = countrys[name][b];

        return priceA - priceB;
    }
}

travelCost([

    "Bulgaria > Sofia > 500",

    "Bulgaria > Sopot > 800",

    "France > Paris > 2000",

    "Albania > Tirana > 1000",

    "Bulgaria > Sofia > 200"

]);