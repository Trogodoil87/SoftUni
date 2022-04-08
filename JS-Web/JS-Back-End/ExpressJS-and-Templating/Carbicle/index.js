const express = require('express');
const hbs = require('express-handlebars');

const home = require('./controllers/home.js');
const about = require('./controllers/about.js');
const create = require('./controllers/create.js');
const carService = require('./services/carService.js');
const accessoryService = require('./services/accessoryService.js');
const details = require('./controllers/details.js');
const notFound = require('./controllers/notFound.js');
const { deleteCar } = require('./controllers/deleteCar.js');
const edit = require('./controllers/edit.js');
const accessory = require('./controllers/accessory.js');

const initDb = require('./models/index.js');
const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);

app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));
app.use(carService());
app.use(accessoryService());

start();
async function start() {
    await initDb();
    app.route('/').get(home.get);
    app.route('/create').get(create.get).post(create.post);
    app.route('/about').get(about.get);
    app.route('/details/:id').get(details.get);
    app.get('/delete/:id', deleteCar)
    app.route('/edit/:id').get(edit.get).post(edit.post);
    app.route('/create/accessory').get(accessory.createPage).post(accessory.create)
    app.route('/accessory/:id').get(accessory.attachPage).post(accessory.attach);
    app.get('*', notFound.get)

    app.listen(3000, () => console.log('Listen on port 3000!'));
}
