function solve(input) {
    let text = input[0].split('');
    let pattern = input[1].split('');

    while (text.length > 0 && pattern.length > 0) {
        let firstIndex = text.join('').indexOf(pattern.join(''));
        let lastIndex = text.join('').lastIndexOf(pattern.join(''));

        if (firstIndex >= 0 && lastIndex >= 0 && firstIndex !== lastIndex) {
            console.log(`Shaked it.`);
            text.splice(firstIndex, pattern.length);
            lastIndex = text.join('').lastIndexOf(pattern.join(''));
            text.splice(lastIndex, pattern.length);
            pattern.splice(pattern.length / 2, 1);
        } else {
            console.log('No shake.');
            break;
        }
    }

    if (pattern.length < 1 || text.length < 1) {
        console.log(`No shake.`);
    }

    console.log(`${text.join('')}`);
}

solve(['##mtm!!mm.mm*mtm.#',

    'mtm']);