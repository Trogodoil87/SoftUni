function catalog(input) {
    let catalog = {};

    for (let line of input) {
        let [day, name] = line.split(' ');

        if (catalog.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            catalog[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in catalog) {
        console.log(`${key} -> ${catalog[key]}`);
    }
}

catalog(['Monday Peter',

    'Wednesday Bill',

    'Monday Tim',

    'Friday Tim']);