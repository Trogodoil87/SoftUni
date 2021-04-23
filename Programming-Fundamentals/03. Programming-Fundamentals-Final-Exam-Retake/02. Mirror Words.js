function solve(input) {
    let mirrors = {};
    MatchPairs = (firstWord, secondWord) => {
        let reversed = secondWord.split('').reverse().join('');
        if (firstWord === reversed) {
            mirrors[firstWord] = secondWord;
        }
    };
    let twoWordsPattern = /(([#|@])(?<wordOne>[A-Za-z]{3,})(\2{2})(?<wordTwo>[A-Za-z]{3,})(\2))/gm;
    let pairs = input.shift().match(twoWordsPattern);
    if (pairs) {
        for (let pair of pairs) {
            twoWordsPattern = /(([#|@])(?<wordOne>[A-Za-z]{3,})(\2{2})(?<wordTwo>[A-Za-z]{3,})(\2))/gm;
            let match = twoWordsPattern.exec(pair);
            MatchPairs(match.groups.wordOne, match.groups.wordTwo);
        }

        let output = [];
        if (pairs.length === 0) {
            console.log(`No word pairs found!`);
        } else {
            console.log(`${pairs.length} word pairs found!`);
        }
        if (Object.keys(mirrors).length === 0) {
            console.log(`No mirror words!`);
        } else {
            console.log(`The mirror words are:`);
            Object.entries(mirrors).forEach(mirror => {
                output.push(`${mirror[0]} <=> ${mirror[1]}`);
            })
            console.log(output.join(', '));
        }
    } else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}

solve(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);