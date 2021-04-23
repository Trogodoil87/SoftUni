class Vehicle {
    constructor (type, model, {engine, power, quality}, fuel, drive) {
        this.type = type;
        this.model = model;
        this.parts = {engine, power, quality};
        this.fuel = fuel;
        this.drive = function(loss) {
            return this.fuel -= loss;
        }
        this.parts.quality = engine * power;
    }
}


let parts = {engine: 6, power: 100};
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.parts.quality);