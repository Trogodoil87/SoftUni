function solution() {
    function error(ingridient) {
        return `Error: not enough ${ingridient} in stock`
    }

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: (quantity) => {
            let carbohydrateNeed = 1 * quantity;
            let flavourNeed = 2 * quantity;

            return storage['carbohydrate'] >= carbohydrateNeed ?
                storage['flavour'] >= flavourNeed ?
                    ['Success', 'flavour', flavourNeed, 'carbohydrate', carbohydrateNeed] :
                    [error('flavour')] :
                [error('carbohydrate')]


        },
        lemonade: (quantity) => {
            let carbohydrateNeed = 10 * quantity;
            let flavourNeed = 20 * quantity;

            return storage['carbohydrate'] >= carbohydrateNeed ?
                storage['flavour'] >= flavourNeed ?
                    ['Success', 'carbohydrate', carbohydrateNeed, 'flavour', flavourNeed] :
                    [error('flavour')] :
                [error('carbohydrate')]


        },
        burger: (quantity) => {
            let carbohydrateNeed = 5 * quantity;
            let fatNeed = 7 * quantity;
            let flavourNeed = 3 * quantity;

            return storage['carbohydrate'] >= carbohydrateNeed ?
                storage['flavour'] >= flavourNeed ?
                    storage['fat'] >= fatNeed ?
                        ['Success', 'carbohydrate', carbohydrateNeed, 'flavour', flavourNeed, 'fat', fatNeed] :
                        [error('fat')] :
                    [error('flavour')] :
                [error('carbohydrate')];

        },
        eggs: (quantity) => {
            let proteinNeed = 5 * quantity;
            let fatNeed = 1 * quantity;
            let flavourNeed = 1 * quantity;

            return storage['protein'] >= proteinNeed ?
                storage['fat'] >= fatNeed ?
                    storage['flavour'] >= flavourNeed ?
                        ['Success', 'protein', proteinNeed, 'fat', fatNeed, 'flavour', flavourNeed] :
                        [error('protein')] :
                    [error('fat')] :
                [error('flavour')]

        },
        turkey: (quantity) => {
            let proteinNeed = 10 * quantity;
            let carbohydrateNeed = 10 * quantity;
            let fatNeed = 10 * quantity;
            let flavourNeed = 10 * quantity;

            return storage['protein'] >= proteinNeed ?
                storage['carbohydrate'] >= carbohydrateNeed ?
                    storage['fat'] >= fatNeed ?
                        storage['flavour'] >= flavourNeed ?
                            ['Success', 'protein', proteinNeed, 'carbohydrate', carbohydrateNeed, 'fat', fatNeed, 'flavour', flavourNeed] :
                            [error('protein')] :
                        [error('carbohydrate')] :
                    [error('fat')] :
                [error('flavour')]

        }
    };

    let commands = {
        restock: (microElement, quantity) => {
            storage[microElement] += quantity;
            return 'Success';
        },
        prepare: (name, quantity) => {
            let recipe = recipes[name];
            let result = recipe(quantity);

            if (result[0] === 'Success') {
                for (let i = 1; i < result.length - 1; i++) {
                    if (i % 2 === 1) {
                        storage[result[i]] -= result[i + 1];
                    }
                }
            }
            return result[0].toString()
        },
        report: () => {
            return Object.entries(storage).map((x) => x[0] + '=' + x[1]).join(' ');
        }
    };

    function ordersHandle(args) {
        let [name, ingridient, value] = args.split(' ').map((x, i) => i == 2 ? Number(x) : x);
        let command = commands[name];
        return command(ingridient, value);
    }

    return ordersHandle;
}
let manager = solution();

console.log(manager("restock flavour 50")); // Success  

console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock  

console.log(manager('restock carbohydrate 10'));

console.log(manager('restock flavour 10'));

console.log(manager('prepare apple 1'));

console.log(manager('restock fat 10'));

console.log(manager('prepare burger 1'));

console.log(manager('report'));