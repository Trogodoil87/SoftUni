function furnituresPrices(input) {
    let sum = 0;

    let furnitures = ['Bought furniture:'];

    for (let line of input) {
        let pattern = />>(?<furniture>[A-Za-z\s]+)<<(?<price>\d+(.\d*)?)!(?<quantity>\d+)/g;
        let match = pattern.exec(line)
        if (match) {
            let name = match.groups.furniture;
            let price = Number(match.groups.price);
            let quantity = Number(match.groups.quantity);

            if (price > 0 && quantity > 0) {
                sum += price * quantity;
                furnitures.push(name);
            }
        }
    }

    furnitures.push(`Total money spend: ${sum.toFixed(2)}`);
    console.log(furnitures.join('\n'));
}

furnituresPrices([
    '>>Sofa<<312.23!1',

    '>>TV<<300!5',

    '>Invalid<<!5',

    'Purchase']);