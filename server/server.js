var express = require('express');
var app = express();

var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');

// setup the app middlware
require('./middleware/appMiddleware')(app);

//setup the api
app.use('/orgs/xendit/', api)

module.exports = app;