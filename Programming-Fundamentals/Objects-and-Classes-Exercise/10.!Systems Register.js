function systemRegister(input) {

    let system = [];

    for (let line of input) {
        let [main, list, prop] = line.split(' | ');
        let register = {
            main,
            list,
            prop
        };

        system.push(register);
    }
    let sorted = system.sort((a, b) => a.main.localeCompare(b.main));
    console.log();
}

systemRegister(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);