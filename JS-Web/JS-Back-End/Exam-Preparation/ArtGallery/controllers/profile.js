const { isUser } = require('../middleware/gurads.js');
const { profileInfoById } = require('../services/create.js');
const mapErrors = require('../util/mappers.js');


const router = require('express').Router();

router.get('/profile/:id', isUser(), async (req, res) => {
    const userId = req.params.id;
    const user = req.session.user;

    try {
        const props = await profileInfoById(userId);
        res.render('profile', { data: props, user });
    } catch (err) {
        const errors = mapErrors(err);
        res.render('home', { title: 'Art Gallery', errors });
    }
});

module.exports = router;