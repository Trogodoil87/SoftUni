function solve(input) {
    let sum = 0;
    let output = [];

    for (let line of input) {
        if (Number(line)) {
            let num = Number(line);

            if (num > 0) {
                sum += num;
            } else {
                console.log(`Invalid price!`);
            }
        } else if (line === 'regular') {
            let noTaxPrice = sum;
            let taxPrice = sum * 0.20;
            let total = noTaxPrice + taxPrice;

            sum = total;

            output = print(noTaxPrice, taxPrice, total);
        } else if (line === 'special') {
            let noTaxPrice = sum;
            let taxPrice = sum * 0.20;
            let total = (noTaxPrice + taxPrice) - ((noTaxPrice + taxPrice) * 0.10);

            sum = total;

            output = print(noTaxPrice, taxPrice, total);
        }
    }

    console.log(sum <= 0 ? 'Invalid order!' : output.join(`\n`));

    function print(noTax, tax, total) {
        let result = [];

        result.push(`Congratulations you've just bought a new computer!`);
        result.push(`Price without taxes: ${noTax.toFixed(2)}$`);
        result.push(`Taxes: ${tax.toFixed(2)}$ `);
        result.push(`-----------`);
        result.push(`Total price: ${total.toFixed(2)}$`);

        return result;
    }
}