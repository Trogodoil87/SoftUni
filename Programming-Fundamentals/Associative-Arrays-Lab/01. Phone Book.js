function phonebook(input) {
    let phonebook = {};

    for (let line of input) {
        let [name, phone] = line.split(' ');
        phonebook[name] = phone;
    }

    for (let contact in phonebook) {
        console.log(`${contact} -> ${phonebook[contact]}`);
    }
}

phonebook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344']);