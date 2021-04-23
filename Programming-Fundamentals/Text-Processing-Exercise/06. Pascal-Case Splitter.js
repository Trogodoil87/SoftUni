function solve(input) {
    let upCaseCount = 0;
    let startIndex = -1;

    let output = [];

    for (let i = 0; i < input.length; i++) {
        let code = input[i].charCodeAt(0);

        if (code >= 65 && code <= 90) {
            upCaseCount++;

            if (upCaseCount === 1) {
                startIndex = i;
            } else if (upCaseCount === 2) {
                upCaseCount = 0;
                output.push(input.slice(startIndex, i));
                i -= 1;
            }
        }
        if (i === input.length - 1) {
            output.push(input.slice(startIndex, input.length));
        }
    }

    console.log(output.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
    //     let output = [];
    // // за преправяне на по-добро решение
    //     let currentWord = '';
    //     let count = 0;

    //     for (let i = 0; i < input.length; i++) {
    //         let isValid = true;
    //         let code = input[i].charCodeAt(0);

    //         if (code >= 65 && code <= 90) {
    //             for (let char of currentWord) {
    //                 count++;
    //                 if (count % 2 === 0) {
    //                     count = 0;
    //                     output.push(currentWord);
    //                     currentWord = '';
    //                     i -= 1;
    //                 }
    //                 let charCode = char.charCodeAt(0);

    //                 if (charCode >= 65 && charCode <= 90) {
    //                     isValid = false;
    //                     break;
    //                 }
    //             }
    //             if (isValid) {
    //                 count++;
    //                 currentWord += input[i];
    //             }
    //         } else {
    //             currentWord += input[i];
    //         }
    //         if (i === input.length - 1) {
    //             output.push(currentWord);
    //         }
    //     }

    //     console.log(output.join(', '));
