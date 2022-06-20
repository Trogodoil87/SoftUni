const authController = require('../controllers/auth.js');
const homeController = require('../controllers/home.js');
const createController = require('../controllers/create.js');
const editController = require('../controllers/edit.js');
const deleteController = require('../controllers/deletePublication.js');
const profileController = require('../controllers/profile.js');

module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(createController);
    app.use(editController);
    app.use(deleteController);
    app.use(profileController);
}