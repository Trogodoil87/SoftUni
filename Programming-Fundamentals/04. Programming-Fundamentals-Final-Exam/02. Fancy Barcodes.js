function solve(input) {
    let barcodePattern = /@\#+(?<product>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})@\#+/g;
    let digitsPattern = /[0-9]/g;

    let count = Number(input.shift());
    let products = {};

    for (let i = 0; i < count; i++) {
        let line = input[i].split('').filter((v, i) => v.trim()).join('');

        let barcodeMatch = line.match(barcodePattern);
        let outputMsg = '00';

        if (barcodeMatch) {
            let digitsMatch = barcodeMatch[0].match(digitsPattern);

            if (digitsMatch) {
                outputMsg = '';
                for (let digit of digitsMatch) {
                    outputMsg += digit;
                }
            }

            console.log(`Product group: ${outputMsg}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}
solve([
    6,
    '@###Val1d1teM@### ',
    '@#ValidIteM@# ',
    '##InvaliDiteM## ',
    '@InvalidIteM@ ',

    '@#Invalid_IteM@# ',

    '@#ValiditeM@# '
])
// solve([3,

//     ' @#FreshFisH@#',

//     '@###Brea0D@###',

//     '@##Che4s6E@##']);