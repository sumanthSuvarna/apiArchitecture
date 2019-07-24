var express = require('express');
var app = express();

var api = require('./api/api');
var err = require('./middleware/err')
var config = require('./config/config');
var logger = require('./util/logger');

require('mongoose').connect(config.db.url, { useNewUrlParser: true });

// setup the app middlware
require('./middleware/appMiddleware')(app);

//setup the api
app.use('/orgs/xendit/', api)

module.exports = app;