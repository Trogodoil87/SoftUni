function solve(...params) {
    let number = Number(params.shift());
    let commands = {
        chop: () => {
            number /= 2;
        },
        dice: () => {
            number = Math.sqrt(number);
        },
        spice: () => {
            number += 1;
        },
        bake: () => {
            number *= 3;
        },
        fillet: () => {
            number = (0.80 * number).toFixed(1);
        }
    }

    for (const param of params) {
        let command = commands[param];
        command(number);
        console.log(number);
    }
}

solve(9, 'dice', 'spice', 'chop', 'bake', 'fillet');