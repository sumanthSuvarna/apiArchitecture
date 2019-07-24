var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./memberController');

// setup boilerplate route jsut to satisfy a request
// for building

router.route('/')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete)

module.exports = router;