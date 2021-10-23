function solve(...params) {
    let product = params[0];

    let grams = Number(params[1]);
    let pricePerKilo = Number(params[2]);

    let kilos = grams / 1000;
    let cost = pricePerKilo * kilos;

    console.log(`I need $${cost.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${product}.`)
}

solve('apple', 1563, 2.35);