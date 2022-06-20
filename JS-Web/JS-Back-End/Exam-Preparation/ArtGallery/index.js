const express = require('express');
const expressConfig = require('./config/express.js');
const databaseConfig = require('./config/database.js');
const routesConfig = require('./config/routes.js');
const notFound = require('./controllers/notFound.js');


start();
async function start() {

    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.use(notFound)
    app.listen(3000, () => console.log('Listen on port 3000!'));
}