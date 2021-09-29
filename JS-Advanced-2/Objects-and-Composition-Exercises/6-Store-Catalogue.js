function catalouge(arr) {
    let products = {};
    let storage = [];
    for (const line of arr) {
        let [name, price] = line.split(' : ');

        products[name] = Number(price);
        if (!storage.includes(name[0])) {
            storage.push(name[0]);
        }
    }

    storage = storage.sort((a, b) => a.localeCompare(b));
    let sorted = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0])).forEach(el => {
        if (storage[0] === el[0][0]) {
            console.log(storage.shift());
        }
        console.log(` ${el[0]}: ${el[1]}`);
    });
}

catalouge(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']);