function solve(input) {
    let shopCart = input.shift().split('!');
    while (input.length > 0) {
        let [command, firstProduct, secondProduct] = input.shift().split(' ');

        switch (command) {
            case 'Urgent':
                if (!shopCart.includes(firstProduct)) {
                    shopCart.unshift(firstProduct);
                }
                break;
            case 'Unnecessary':
                let removalIndex = shopCart.indexOf(firstProduct);
                
                if (removalIndex >= 0) {
                    shopCart.splice(removalIndex, 1);
                }
                break;
            case 'Correct':
                let oldProductIndex = shopCart.indexOf(firstProduct);

                if (oldProductIndex >= 0) {
                    shopCart.splice(oldProductIndex, 1, secondProduct);
                }
                break;
            case 'Rearrange':
                let index = shopCart.indexOf(firstProduct);

                if (index >= 0) {
                    let sliced = shopCart.splice(index, 1);
                    shopCart.push(sliced);
                }
                break;
            case 'Go':
                return console.log(shopCart.join(', '));
                break;
            default:
                break;
        }
    }
}

solve(['Milk!Pepper!Salt!Water!Banana',

    'Urgent Salt',

    'Unnecessary Grapes',

    'Correct Pepper Onion',

    'Rearrange Grapes',

    'Correct Tomatoes Potatoes',

    'Go Shopping!']);