function solve(input, occurence) {
    let count = 0;
    input = input.split(' ');

    for (let word of input) {
        if (word === occurence) {
            count++;
        }
    }

    console.log(count);
}

solve("This is a word and it also is a sentence",

    "is");