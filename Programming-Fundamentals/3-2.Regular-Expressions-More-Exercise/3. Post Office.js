function solve(input) {
    let chars = {};
    let parts = input.shift().split('|');
    let lettersPattern = /(([#|$|%|*|&])(?<letters>[A-Z]+)(\2))/gm;
    let charCodesPattern = /((?<charCode>[0-9]{2}):(?<length>[0-9]{2}))/gm;

    let letters = lettersPattern.exec(parts[0]);
    letters.groups.letters.split('').forEach(c => {
        chars[c] = 0;
    });
    let charParts = parts[1].match(charCodesPattern);
    for (let part of charParts) {
        let tokens = part.split(':');
        let code = Number(tokens[0]);
        let length = Number(tokens[1]);

        let currentChar = String.fromCharCode(code);
        
        if (chars.hasOwnProperty(currentChar)) {
            chars[currentChar] = length;
        }
    }

    // for (let i = 0; i < )
    for (let word of parts[2].split(' ')) {
        let currentChar = word[0];

        if (chars.hasOwnProperty(currentChar) && chars[currentChar] === word.length - 1) {
            console.log(word);
        }
    }
}

solve(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);