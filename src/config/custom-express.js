const express = require('express');
const app = express();
const swaggerDoc = require('./swaggerDoc');
const routes = require('../app/routes/routes');
const health = require('express-ping');

app.use(health.ping('/health'));
app.use(express.json());

routes(app);
swaggerDoc(app);

module.exports = app;
