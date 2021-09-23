function carCrate(obj) {
    let newCar = {
        model: obj.model,
        engine: { power: 0, volume: 0 },
        carriage: { type: '', color: '' },
        wheels: []
    };

    let power = 0;
    let volume = 0;
    if (obj.power <= 90) {
        power = 90;
        volume = 1800;
    } else if (obj.power <= 120) {
        power = 120;
        volume = 2400;
    } else if (obj.power <= 200) {
        power = 200;
        volume = 3500;
    }

    newCar.engine.power = power;
    newCar.engine.volume = volume;
    newCar.carriage.type = obj.carriage;
    newCar.carriage.color = obj.color;

    if (obj.wheelsize % 2 === 0) {
        obj.wheelsize--;
    }

    newCar.wheels.push(obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize);

    return newCar;
}

carCrate({
    model: 'VW Golf II',

    power: 90,

    color: 'blue',

    carriage: 'hatchback',

    wheelsize: 14
});