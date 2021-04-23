function addressBook(input) {
    let catalog = {};

    for (let line of input) {
        let [name, address] = line.split(':');

        catalog[name] = address;
    }

    let sorted = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of sorted) {
        console.log(`${key.join(' -> ')}`);
    }
}

addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);