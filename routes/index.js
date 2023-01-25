const routes = require('express').Router();

// const controller = require('../controllers');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

// routes.get('/url', controller.getNames);
routes.use('/contacts', require('./contacts'));

module.exports = routes;
