function solve(input) {
    let word = input.shift().split('')

    while (input[0] !== 'Finish') {
        let [command, ...args] = input.shift().split(' ');
        if (command === 'Replace') {
            let serachChar = args[0];
            let newChar = args[1];
            if (serachChar !== newChar) {
                while (word.join('').includes(serachChar)) {
                    word = word.join('').replace(serachChar, newChar);
                    word = word.split('');
                }
            }
            console.log(word.join(''));
        } else if (command === 'Cut') {
            startIndex = Number(args[0]);
            endIndex = Number(args[1]);
            if (startIndex >= 0 && startIndex < word.length && endIndex >= 0 && endIndex < word.length && startIndex <= endIndex) {
                word.splice(startIndex, endIndex - startIndex + 1);
                console.log(word.join(''));
            } else {
                console.log(`Invalid indices!`);
            }
        } else if (command === 'Make') {
            let letterCase = args[0];
            let currentText = word.slice();
            if (letterCase === 'Upper') {
                currentText = currentText.map((v) => v.toUpperCase());
            } else if (letterCase === 'Lower') {
                currentText = currentText.map((v) => v.toLowerCase());
            }
            word = currentText;
            console.log(word.join(''));

        } else if (command === 'Check') {
            let str = args[0];
            if (word.join('').includes(str)) {
                console.log(`Message contains ${str}`);
            } else {
                console.log(`Message doesn't contain ${str}`);
            }

        } else if (command === 'Sum') {
            startIndex = Number(args[0]);
            endIndex = Number(args[1]);

            if (startIndex >= 0 && startIndex < word.length && endIndex >= 0 && endIndex + 1 < word.length && startIndex <= endIndex) {
                let substr = word.slice(startIndex, endIndex + 1);
                let sum = 0;
                substr.forEach(c => {
                    sum += c.charCodeAt();
                })
                console.log(sum);
            } else {
                console.log(`Invalid indices!`);
            }
        }
    }
}


solve(['ILikeSharan',

    'Replace a e',

    'Make Upper',

    'Check SHEREN',

    'Sum 10 12',

    'Cut 1 4',

    'Finish']);

    // let commands = {
    //     Replace: (word, [serachChar, newChar]) => {
    //         if (serachChar !== newChar) {
    //             while(word.join('').includes(serachChar)) {
    //                 let index = word.indexOf(serachChar);
    //                 if (index >= 0) {
    //                     word.splice(index, newChar.length, newChar);
    //                 }
    //             }
    //         }

    //         console.log(word.join(''));
    //     },
    //     Cut: (word, [startIndex, endIndex]) => {
    //         startIndex = Number(startIndex);
    //         endIndex = Number(endIndex);

    //         if (startIndex >= 0 && startIndex < word.length && endIndex >= 0 && endIndex < word.length && startIndex < endIndex) {
    //             word = word.slice(startIndex, endIndex);
    //             console.log(word.join(''));
    //         } else {
    //             console.log(`Invalid indices!`);
    //         }
    //     },
    //     Make: (word, [letterCase]) => {
    //         let currentText = word.slice();
    //         if (letterCase === 'Upper') {
    //             currentText = currentText.map((v) => v.toUpperCase());
    //         } else if (letterCase === 'Lower') {
    //             currentText = currentText.map((v) => v.toLowerCase());
    //         }
    //         word = currentText;
    //         console.log(word.join(''));
    //     },
    //     Check: (word, [str]) => {
    //         if (word.join('').includes(str)) {
    //             console.log(`Message contains ${str}`);
    //         } else {
    //             console.log(`Message dosen't contain ${str}`);
    //         }
    //     },
    //     Sum: (word, [startIndex, endIndex]) => {
    //         startIndex = Number(startIndex);
    //         endIndex = Number(endIndex);

    //         if (startIndex >= 0 && startIndex < word.length && endIndex >= 0 && endIndex < word.length && startIndex < endIndex) {
    //             let substr = word.splice(startIndex, endIndex - startIndex + 1);
    //             let sum = 0;
    //             substr.forEach(c => {
    //                 sum += c.charCodeAt();
    //             })
    //             console.log(sum);
    //         } else {
    //             console.log(`Invalid indices!`);
    //         }
    //     }
    // };