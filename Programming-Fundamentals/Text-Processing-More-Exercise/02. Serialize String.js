function solve(input) {
    let uniqueChars = new Set(input[0].split(''));

    let obj = {};
    let text = input[0];
    for (let item of uniqueChars) {

        obj[item] = [];
        for (let i = 0; i < text.length; i++) {
            if (item === text[i]) {
                obj[item].push(i);
            }
        }
    }

Object.entries(obj).forEach(ele => {
    console.log(`${ele[0]}:${ele[1].join('/')}`);
})
}

solve(['avjavamsdmcalsdm']);