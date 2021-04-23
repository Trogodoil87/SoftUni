function solve(input) {
    let firstCode = input.shift().charCodeAt();
    let secondCode = input.shift().charCodeAt();
    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);

    let sum = 0;
    for (let char of input[0]) {
        let code = char.charCodeAt();
        if (code > start && code < end) {
            sum += code;
        }
    }

    console.log(sum);
}
solve(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);
console.log(`----------------------`);
solve(['?',
    'E',
    '@ABCEF']);
console.log(`--------------------------`);
solve(['.',

    '@',

    'dsg12gr5653feee5']);