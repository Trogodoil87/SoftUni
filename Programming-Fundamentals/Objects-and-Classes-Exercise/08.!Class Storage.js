class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost;
    }
    get totalCost() {
        return this.storage.reduce((acc, ele) => {return acc + ele.price * ele.quantity}, 0);
    }
    addProduct(product) {
        this.storage.push(product);
        this.capacity -= product.quantity;
    }
    getProducts() {
        let output = [];
        this.storage.forEach(product => {
            output.push(JSON.stringify(product));
        })

        return output.join('\n');
    }
 
}



let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
let productThree = { name: 'Bread', price: 1.10, quantity: 8 };

let storage = new Storage(50);

storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);

let output = storage.getProducts();
console.log(output);
console.log(storage.capacity);
console.log(storage.totalCost);
console.log();