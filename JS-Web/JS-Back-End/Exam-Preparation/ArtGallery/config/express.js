const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');
const userSession = require('../middleware/userSession.js')

module.exports = (app) => {

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);
    app.set('view engine', 'hbs');

    app.use('/style', express.static('style'));

    app.use(session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: 'auto' }
    }));
    app.use(express.urlencoded({ extended: true }));
    app.use(userSession());
}