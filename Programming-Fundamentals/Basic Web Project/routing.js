const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', phonebookController.index);
  app.post('/add', phonebookController.addPhonebookPost);
  app.post('/delete', phonebookController.deleteContact);
  app.get('/editUser', phonebookController.editNumber);
  app.get('/editNumber', phonebookController.editUser);
};