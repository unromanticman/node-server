const express = require('express');
const routes = express.Router();

routes.use('/', require('./test/test'));

module.exports = routes;