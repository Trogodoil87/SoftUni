class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        for (const productProp of products) {
            let [name, quantity, totalPrice] = productProp.split(' ');
            let leftMoney = this.budgetMoney - Number(totalPrice);
            if (leftMoney >= 0) {
                this.budgetMoney = leftMoney;
                if (!this. stockProducts[name]) {
                    this.stockProducts[name] = {
                        name,
                        quantity: 0
                    };
                }
                this.stockProducts[name].quantity += Number(quantity);

                this.history.push(`Successfully loaded ${quantity} ${name}`);
            } else {
                this.history.push(`There was not enough money to load ${quantity} ${name}`);
            }
        }
    }

    addToMenu(newDish, productsDish, price) {
        if (this.menu.hasOwnProperty(newDish)) {
            return `The ${newDish} is already in the our menu, try something different." `
        }

        this.menu[newDish] = {
            products: productsDish,
            price: price
        }

        if (Object.keys(this.menu).length === 0) {
            return `Great idea! Now with the ${newDish} we have 1 meal in the menu, other ideas?`
        } else if (Object.keys(this.menu).length === 0 || Object.keys(this.menu).length > 1) {
            return `Great idea! Now with the ${newDish} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        }
    }

    showTheMenu() {
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }

        let output = '';

        for (let prop in this.menu) {
            output += `${prop} - $ ${this.menu[prop]}\n`;
        }
    }

    makeTheOrder(searchMeal) {
        if (!this.menu.hasOwnProperty(searchMeal)) {
            return `There is not ${searchMeal} yet in our menu, do you want to order something else?`;
        }

        let allIngredients = this.menu[searchMeal].products;
        let price = this.menu[searchMeal].price;

        let allStorageProducts = this.stockProducts['Banana'];

        for (let i = 0; i < allIngredients.length; i++) {
            let [name, quantity] = allIngredients[i].split(' ');
            quantity = Number(quantity);

            if (!this.stockProducts.hasOwnProperty(name)) {
                return `For the time being, we cannot complete your order (${searchMeal}), we are very sorry...`
            }

            let leftQuantity = this.stockProducts[name].quantity - quantity;

            if (leftQuantity < 0) {
                return `For the time being, we cannot complete your order (${searchMeal}), we are very sorry...`
            }

            this.stockProducts[name].quantity -= quantity;

            return `Your order (${searchMeal}) will be completed in the next 30 minutes and will cost you ${price}.` 

        }
        this.budgetMoney -= price;

    }
}

let kitchen = new Restaurant(1000); 
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50'])); 
console.log();