function solve(input) {
    let text = input[0];
    let missingWords = input[1];

    let wordsLengths = {};
    let output = '';

    missingWords.forEach(word => {
        wordsLengths[word] = word.length;
    })

    let count = 0;
    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char === '_') {
            count++;

            if (count === 1) {
                startIndex = i;
            }
            while (char === '_') {
                i += 1;
                char = text[i];
                count++;
            }
            if (count > 1) {
                --count;
                let replace = '';
                missingWords.forEach(word => {
                    if (word.length === count) {
                        replace = word;
                    }
                })
                
                count = 0;
                output += replace;
            }
        }

        output += char;
    }

    console.log(output);
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);