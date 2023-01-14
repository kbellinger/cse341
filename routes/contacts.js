const routes = require('express').Router();

const contactController = require('../controllers/contacts');

routes.get("/allcontacts", contactController.getAllContacts);
routes.get("/:id", contactController.getOneContact);

module.exports = routes;