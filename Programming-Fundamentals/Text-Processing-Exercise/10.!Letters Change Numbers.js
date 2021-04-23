function solve(input) {
    let words = input.slice().split(' ').map((v, i) => v.trim()).filter((v, i) => v.length > 0);

    let numbers = [];

    for (let word of words) {
        let letters = word.match(/[A-Za-z]/g);
        let digit = Number(word.match(/[0-9]+/g));

        let firstLetterCode = letters[0].charCodeAt(0);
        let secondLetterCode = letters[1].charCodeAt(0);

        let currentSum = 0;

        if (firstLetterCode >= 65 && firstLetterCode <= 90 && secondLetterCode >= 65 && secondLetterCode <= 90) {
            firstLetterCode -= 64;
            secondLetterCode -= 64;

            currentSum = digit / firstLetterCode - secondLetterCode;

        } else if (firstLetterCode >= 97 && firstLetterCode <= 122 && secondLetterCode >= 97 && secondLetterCode <= 122) {
            firstLetterCode -= 96;
            secondLetterCode -= 96;

            currentSum = digit * firstLetterCode + secondLetterCode;
        } else if (firstLetterCode >= 65 && firstLetterCode <= 90 && secondLetterCode >= 97 && secondLetterCode <= 122) {
            firstLetterCode -= 64;
            secondLetterCode -= 96;

            currentSum = digit / firstLetterCode + secondLetterCode;
        } else if (firstLetterCode >= 97 && firstLetterCode <= 122 && secondLetterCode >= 65 && secondLetterCode <= 90) {
            firstLetterCode -= 96;
            secondLetterCode -= 64;

            currentSum = digit * firstLetterCode - secondLetterCode;
        }

        numbers.push(currentSum);
    }


    console.log(numbers.reduce((a, b) => a + b, 0).toFixed(2));

    // let obj = {
    //     currentDigit: '',
    //     indexCount: 0,
    //     sum: 0
    // };

    //     for (let i = 0; i < word.length; i++) {
    //         let currentChar = word[i];
    //         let code = currentChar.charCodeAt(0);

    //         if (code >= 65 && code <= 90) {
    //             code -= 64;

    //             if (obj.sum === 0) {
    //                 obj = numberAdd(i, word);

    //                 let result = Number(obj.currentDigit) / code;
    //                 obj.sum = result;
    //                 i = obj.indexCount;
    //             } else {
    //                 obj.sum -= code;
    //             }

    //         } else if (code >= 97 && code <= 122) {
    //             code -= 96;

    //             if (obj.sum === 0) {
    //                 obj = numberAdd(i, word);

    //                 let result = Number(obj.currentDigit) * code;
    //                 obj.sum = result;
    //                 i = obj.indexCount;
    //             } else {
    //                 obj.sum += code;
    //             }
    //         }
    //     }
    //     numbers.push(obj.sum);
    // }

    // console.log(numbers.reduce((a, b) => a + b, 0).toFixed(2));

    // function numberAdd(index, word) {
    //     let obj = {
    //         currentDigit: '',
    //         indexCount: 0,
    //         sum: 0
    //     };

    //     for (let i = index + 1; i < word.length; i++) {
    //         let code = word[i].charCodeAt(0);
    //         if (code >= 48 && code <= 57) {
    //             obj.currentDigit += word[i];
    //         } else {
    //             obj.indexCount = i - 1;
    //             break;
    //         }
    //     }

    //     return obj;
    // }
}

solve('P34562Z q2576f   H456z');