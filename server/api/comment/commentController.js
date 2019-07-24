var Comment = require('./commentModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = function (req, res, next) {

    Comment.find({})
        .then(function (comments) {
            console.log(comments)
            res.json(comments);
        }, function (err) {
            next(err);
        });
};

exports.post = function (req, res, next) {
    var newComment = req.body;

    Comment.create(newComment)
        .then(function (comment) {
            res.json(comment);
        }, function (err) {
            next(err);
        });
};

exports.delete = function (req, res, next) {
    Comment.remove({})
        .then(function (comments) {
            console.log(comments)
            res.json(comments);
        }, function (err) {
            next(err);
        });
};