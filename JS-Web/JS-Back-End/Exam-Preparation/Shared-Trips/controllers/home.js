const { getAllTrips, getTripById, tripViewModel, joinTripById, passengersViewModel, isJoined } = require('../services/post.js');

const { isUser, isGuest } = require('../middleware/gurads.js');
const mapErrors = require('../util/mappers.js');


const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {

    try {
        const trips = await getAllTrips();
        res.render('catalog', { title: 'Catalog Page', trips });

    } catch (err) {
        const errors = mapErrors(err);
        res.render('catalog', { title: 'Catalog Page', errors });
    }

});

router.get('/details/:id', async (req, res) => {
    const id = req.params.id;

    try {
        let trip = await getTripById(id);
        if (trip.buddies.length > 0) {
            trip = passengersViewModel((await getTripById(id)));
            trip.buddiesList = trip.buddies.map(b => b.email).join(', ');
        } else {
            trip = tripViewModel((await getTripById(id)));
        }

        if (req.session.user) {
            trip.isUser = true;
            if (req.session.user._id == trip.author.id) {
                trip.isOwner = true;


            } else {
                if (trip.seats > 0) {
                    trip.hasSeats = true;
                } else {

                }

                if (await isJoined(id, req.session.user._id)) {
                    trip.hasJoined = true;
                } else {
                    trip.hasJoined = false;
                }
            }
        }

        res.render('details', { title: 'Detail\'s page', trip });
    } catch (err) {
        console.log(err);

        const errors = mapErrors(err);
        res.render('catalog', { title: 'Catalog Page', errors });
    }
});

router.get('/join/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {

        const trip = await joinTripById(id, req.session.user._id);
        console.log(trip);
        res.redirect('/details/' + id);
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Home Page', errors });
    }
});



module.exports = router;