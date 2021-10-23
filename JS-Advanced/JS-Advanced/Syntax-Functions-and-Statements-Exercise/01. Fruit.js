function solve(...props) {
    let product = props[0];
    let weightInKilos = Number(props[1]) / 1000;
    let money = Number(props[2]);

    let totalPrice = weightInKilos * money;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${product}.`);
}

solve('orange', 2500, 1.80);