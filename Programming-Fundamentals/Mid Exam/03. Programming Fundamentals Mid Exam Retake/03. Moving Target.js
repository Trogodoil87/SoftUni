function solve(input) {
    let sequnce = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, index, num] = input[i].split(' ');
        index = Number(index);

        if (command === 'Shoot') {
            let power = Number(num);
            if (index >= 0 && index < sequnce.length) {
                sequnce[index] -= power;
            }
            if (sequnce[index] <= 0) {
                sequnce.splice(index, 1);
            }
        } else if (command === 'Strike') {
            let radius = Number(num);

            if (index - radius >= 0 && index + radius < sequnce.length - 1) {
                let bomb = radius * 2 + 1;
                sequnce.splice(index - radius, bomb);
            } else {
                console.log('Strike missed!');
            }
        } else if (command === 'Add') {
            let value = Number(num);

            if (index >= 0 && index < sequnce.length) {
                sequnce.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }
        } else if (command === 'End') {
            break;
        }
    }
    console.log(sequnce.join('|'));
}
solve(['1 2 3 4 5',

    'Strike 2 1',

    'End']);
// solve(['52 74 23 44 96 110',

//     'Shoot 5 10',

//     'Shoot 1 80',

//     'Strike 2 1',

//     'Add 22 3',

//     'End'])