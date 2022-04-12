const Accessory = require('../models/Accessory.js');
const { accessoryViewModel } = require('./utils.js');


async function createAccessory(accessory) {
    try {
        const result = new Accessory(accessory);
        return await result.save();
    } catch (error) {
        throw new Error('Error creating new Accessory!');
    }
}

async function getAll() {
    const accessories = await Accessory.find({});

    return accessories.map(accessoryViewModel);
}

module.exports = () => (req, res, next) => {
    req.accessory = {
        createAccessory,
        getAll,
    };
    next();
}