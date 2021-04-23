function storage(input) {
    /*
    let storage = {};

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!storage.hasOwnProperty(product)) {
            storage[product] = 0;
        }

        storage[product] += quantity;
    }

    for (let key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
    */

    let storage = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (!storage.has(product)) {
            storage.set(product, 0);
        }

        let toMultiply = storage.get(product);
        storage.set(product, toMultiply + quantity);
    }

    for (let kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',

    'coffee 5',

    'olives 100',

    'coffee 40']);