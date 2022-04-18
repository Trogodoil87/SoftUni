const express = require('express');
const expressConfig = require('./config/express.js');
const databaseConfig = require('./config/database.js');
const routesConfig = require('./config/routes.js');



start();
async function start() {

    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);


    app.get('/', (req, res) => {
        res.render('home');
    })
    app.get('*', (req, res) => {res.render('404')});

    app.listen(3000, () => console.log('Listen on port 3000!'));
}