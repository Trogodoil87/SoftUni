function solve(input) {
    let count = Number(input.shift());

    let decryptedMsgs = [];
    for (let msg of input) {
        let decryptedMsg = ''
        if (msg === 'end') {
            break;
        }
        for (let char of msg) {
            let newChar = String.fromCharCode((char.charCodeAt() - count));
            decryptedMsg += newChar;
        }
        decryptedMsgs.push(decryptedMsg);
    }

    for (let msg of decryptedMsgs) {
        let pattern = /(@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behaivor>[G|N])!)/gm;
        let tokens = pattern.exec(msg);

        if (tokens) {
            if (tokens.groups.behaivor === 'G') {
                console.log(tokens.groups.name);
            }
        }
    }
}

solve(['3',

    "N}eideidmk$'(mnyenmCNlpamnin$J$",

    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',

    'ppqmkkkmnolmnnCEhq/vkievk$Q$',

    'yyegiivoguCYdohqwlqh/kguimhk$J$',

    'end'])