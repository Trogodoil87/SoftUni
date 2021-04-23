function solve(input) {
    let commands = {
        Slice: (activationKey, [startIndex, endIndex]) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);
            activationKey.splice(startIndex, endIndex - startIndex);

            console.log(activationKey.join(''));
        },
        Flip: (activationKey, [caseSensitive, startIndex, endIndex]) => {
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            for (let i = startIndex; i < endIndex; i++) {
                if (caseSensitive === 'Upper') {
                    activationKey[i] = activationKey[i].toUpperCase();
                } else if (caseSensitive === 'Lower') {
                    activationKey[i] = activationKey[i].toLowerCase();
                }
            }

            console.log(activationKey.join(''));
        },
        Contains: (activationKey, [substring]) => {
            if (activationKey.join('').includes(substring)) {
                console.log(`${activationKey.join('')} contains ${substring}`)
            } else {
                console.log(`Substring not found!`);
            }
        }
    };
    let textKey = input.shift().split('');

    while (input[0] !== 'Generate') {
        let [commandName, ...args] = input.shift().split('>>>');
        let command = commands[commandName];
        command(textKey, args);
    }

    console.log(`Your activation key is: ${textKey.join('')}`);
}

solve(['abcdefghijklmnopqrstuvwxyz',

    'Slice>>>2>>>6',

    'Flip>>>Upper>>>3>>>14',

    'Flip>>>Lower>>>5>>>7',

    'Contains>>>def',

    'Contains>>>deF',

    'Generate'])