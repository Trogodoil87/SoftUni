function solve(input) {
    let output = input[0];
    let startingChar = input[0];

    for (let char of input) {
        if (char !== startingChar) {
            output += char;
            startingChar = char;
        }
    }

    console.log(output);
}

solve('aaaaabbbbbcdddeeeedssaa');