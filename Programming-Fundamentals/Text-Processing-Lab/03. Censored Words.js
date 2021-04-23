function solve(text, occurence) {
    let censored = text.replace(occurence, '*'.repeat(occurence.length));

    while(censored.includes(occurence)) {
        censored = censored.replace(occurence, '*'.repeat(occurence.length));
    }
    console.log(censored);

}

solve("A small sentence with small some words", "small");