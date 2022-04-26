const { isUser, isGuest } = require('../middleware/gurads.js');
const { profileHistoryById } = require('../services/post.js');
const mapErrors = require('../util/mappers.js');

const router = require('express').Router();


router.get('/profile/:userId', isUser(), async (req, res) => {
    const userId = req.params.userId;
    const user = await profileHistoryById(userId);
    res.render('profile', { title: 'Profile Page', user });
});


module.exports = router;
