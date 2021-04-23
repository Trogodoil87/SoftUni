function simpleEmailValidator(input) {
    let pattern = /(^|(?<=\s))((?<name>([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s)))/;
    let words = input[0].split(' ');

    for (let word of words) {
        let wtf = word.match(pattern);
        if (wtf) {
            console.log(wtf.groups.name);
        }
    }
}

simpleEmailValidator(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de. ']);