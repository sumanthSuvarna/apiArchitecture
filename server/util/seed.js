var Org = require('../api/organisation/organisationModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');


var organisations = [
    { orgname: 'xendit' },
    { orgname: 'monster' },
    { orgname: 'google' },
    { orgname: 'facebook' },
    { orgname: 'microsoft' },
    { orgname: 'apple' }
];

var createDoc = function (model, doc) {
    return new Promise(function (resolve, reject) {
        new model(doc).save(function (err, saved) {
            return err ? reject(err) : resolve(saved);
        });
    });
};

var cleanDB = function () {
    logger.log('... cleaning the DB');
    var cleanPromises = [Org]
        .map(function (model) {
            return model.remove().exec();
        });
    return Promise.all(cleanPromises);
}


var createOrganisations = function (data) {
    var promises = organisations.map(function (organisation) {
        return createDoc(Org, organisation);
    });

    return Promise.all(promises)
        .then(function (organisations) {
            return _.merge({ organisations: organisations }, data || {});
        });
};


cleanDB()
    .then(createOrganisations)
    .then(logger.log.bind(logger))
    .catch(logger.log.bind(logger));