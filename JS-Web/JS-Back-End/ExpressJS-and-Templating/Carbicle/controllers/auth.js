const { Router } = require('express');

const { body, validationResult } = require('express-validator');
const { default: isAlphanumeric } = require('validator/lib/isAlphanumeric');
const { mapError } = require('../services/utils.js');

const router = Router();

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register Page' });
});

router.post('/register',
    body('username').trim(),
    body('password').trim(),
    body('repeatPassword').trim(),
    body('username').isLength({ min: 3 }).withMessage('Username must be at least 5 characters long.')
        .isAlphanumeric().withMessage('Username may be contain only alphanumeric characters.'),
    body('password')
        .isLength({ min: 3 }).withMessage('Password must be at least 8 characters long.')
        .isAlphanumeric().withMessage('Password may be contain only alphanumeric characters.'),
    body('repeatPassword').custom((value, { req }) => { return value == req.body.password; })
        .withMessage('Password\'s don\'t match'),
    async (req, res) => {
        const { errors } = validationResult(req);

        try {
            if (errors.length > 0) {
                throw errors;
            }
            await req.auth.register(req.body.username, req.body.password);
            res.redirect('/');
        } catch (err) {
            res.locals.errors = mapError(err);

            res.render('register', { title: 'Register Page', data: { username: req.body.username } });
        }
    });

router.get('/login', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

router.post('/login', async (req, res) => {
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/');
    } catch (error) {
        res.locals.errors = [{ msg: error.message }]
        res.render('login', { title: 'Login Page' });
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;