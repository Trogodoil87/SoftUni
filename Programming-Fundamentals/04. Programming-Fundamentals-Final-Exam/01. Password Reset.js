function solve(input) {
    let rawPass = input.shift().split('').filter((v, i) => v !== '' && v !== ' ');
    for (let line of input) {
        let props = line.split(' ').filter((v, i) => v.trim());
        let command = props[0];
        if (command === 'Done') {
            break;
        } else if (command === 'TakeOdd') {
            rawPass = rawPass.filter((v, i) => i % 2 === 1);
            console.log(rawPass.join(''));
        } else if (command === 'Cut') {
            let index = Number(props[1]);
            let cutLength = Number(props[2]);

            rawPass.splice(index, cutLength);
            console.log(rawPass.join(''));
        } else if (command === 'Substitute') {
            let strToSearch = props[1];
            let strToReplace = props[2];

            if (rawPass.includes(strToSearch[0])) {
                while (rawPass.join('').includes(strToSearch)) {
                    rawPass = rawPass.join('').replace(strToSearch, strToReplace);
                    rawPass = rawPass.split('');
                }
                console.log(rawPass.join(''));

            } else {
                console.log(`Nothing to replace!`);
            }
        }
    }

    console.log(`Your password is: ${rawPass.join('')}`);
}
//100 - 100 judge result
solve(['Siiceercaroetavm!:?:ahsott.:  i:ns                   tupmomceqr ',

    ' TakeOdd',

    'Cut 15  3',

    'Substitute ::   -',

    'Substitute | ^',

    'Done']);