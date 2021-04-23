function solve(input) {
    let cars = {};
    let actions = {
        Drive: (cars, [name, distance, fuel]) => {
            let car = cars[name];
            distance = Number(distance);
            fuel = Number(fuel);

            if (fuel > car.fuel) {
                console.log(`Not enough fuel to make that ride`);
            } else if (fuel <= car.fuel) {
                car.fuel -= fuel;
                car.mileas += distance;
                console.log(`${name} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
            }
            if (car.mileas >= 100000) {
                console.log(`Time to sell the ${name}!`);
                delete cars[name];
            }
        },
        Refuel: (cars, [name, fuel]) => {
            let car = cars[name];
            fuel = Number(fuel);

            if (car.fuel + fuel > 75) {
                fuel = 75 - car.fuel;
            }

            car.fuel += fuel;
            console.log(`${name} refueled with ${fuel} liters`);
        },
        Revert: (cars, [name, kilometers]) => {
            let car = cars[name];
            kilometers = Number(kilometers);

            car.mileas -= kilometers;

            if (car.mileas < 10000) {
                car.mileas = 10000;
            } else {
                console.log(`${name} mileage decreased by ${kilometers} kilometers`)
            }
        }
    };
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let [car, mAmt, fAmt] = input.shift().split('|');
        cars[car] = {
            mileas: Number(mAmt),
            fuel: Number(fAmt)
        };
    }

    while (input[0] !== 'Stop') {
        let [command, ...args] = input.shift().split(' : ');
        let action = actions[command];
        action(cars, args);
    }

    Object.entries(cars)
        .sort((a, b) => b[1].mileas - a[1].mileas
            || a[0].localeCompare(b[0]))
        .forEach(ele => {
            console.log(`${ele[0]} -> Mileage: ${ele[1].mileas} kms, Fuel in the tank: ${ele[1].fuel} lt.`);
        })
}

solve(['4',

    'Lamborghini Veneno|11111|74',

    'Bugatti Veyron|12345|67',

    'Koenigsegg CCXR|67890|12',

    'Aston Martin Valkryie|99900|50',

    'Drive : Koenigsegg CCXR : 382 : 82',

    'Drive : Aston Martin Valkryie : 99 : 23',

    'Drive : Aston Martin Valkryie : 2 : 1',

    'Refuel : Lamborghini Veneno : 40',

    'Revert : Bugatti Veyron : 2000',

    'Stop']);