function solve(input) {
    let comands = {
        Move: (text, [num]) => {
            num = Number(num);

            if (num >= 0 && num < text.length) {
                let spliced = text.splice(0, num);
                text.push(...spliced);
            }
        },
        Insert: (text, [index, value]) => {
            index = Number(index);

            if (index >= 0) {
                text.splice(index, 0, ...value);
            }
        },
        ChangeAll: (text, [subStr, replacement]) => {
            let temp = text.slice();
            if (subStr !== replacement) {
                while (temp.join('').includes(subStr)) {
                    temp = temp.join('').replace(subStr, replacement);
                    temp = temp.split('');
                }
            }

            encode = temp.slice();
        }
    };
    let encode = input.shift().split('');

    while (input[0] !== 'Decode') {
        let [name, ...args] = input.shift().split('|');
        let command = comands[name];
        command(encode, args);
    }

    console.log(`The decrypted message is: ${encode.join('')}`)
}

solve(['zzHe',

    'ChangeAll|z|l',

    'Insert|2|o',

    'Move|3',

    'Decode']);