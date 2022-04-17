const express = require('express');
const hbs = require('express-handlebars');
const session = require('express-session');

const initDb = require('./models/index.js');

const carService = require('./services/carService.js');
const accessoryService = require('./services/accessoryService.js');
const authService = require('./services/auth.js');

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');
const create = require('./controllers/create.js');
const details = require('./controllers/details.js');
const notFound = require('./controllers/notFound.js');
const deleteCar = require('./controllers/deleteCar.js');
const edit = require('./controllers/edit.js');
const accessory = require('./controllers/accessory.js');
const attach = require('./controllers/attach.js');
const authController = require('./controllers/auth.js');
const { isLoggedIn } = require('./services/utils.js');



start();
async function start() {
    await initDb();

    const app = express();

    app.engine('hbs', hbs.create({
        extname: '.hbs'
    }).engine);

    app.set('view engine', 'hbs');

    app.use(session({
        secret: 'my secret',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: 'auto' }
    }));
    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(carService());
    app.use(accessoryService());
    app.use(authService());

    app.route('/').get(home.get);
    app.get('/about', about.get);
    app.get('/details/:id', details.get);

    app.route('/delete/:id')
        .get(deleteCar.get)
        .post(deleteCar.post);

    app.route('/create')
        .get(isLoggedIn(), create.get)
        .post(isLoggedIn(), create.post);

    app.route('/edit/:id')
        .get(isLoggedIn(), edit.get)
        .post(isLoggedIn(), edit.post);

    app.route('/accessory')
        .get(isLoggedIn(), accessory.get)
        .post(isLoggedIn(), accessory.post);

    app.route('/attach/:id')
        .get(isLoggedIn(), attach.get)
        .post(isLoggedIn(), attach.post);

    app.use(authController);

    app.get('*', notFound.get)

    app.listen(3000, () => console.log('Listen on port 3000!'));
}
