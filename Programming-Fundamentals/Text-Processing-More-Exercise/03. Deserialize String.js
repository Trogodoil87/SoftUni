function solve(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }
        let [char, ...args] = input[i].split(':');
        let digits = args.shift().split('/').map((v) => Number(v));

        for (let j = 0; j < digits.length; j++) {
            output.splice(digits[j], 0, char);
        }
    }
    while (input[0] !== 'end') {
        let [char, ...args] = input.shift().split(':');
        let digits = args.shift().split('/').map((v) => Number(v));

        for (let i = 0; i < digits.length; i++) {
            output.splice(digits[i], 1, char);
        }
    }
    console.log(output.join(''));
}

solve(['a:0/3/5/11',

    'v:1/4',

    'j:2',

    'm:6/9/15',

    's:7/13',

    'd:8/14',

    'c:10',

    'l:12',

    'end'])