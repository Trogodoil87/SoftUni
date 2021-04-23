function solve(input) {
    let startIndex = 0;

    for (let i = input.length - 1; i >= 0; i--) {
        let currentChar = input[i];

        if (currentChar === '\\') {
            startIndex = i;
            break;
        }
    }

    let text = input.slice(startIndex + 1, input.length);

    let extension = text.split('.').pop();
    let file = text.slice(0, text.length - extension.length - 1);

    console.log(`File name: ${file}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template..pptx');