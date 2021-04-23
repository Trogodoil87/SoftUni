function solve(input) {
    let text = input.shift().split('');

    while (input[0] !== 'Travel') {
        let [command, ...args] = input.shift().split(':');
        command = command.trim();

        if (command === 'Add Stop') {
            let index = Number(args[0]);
            let addStr = args[1];

            if (index >= 0) {
                text.splice(index, 0, ...addStr);
            }

        } else if (command === 'Remove Stop') {
            let startIndex = Number(args[0]);
            let endIndex = Number(args[1]);

            if (startIndex >= 0 &&
                startIndex < text.length &&
                endIndex >= 0 &&
                endIndex < text.length &&
                startIndex <= endIndex) {
                let length = text.slice(startIndex, endIndex + 1).length;
                text.splice(startIndex, length);
            }
        } else if (command === 'Switch') {
            let toReplace = args[0];
            let replace = args[1];

            if (toReplace !== replace) {
                while (text.join('').includes(toReplace)) {
                    text = text.join('').replace(toReplace, replace);
                    text = text.split('');
                }
            }

        }

        console.log(text.join(''));
    }

    console.log(`Ready for world tour! Planned stops: ${text.join('')}`);
}

solve(['Hawai::Cyprys-Greece',

    'Add Stop:7:Rome',

    'Remove Stop:11:16',

    'Switch:Hawai:Bulgaria',

    'Travel']);