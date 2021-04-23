function jackpot(input) {
    let splited = input.shift().split(',').map((v, i) => v.trim());

    let tickets = {};
    for (let ticket of splited) {
        if (ticket.length === 20) {
            let patternLeft = /(?<symbols>[@|#|$|^]{6,10})/gm;
            let patternRight = /(?<symbols>[@|#|$|^]{6,10})/gm;
            let leftPart = ticket.slice(0, 10);
            let rightPart = ticket.slice(10);
            if (patternLeft.test(leftPart) && patternRight.test(rightPart)) {
                patternLeft = /(?<symbols>[@|#|$|^]{6,10})/gm;
                patternRight = /(?<symbols>[@|#|$|^]{6,10})/gm;
                let leftSymbols = patternLeft.exec(leftPart);
                let rightSymbols = patternRight.exec(rightPart);
                if (leftSymbols.groups.symbols[0] === rightSymbols.groups.symbols[0]) {
                    let occurnces = Math.min(leftSymbols.groups.symbols.length, rightSymbols.groups.symbols.length);
                    if (occurnces === 10) {
                        console.log(`ticket "${ticket}" - ${occurnces}${leftSymbols.groups.symbols[0]} Jackpot!`);
                    } else {
                        console.log(`ticket "${ticket}" - ${occurnces}${leftSymbols.groups.symbols[0]}`);
                    }
                } else {
                    console.log(`ticket "${ticket}" - no match`);
                }
            } else {
                console.log(`ticket "${ticket}" - no match`);
            }
        } else {
            console.log(`invalid ticket`);
        }
    }
}
jackpot(['$$$$$$$$$$$$$$$$$$$$, aabb  , ###############$$$$$']);