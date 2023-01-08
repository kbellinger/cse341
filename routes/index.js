const routes = require('express').Router();

const controller = require('../controllers');

routes.get('/url', controller.getNames);

module.exports = routes;