function solve(input) {
    let sequnce = input.shift().split(' ').map(Number);

    for (let prop of input) {
        if (prop !== 'End') {
            let index = Number(prop);
            if (index < sequnce.length) {
                let spliced = sequnce.splice(index, 1, -1);

                for (let i = 0; i < sequnce.length; i++) {
                    let currentNum = sequnce[i];

                    if (currentNum !== -1 && spliced[0] < currentNum) {
                        sequnce[i] = currentNum - spliced[0];
                    } else if (currentNum !== -1 && spliced[0] >= currentNum) {
                        sequnce[i] = currentNum + spliced[0];
                    }
                }
            }
        } else {
            break;
        }
    }

    let shots = sequnce.filter((v, i) => v < 0);
    console.log(`Shot targets: ${shots.length} -> ${sequnce.join(' ')}`);
}

solve(['30 30 12 60 54 66',
//99 99 78 126 120 -1
    '5',
//21 21 -1 48 42 -1
    '2',
//63 63 -1 6 -1 -1
    '4',
//-1 126 -1 69 -1 -1
    '0',

    'End']);