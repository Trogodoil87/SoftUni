const authController = require('../controllers/auth.js');
const homeController = require('../controllers/home.js');
const postController = require('../controllers/post.js');
const editController = require('../controllers/edit.js');
const deleteController = require('../controllers/delete.js');
const profileController = require('../controllers/profile.js');
const notFound = require('../controllers/notFound.js');

module.exports = (app) => {
    app.use(authController);
    app.use(homeController);
    app.use(postController);
    app.use(editController);
    app.use(deleteController);
    app.use(profileController);
    app.use(notFound);
}