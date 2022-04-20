const { isUser, isGuest } = require('../middleware/gurads.js');
const { register, login } = require('../services/user.js');
const { mapErrors } = require('../util/mappers.js');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '') {
            throw new Error('Password is required');
        }
        if (req.body.password != req.body.repass) {
            throw new Error('Password\'s don\'t match');
        }
        if(req.body.password.trim().length < 5) {
            throw new Error('Password must be at least 5 characters long');
        }

        const user = await register(req.body.email, req.body.password, req.body.description);
        req.session.user = user;
        res.redirect('/'); 
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.render('register', { data: { email: req.body.email, description: req.body.description }, errors });
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); 
    } catch (err) {
        const errors = mapErrors(err);
        console.log(err);
        res.render('login', { data: { email: req.body.email }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;