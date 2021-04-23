function solve(phones) {
    let parttern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let validNumbers = phones.toString().match(parttern);

    console.log(validNumbers.join(', '));
}

solve(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]);