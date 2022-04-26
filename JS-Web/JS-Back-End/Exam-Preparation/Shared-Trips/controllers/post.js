const router = require('express').Router();

const { isUser, isGuest } = require('../middleware/gurads.js');
const { createTrip } = require('../services/post.js');
const mapErrors = require('../util/mappers.js');

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {

    const trip = {
        startPoint: req.body.startPoint.trim(),
        endPoint: req.body.endPoint.trim(),
        date: req.body.date.trim(),
        time: req.body.time.trim(),
        image: req.body.image.trim(),
        brand: req.body.brand.trim(),
        seats: req.body.seats.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim(),
        author: req.session.user._id
    };

    try {

        await createTrip(trip);

        res.redirect('/catalog');
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        res.render('create', { data: trip, errors });
    }

});

module.exports = router;