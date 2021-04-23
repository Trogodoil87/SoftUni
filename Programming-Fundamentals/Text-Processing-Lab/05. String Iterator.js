function solve(...args) {
    let iterator = text[Symbol.iterator]();
    let char = iterator.next();
    let output = '';

    while(!char.done) {
        if (char.value !== ' ') {
            output += char.value;
            char = iterator.next();
        } else {
            output += '\n';
            char = iterator.next();
        }
    }

    console.log(output);
}

solve('Et cillum do voluptate cillum ut cupidatat aliqua.');