function solve(input) {
    let sequnce = input.shift().split(' ').map((v) => Number(v));

    let tresures = [];
    for (let text of input) {
        if (text === 'find') {
            break;
        }

        let encrypted = [];

        for (let c = 0; c < text.length; c++) {
            let index = -1;

            for (let i = 0; i < sequnce.length; i++) {
                if (c + i < text.length) {
                    let currentCharCodeOfText = text[c + i].charCodeAt();
                    currentCharCodeOfText -= sequnce[i];
                    encrypted.push(String.fromCharCode(currentCharCodeOfText));
                    index = i;
                } else {
                    break;
                }
            }
            if (index !== -1) {
                c += index;
            }
        }

        tresures.push(encrypted.join(''));
    }

    for (let tresure of tresures) {
        let pattern = /&(?<type>.+)&[^<]*<(?<coord>.+)>/g;

        let tokens = pattern.exec(tresure);
        if (tokens) {
            console.log(`Found ${tokens.groups.type} at ${tokens.groups.coord}`);
        }
    }
}
solve(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);
console.log(`------------------------------------`);
solve(['1 2 1 3',

    "ikegfp'jpne)bv=41P83X@",

    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",

    'find']);