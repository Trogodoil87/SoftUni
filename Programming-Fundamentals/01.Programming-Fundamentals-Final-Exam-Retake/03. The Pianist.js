function solve(input) {
    let commands = {
        Add: (pieces, [pieceName, composer, key]) => {
            if (pieces.hasOwnProperty(pieceName)) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                pieces[pieceName] = {
                    composer,
                    key
                };

                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            }
        },
        Remove: (pieces, [pieceName]) => {
            if (pieces.hasOwnProperty(pieceName)) {
                console.log(`Successfully removed ${pieceName}!`);
                delete pieces[pieceName];
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        },
        ChangeKey: (pieces, [pieceName, newKey]) => {
            if (pieces.hasOwnProperty(pieceName)) {
                pieces[pieceName].key = newKey;
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    };
    let count = Number(input.shift());

    let pieces = {};
    for (let i = 0; i < count; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = {
            composer: composer,
            key: key
        };
    }

    while (input[0] !== 'Stop') {
        let [commandName, ...args] = input.shift().split('|');
        let command = commands[commandName];
        command(pieces, args);
    }

    Object.entries(pieces)
        .sort((a, b) => a[0].localeCompare(b[0])
            || a[1].composer.localeCompare(b[1].composer))
        .forEach(ele => {
            console.log(`${ele[0]} -> Composer: ${ele[1].composer}, Key: ${ele[1].key}`);
        });
}

solve(['4',

    'Eine kleine Nachtmusik|Mozart|G Major',

    'La Campanella|Liszt|G# Minor',

    'The Marriage of Figaro|Mozart|G Major',

    'Hungarian Dance No.5|Brahms|G Minor',

    'Add|Spring|Vivaldi|E Major',

    'Remove|The Marriage of Figaro',

    'Remove|Turkish March',

    'ChangeKey|Spring|C Major',

    'Add|Nocturne|Chopin|C# Minor',

    'Stop'])