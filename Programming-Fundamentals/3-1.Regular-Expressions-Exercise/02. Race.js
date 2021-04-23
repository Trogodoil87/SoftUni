function solve(input) {
    let names = input.shift().split(', ');

    let racers = {};
    names.forEach(name => {
        racers[name] = 0;
    });

    for (let line of input) {
        if (line === 'end of race') {
            break;
        }
        let namePattern = /[A-Za-z]/g;
        let distancePattern = /\d/g;

        let nameMatch = line.match(namePattern).join('');
        let distanceMatch = line.match(distancePattern).map((a, b) => Number(a)).reduce((a, b) => a + b, 0);

        if (racers.hasOwnProperty(nameMatch)) {
            racers[nameMatch] += distanceMatch;
        }
    }
    let sorted = Object.entries(racers).sort((a, b) => b[1] - a[1]).filter((v, i) => i < 3);

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            let currentName = sorted[i][0];
            sorted[i][0] = `1st place: ${currentName}`;
        }
        if (i === 1) {
            let currentName = sorted[i][0];
            sorted[i][0] = `2nd place: ${currentName}`;
        }
        if (i === 2) {
            let currentName = sorted[i][0];
            sorted[i][0] = `3rd place: ${currentName}`;
        }
    }
    sorted.forEach(ele => {
        console.log(`${ele[0]}`);
    })
}
solve(['George, Peter, Bill, Tom',

    'G4e@55or%6g6!68e!!@',

    'R1@!3a$y4456@',

    'B5@i@#123ll',

    'G@e54o$r6ge#',

    '7P%et^#e5346r',

    'T$o553m&6',

    'end of race']);