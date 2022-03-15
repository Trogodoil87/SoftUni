const express = require('express');
const hbs = require('express-handlebars');

const catsService = require('./services/data.js');

const addBreed = require('./controllers/addBreed.js');
const addCat = require('./controllers/addCat.js');
const catShelter = require('./controllers/catShelter.js');
const editCat = require('./controllers/editCat.js');
const { home } = require('./controllers/home.js');
const { notFound } = require('./controllers/notFound.js');

const app = express();

app.engine('hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/content', express.static('content'));
app.use(catsService());

app.get('/', home);
app.get('/addBreed', addBreed.get);
app.post('/addBreed', addBreed.post);
app.get('/addCat', addCat.get);
app.post('/addCat', addCat.post);
app.get('/catShelter/:id', catShelter.get);
app.post('/catShelter/:id', catShelter.post);
app.get('/editCat/:id', editCat.get);
app.post('/editCat/:id', editCat.post);
app.post('/editCat', editCat.post);

app.all('*', notFound);

app.listen(3000, () => console.log('Listen on port 3000!'));