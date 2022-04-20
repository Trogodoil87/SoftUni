function mapErrors(error) {
    if (Array.isArray(error)) {
        return error
    } else if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(e => ({ msg: e.message }));
    } else if (typeof error.message == 'string') {
        return [{
            msg: error.message
        }]
    } else {
        return [{ msg: 'Request error' }]
    }
}

function creatorViewModel(creator) {
    return {
        id: creator._id,
        email: creator.email,
        gender: creator.gender
    }
}

function tripViewModel(trip) {
    const model = {
        id: trip._id,
        startPoint: trip.startPoint,
        endPoint: trip.endPoint,
        date: trip.date,
        time: trip.time,
        carImage: trip.carImage,
        carBrand: trip.carBrand,
        seats: trip.seats,
        price: trip.price,
        description: trip.description,
        buddies: trip.buddies,
        creator: creatorViewModel(trip.creator)
    }

    return model;
}

module.exports = {
    mapErrors,
    tripViewModel
};