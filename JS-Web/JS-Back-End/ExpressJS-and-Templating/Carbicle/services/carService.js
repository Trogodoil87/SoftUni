const Car = require('../models/Car.js');
const { carViewModel } = require('./utils.js');

async function createCar(car) {
    try {
        const result = new Car(car);
        return await result.save();
    } catch (error) {
        throw new Error(error);
    }

}

async function getAll(query) {
    const options = {
        isDeleted: false
    };
    if (query.search) {
        options.name = new RegExp(query.search, 'i');
    } else if (query.from) {
        options.price = { $gte: Number(query.from) };
    } else if (query.to) {
        if (!options.price) {
            options.price = {};
        }

        options.price = { $lte: Number(query.to) };
    }

    const cars = await Car.find(options);
    return cars.map(carViewModel);
}

async function getById(id) {
    const car = await Car.findById(id).where({ isDeleted: false }).populate('accessories');
    return carViewModel(car);
}

async function deleteById(id) {
    await Car.findByIdAndUpdate(id, { isDeleted: true });
}

async function updateById(id, car) {
    const existing = await Car.findById(id).where({ isDeleted: false });

    existing.name = car.name;
    existing.description = car.description;
    existing.imageUrl = car.imageUrl || undefined;
    existing.price = car.price;
    existing.accessories = car.accessories;

    await existing.save();
}

async function attachAccessory(carId, accessoryId) {
    const existing = await Car.findById(carId);

    existing.accessories.push(accessoryId);

    await existing.save();
}

module.exports = () => (req, res, next) => {
    req.storage = {
        createCar,
        getAll,
        getById,
        deleteById,
        updateById,
        attachAccessory
    };
    next();
}