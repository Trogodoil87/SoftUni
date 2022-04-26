const { isUser } = require('../middleware/gurads.js');
const { getTripById, deleteTripById } = require('../services/post.js');
const mapErrors = require('../util/mappers.js');

const router = require('express').Router();

router.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;
    const trip = await getTripById(id);


    if (res.locals.user._id != trip.author.id) {
        res.redirect('/login');
    }

    try {
        await deleteTripById(id);

        res.redirect('/catalog');
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Home Page', errors });
    }

});


module.exports = router;
