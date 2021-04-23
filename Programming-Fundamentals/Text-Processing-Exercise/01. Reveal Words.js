function solve(words, text) {
    words = words.split(', ');
    let output = text;
    text = text.split(' ');
    for (let word of words) {
        let lengthOfWord = word.length;

        for (let w of text) {
            let lengthOfW = w.length;

            if (lengthOfWord === lengthOfW && w.includes('*')) {
                output = output.replace(w, word);
            }
        }
    }

    console.log(output);
}

solve('great, learning',

    'softuni is ***** place for ******** new programming languages');