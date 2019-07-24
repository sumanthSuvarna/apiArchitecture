var router = require('express').Router();
var logger = require('../../util/logger');

var comments = [];

// setup boilerplate route jsut to satisfy a request
// for building

router.route('/').get(function (req, res, next) {
    res.json(comments);
});


router.route('/').post(function (req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

router.route('/').delete(function (req, res) {
    comments = []
    res.json(comments);
});

module.exports = router;