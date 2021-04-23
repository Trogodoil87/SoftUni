function employeesInfo(employeesArr) {
    let employees = [];

    for (let person of employeesArr) {
        let number = person.length;

        let currentPerson = {
            name: person,
            personalNumber: number
        };

        console.log(`Name: ${currentPerson.name} -- Personal Number: ${currentPerson.personalNumber}`);
    }
}

employeesInfo([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

]);