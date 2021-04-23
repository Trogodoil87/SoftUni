function solve(input) {
    let words = input.split(' ');
    let find = [];
    console.log();

    for (let word of words) {
        if (word.startsWith('#') && word.length > 1) {
            let isTrue = true;
            for (let i = 1; i < word.length; i++) {
                let code = word[i].charCodeAt(0);
                if (code < 65 || code > 90 &&
                    code < 97 || code > 122) {
                    isTrue = false;
                    break;
                }
            }
            if (isTrue) {
                word = word.substr(1, word.length);
                find.push(word);
            }
        }

    }
    console.log(find.join('\n'));

}
solve('Nowadays everyone uses # ! to tag a #special word in #socialMedia');