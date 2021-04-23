function solve(input) {
    let pattern = /(([#|\|])(?<itemName>[A-Za-z\s]+)(\2)(?<data>[0-9]{2}([\/])[0-9]{2}(\6)[0-9]{2})(\2)(?<calroies>[0-9]{1,5})(\2))/gm;
    let products = [];
    if (pattern.test(input)) {
        let matchProducts = input.shift().match(pattern);

        if (matchProducts) {
            for (let item of matchProducts) {
                pattern = /(([#|\|])(?<itemName>[A-Za-z\s]+)(\2)(?<data>[0-9]{2}([\/])[0-9]{2}(\6)[0-9]{2})(\2)(?<calories>[0-9]{1,5})(\2))/gm;
                let tokens = pattern.exec(item);
                let product = {
                    item: tokens.groups.itemName,
                    expire: tokens.groups.data,
                    calories: tokens.groups.calories
                };

                products.push(product);
            }
        }
    }

    let totalCalories = 0;
    products.forEach(obj => {
        totalCalories += Number(obj.calories);
    })
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    Object.keys(products).forEach(product => {
        console.log(`Item: ${products[product].item}, Best before: ${products[product].expire}, Nutrition: ${products[product].calories}`);
    })
}

solve(['$$#@@%^&#Fish#24/12/20#0#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);