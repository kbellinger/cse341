const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/url', controller.getNames);
routes.use('/contacts', require('./contacts'));

module.exports = routes;
