const { getTripById, tripViewModel, updateTripOffer } = require('../services/post.js');
const { isUser, isGuest } = require('../middleware/gurads.js');
const mapErrors = require('../util/mappers.js');


const router = require('express').Router();




router.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = tripViewModel(await getTripById(id));

    if (res.locals.user._id != trip.author.id) {
        res.redirect('/login');
    }

    res.render('edit', { title: 'Edit Page', data: trip });
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = tripViewModel(await getTripById(id));

    if (res.locals.user._id != trip.author.id) {
        res.redirect('/login');
    }

    const update = {
        id,
        startPoint: req.body.startPoint.trim(),
        endPoint: req.body.endPoint.trim(),
        date: req.body.date.trim(),
        time: req.body.time.trim(),
        image: req.body.image.trim(),
        brand: req.body.brand.trim(),
        seats: req.body.seats.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim()
    };

    try {

        await updateTripOffer(id, update);

        res.redirect('/details/' + id);
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);
        res.render('home', { title: 'Home Page', errors, data: update })
    }

});

module.exports = router;
