function solution() {
    let storage = {};

    let recipes = {
        apple: (quantity) => {
            let carbohydrateNeed = 1 * quantity;
            let flavourNeed = 2 * quantity;
            if (storage.hasOwnProperty('carbohydrate') && storage.hasOwnProperty('flavour')) {
                return storage['carbohydrate'] >= carbohydrateNeed ? storage['flavour'] >= flavourNeed ? 'Success' : 'Error: not enough flavour in stock' : 'Error: not enough carbohydrate in stock'
            }

        },
        lemonade: (quantity) => {

        },
        burger: (quantity) => {

        },
        eggs: (quantity) => {

        },
        turkey: (quantity) => {

        }
    };

    let commands = {
        restock: (microElement, quantity) => {
            if (!storage.hasOwnProperty(microElement)) {
                storage[microElement] = 0;
            }

            storage[microElement] += quantity;
            return 'Success';
        },
        prepare: (name, quantity) => {
            let recipe = recipes[name];
            return recipe(quantity);
        },
        report: () => {

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

console.log(manager("restock flavour 0")); // Success  

console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock  

console.log(manager('restock carbohydrate 50'));

console.log(manager('restock flavour 0'));

console.log(manager('prepare apple 1'));

console.log(manager('restock fat 10'));

console.log(manager('prepare burger 1'));

console.log(manager('report'));