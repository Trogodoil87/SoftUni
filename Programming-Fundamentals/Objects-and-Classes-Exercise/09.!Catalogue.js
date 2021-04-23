function catalogue(stringArr) {
    let products = [];


    for (let line of stringArr) {
        let [name, price] = line.split(' : ');

        let templateCatalogue = {
            name: `  ${name}`,
            price
        };
        products.push(templateCatalogue);
    }

    let sorted = products.sort((a, b) => a.name.localeCompare(b.name));
    let output = [];

    for (let r = 65; r <= 90; r++) {
        let isTemplated = false;
        for (let j = 0; j < sorted.length; j++) {
            let objChar = sorted[j].name.charCodeAt(2);
            if (r === objChar) {
                if (!isTemplated) {
                    console.log(String.fromCharCode(r));
                    isTemplated = true;
                }
               console.log(`${sorted[j].name}: ${sorted[j].price}`);
            }
        }
    }
}
catalogue(['Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499 ',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10']);