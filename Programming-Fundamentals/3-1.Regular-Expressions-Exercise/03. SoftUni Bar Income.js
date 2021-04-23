function solve(input) {
    let totalIncome = 0;

    for (let line of input) {
        if (line === ' end of shift') {
            break;
        }
        let pattern = /^%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>[0-9]{1,})\|[^|$%.]*?(?<price>\d+(?:\.\d+)?)\$$/g;
        let match = line.match(pattern);
        
        if (match) {
            let execute = pattern.exec(line);
            let sum = Number(execute.groups.quantity) * Number(execute.groups.price)
            console.log(`${execute.groups.customer}: ${execute.groups.product} - ${sum.toFixed(2)}`);
            totalIncome += sum;
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
solve(['end',
    '%George%<Croissant>|2|10..3$',

    '%Peter%<Gum>|1|1.3$',

    '%Maria%<Cola>|1|2.4$',

    'end of shift']);