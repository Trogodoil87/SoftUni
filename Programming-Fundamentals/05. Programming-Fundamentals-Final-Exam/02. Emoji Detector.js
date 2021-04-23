function solve(input) {
    input = input.shift().split(' ');

    let emojiPattern = /(([:]{2}|[*]{2})(?<emoji>[A-Z][a-z]{2,})(\2))/gm
    let digitsPattern = /[0-9]/gm;

    let numbers = [];
    let names = [];
    for (let word of input) {
        let digits = word.match(digitsPattern);
        let emoji = word.match(emojiPattern);
        if (digits) {
            numbers.push(...digits);
        }
        if (emoji) {
            names.push(...emoji);
        }
    }

    let sum = numbers.map((v, i) => Number(v)).reduce((a, b) => a * b);
    let obj = {};
    names.forEach(name => {
        let sum = 0;

        for (let char of name) {
            if (char !== '*' && char !== ':') {
                let code = char.charCodeAt();
                sum += code;
            }
        }

        obj[name] = sum;
    })
    console.log(`Cool threshold: ${sum}`);
    console.log(`${names.length} emojis found in the text. The cool ones are:`);
    Object.entries(obj).forEach(ele => {
        if (ele[1] > sum) {
            console.log(ele[0]);
        }
    })
}

// solve(
//     ['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);