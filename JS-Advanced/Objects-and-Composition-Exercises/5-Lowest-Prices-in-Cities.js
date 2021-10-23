function lowestPrice(params) {
    let products = new Map();
    for (let param of params) {
        let [town, product, price] = param.split(' | ');
        price = Number(price);
        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, price);
    }

    for (let [key, value] of products) {
        let lowestPrice = ([...value].reduce(function (a, b) {
            if (a[1] < b[1]) {
                return a;
            } else if (a[1] > b[1]) {
                return b;
            } else {
                return a;
            }
        }));
        console.log(`${key} -> ${lowestPrice[1]} (${lowestPrice[0]})`);
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',

    'Sample Town | Orange | 2',

    'Sample Town | Peach | 1',

    'Sofia | Orange | 3',

    'Sofia | Peach | 2',

    'New York | Sample Product | 1000.1',

    'New York | Burger | 10']);