var router = require('express').Router();
var logger = require('../../util/logger');

// setup boilerplate route jsut to satisfy a request
// for building
router.route('/')
    .get(function (req, res, next) {
        logger.log('Hey from user!!');
        // next(new Error('messed up'));
        res.send({ ok: 'get request recieved' });
    });

module.exports = router;