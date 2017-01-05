'use strict'

const express     = require('express');
const bodyParser  = require('body-parser');
const	routes = require('../routes');
const app         = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(routes);

module.exports = app;
