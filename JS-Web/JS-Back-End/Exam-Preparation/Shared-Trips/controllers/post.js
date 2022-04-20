const { isUser } = require('../middleware/gurads.js');
const { mapErrors, tripViewModel } = require('../util/mappers.js');
const { createTrip, getById, joinTrip } = require('../services/post.js');

const router = require('express').Router();

router.get('/offer', isUser(), (req, res) => {
    res.render('create');
});

router.post('/create', isUser(), async (req, res) => {
    const model = {
        creator: req.session.user._id,
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        buddies: req.body.buddies
    };

    try {
        const trip = await createTrip(model);
        res.redirect('/');
    } catch (err) {
        const errors = mapErrors(err);
        console.log(errors);
        res.render('create', { title: 'New Offer', errors, data: model });
    }
});

router.get('/join/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        
        await joinTrip(id);
        res.redirect('/details/' + id);
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Home Page', errors });
    }
})

module.exports = router;
