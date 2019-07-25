var express = require('express');
var app = express();

var api = require('./api/api');
var middlewareForParan = require('./api/validateOrg').middlewareForParan
var err = require('./middleware/err')
var config = require('./config/config');
var logger = require('./util/logger');

var Organisation = require('./api/organisation/organisationModel');

require('mongoose').connect(config.db.url, { useNewUrlParser: true });

if (config.seed) {
    require('./util/seed');
}


// setup the app middlware
require('./middleware/appMiddleware')(app);



//setup the api
app.use('/orgs/:orgname', middlewareForParan, api)

// set up global error handling
app.use(function (err, req, res, next) {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid ');
        return;
    }
    logger.error(err.stack);
    res.status(500).send('Not a valid organisation');
});

module.exports = app;