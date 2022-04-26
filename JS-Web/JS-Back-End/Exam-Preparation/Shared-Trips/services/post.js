const Trip = require('../models/Trip.js');
const User = require('../models/User.js');

async function createTrip(trip) {
    const result = new Trip(trip);
    const user = await User.findById(trip.author);

    await result.save();

    user.history.push(result._id);
    user.historyCount++;

    await user.save();

    return result;
}

function authorViewModel(author) {
    const model = {
        id: author._id,
        email: author.email
    }

    return model;
}

function tripViewModel(trip) {
    const model = {
        id: trip._id,
        startPoint: trip.startPoint,
        endPoint: trip.endPoint,
        date: trip.date,
        time: trip.time,
        image: trip.image,
        brand: trip.brand,
        seats: trip.seats,
        price: trip.price,
        description: trip.description,
        author: authorViewModel(trip.author)
    }

    return model;
}

function passengersViewModel(trip) {
    const model = {
        id: trip._id,
        startPoint: trip.startPoint,
        endPoint: trip.endPoint,
        date: trip.date,
        time: trip.time,
        image: trip.image,
        brand: trip.brand,
        seats: trip.seats,
        price: trip.price,
        description: trip.description,
        author: authorViewModel(trip.author),
        buddies: trip.buddies.map(buddiesViewModel)
    }

    return model;
}

function buddiesViewModel(buddies) {
    const model = {
        id: buddies._id,
        email: buddies.email
    }

    return model;
}

async function getAllTrips() {
    return (await Trip.find({})).map(tripViewModel);
}

async function getTripById(id) {
    return await Trip.findById(id).populate('author', 'email').populate('buddies', 'email');
}

async function joinTripById(id, userId) {
    const trip = await getTripById(id);


    trip.buddies.push(userId);
    trip.seats--;

    await trip.save();
    return trip;
}

async function isJoined(id, userId) {
    const trip = await Trip.findById(id);

    if (trip.buddies && trip.buddies.includes(userId)) {
        return true;
    } else {
        return false;
    }
}

async function updateTripOffer(id, update) {
    const existing = await Trip.findById(id);

    existing.startPoint = update.startPoint;
    existing.endPoint = update.endPoint;
    existing.date = update.date;
    existing.time = update.time;
    existing.image = update.image;
    existing.brand = update.brand;
    existing.seats = update.seats;
    existing.price = update.price;
    existing.description = update.description;

    console.log(existing);
    await existing.save();
}

async function deleteTripById(id) {
    await Trip.findByIdAndDelete(id);
}

async function profileHistoryById(id) {
    const user = await User.findById(id).populate('history', 'startPoint endPoint date time').lean();

    if (user.historyCount > 0) {
        user.hasCreated = true;
    } else {
        user.hasCreated = false;
    }

    return user;
}

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    tripViewModel,
    joinTripById,
    passengersViewModel,
    isJoined,
    updateTripOffer,
    deleteTripById,
    profileHistoryById
}