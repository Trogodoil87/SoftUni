function resources(input) {
    let storage = {};

    for (let i = 0; i < input.length - 1; i++) {
        if (i % 2 === 0) {
            let ore = input[i];
            let qunatity = Number(input[i + 1]);
            if (!storage.hasOwnProperty(ore)) {
                storage[ore] = 0;
            }   

            storage[ore] += qunatity;
        }
    }

    for (let line in storage) {
        console.log(`${line} -> ${storage[line]}`);
    }
}

resources([

    'Gold',

    '155',
    'Gold',
    '1',

    'Silver',

    '10',

    'Copper',

    '17'

]);