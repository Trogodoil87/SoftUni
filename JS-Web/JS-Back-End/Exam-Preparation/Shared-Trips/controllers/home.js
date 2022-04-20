const { getTrips, getById } = require('../services/post.js');
const { mapErrors, tripViewModel } = require('../util/mappers.js');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/share', async (req, res) => {
    try {
        const trips = (await getTrips()).map(tripViewModel);
        res.render('sharedTrips', { title: 'Shared Tips', trips });
    } catch (err) {
        const errors = mapErrors(err);
        res.render('sharedTrips', { title: 'Shared Trips', errors });
    }
});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const trip = tripViewModel(await getById(id));


        if (req.session.user && req.session.user._id == trip.creator.id) {
            trip.hasUser = true;
            trip.isOwner = true;
            if (trip.seats > 0) {
                trip.hasSeats = true;
            }
        }
        res.render('details', { title: 'Details Page', trip });

    } catch (err) {
        const errors = mapErrors(err);
        res.render('details', { title: 'Details Page', errors });
    }


});


module.exports = router;