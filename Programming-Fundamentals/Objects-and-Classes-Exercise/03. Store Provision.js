function magazinOrder(...input) {
    let initialStorage = {};
    let productsBeforeOrder = input[0];
    for (let i = 0; i < productsBeforeOrder.length - 1; i++) {
        let currentProduct = productsBeforeOrder[i];
        if (i % 2 === 0) {
            initialStorage[currentProduct] = Number(productsBeforeOrder[i + 1])
        } 
    }

    let productsOrder = input[1];
    for (let i = 0; i < productsOrder.length; i++) {
        let currentProduct = productsOrder[i];
        
        if (i % 2 === 0) {
            if (initialStorage[currentProduct]) {
                initialStorage[currentProduct] += Number(productsOrder[i + 1]);
            } else {
                initialStorage[currentProduct] = Number(productsOrder[i + 1]);
            }
        } 
    }

    for (let key of Object.keys(initialStorage)) {
        console.log(`${key} -> ${initialStorage[key]}`);
    }
}

magazinOrder([

    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Chips', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'

    ]);