const { route } = require('express/lib/application');
const { isUser, isGuest } = require('../middleware/gurads.js');
const { register, login } = require('../services/user.js');
const { mapErrors } = require('../util/mappers.js');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

//TODO check form action, method, field names
router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '') {
            throw new Error('Password is required');
        }
        if (req.body.password != req.body.repass) {
            throw new Error('Password\'s don\'t match');
        }
        const user = await register(req.body.email, req.body.password, req.body.gender);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect
    } catch (err) {
        //TODO send errors
        const errors = mapErrors(err);
        console.log(errors);
        res.render('register', { data: { email: req.body.email, gender: req.body.gender }, errors });
    }
});

router.get('/login', isGuest(), (req, res) => {

    res.render('login');
});

//TODO check form action, method, field names
router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); //TODO check redirect
    } catch (err) {
        //TODO send errors
        const errors = mapErrors(err);
        res.render('login', { data: { email: req.body.email }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;