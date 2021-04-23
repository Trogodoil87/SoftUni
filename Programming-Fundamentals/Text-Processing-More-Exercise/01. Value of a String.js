function solve(input) {
    let action = input.pop();
    let patternUpper = /([A-Z])/gm;
    let patternLower = /([a-z])/gm;
    let sum = 0;
    if (action === 'LOWERCASE') {
        let lowerCaseChars = input.shift().match(patternLower);
        lowerCaseChars.forEach(char => {
            sum += char.charCodeAt();
        })
        console.log();
    } else if (action === 'UPPERCASE') {
        let upperCaseChars = input.shift().match(patternUpper);
        upperCaseChars.forEach(char => {
            sum += char.charCodeAt();
        })
    }

    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM',

    'LOWERCASE']);