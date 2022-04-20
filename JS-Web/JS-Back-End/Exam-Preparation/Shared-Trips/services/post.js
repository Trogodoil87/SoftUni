const Trip = require('../models/Trip.js');

async function createTrip(model) {
    const result = new Trip(model);

    await result.save();

    return result;
}

async function getTrips() {
    return Trip.find({});
}

async function getById(id) {
    return Trip.findById(id).populate('creator', 'email gender');
}

async function joinTrip(id) {
    const trip = await getById(id);
    if (trip.seats > 0) {
        trip.seats--;
        trip.hasJoined = true;
    } else {
        trip.hasSeats = false;
    }

    await trip.save();
}

module.exports = {
    createTrip,
    getTrips,
    getById,
    joinTrip
}