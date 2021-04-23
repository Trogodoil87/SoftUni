function solve(input) {
    let encryptedMsg = input.shift().split('');
    let commands = {
        Reverse: (msg, [str]) => {
            let index = msg.join('').indexOf(str);

            if (index < 0) {
                console.log(`error`);
            } else {
                let spliced = msg.splice(index, str.length).reverse();
                msg.push(...spliced);
                console.log(msg.join(''));
            }
        },
        ChangeAll: (msg, [str, replace]) => {
            
            let index = msg.join('').indexOf(str);

            while (index >= 0) {
                msg.splice(index, str.length, ...replace);
                index = msg.join('').indexOf(str);
            }

            console.log(msg.join(''));
        },
        InsertSpace: (msg, [index]) => {
            index = Number(index);
            msg.splice(index, 0, ' ');
            console.log(msg.join(''));
        }
    };

    while (input[0] !== 'Reveal') {
        let [firstArg, ...args] = input.shift().split(':|:');
        let command = commands[firstArg];
        command(encryptedMsg, args);
    }

    console.log(`You have a new text message: ${encryptedMsg.join('')}`);
}

solve(['How Are owu?',

    'ChangeAll:|:ow:|:OW',

    'Reverse:|:?uoy',

    'Reverse:|:jd',

    'InsertSpace:|:3',

    'InsertSpace:|:7',

    'Reveal'])