const express = require('express');
const app = express();
const health = require('express-ping');
app.use(health.ping('/health'));
// const swaggerJsDoc = require('swagger-jsdoc')
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());

const routes = require('../app/routes/routes');
routes(app);

module.exports = app;