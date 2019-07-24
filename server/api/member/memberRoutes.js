var router = require('express').Router();
var logger = require('../../util/logger');

var members = []

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/').get((req, res, next) => {
    res.json(members);
});


module.exports = router;