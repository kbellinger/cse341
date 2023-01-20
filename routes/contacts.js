const routes = require('express').Router();

const contactController = require('../controllers/contacts');

routes.get('/allcontacts', contactController.getAllContacts);
routes.get('/:id', contactController.getOneContact);
routes.post('/new', contactController.createContact);
routes.put('/:id', contactController.updateContact);
routes.delete('/:id', contactController.deleteContact);

module.exports = routes;
