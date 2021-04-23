function carsGarage(input) {
    let garage = {};

    for (let line of input) {
        let [parkNum, carProps] = line.split(' - ');

        if (!garage.hasOwnProperty(parkNum)) {
            garage[parkNum] = [];
        }

        garage[parkNum].push(carProps);
    }
    let output = '';



    Object.entries(garage).sort((a, b) => a[0] - b[0]).forEach(ele => {
        console.log(`Garage № ${ele[0]}`);

        for (let info of ele[1]) {
            let toReplace = info.replace(/: /g, ' - ');
            console.log(`--- ${toReplace}`);
        }
    })

}

carsGarage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);