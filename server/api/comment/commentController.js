var Comment = require('./commentModel');
var Organisation = require('../organisation/organisationModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = function (req, res, next) {
    Comment.find({ org: req.orgid, deleted: false }, 'comment impediment')
        .then(function (comments) {
            res.json(comments)
        }, function (err) {
            next(err);
        })
};

exports.post = function (req, res, next) {
    var newComment = req.body;
    newComment["org"] = req.orgid
    const newCommant = new Comment(newComment)
    newCommant.save(function (err) {
        if (err) next(err);
    })
    res.json(newComment)
};

exports.delete = function (req, res, next) {
    Comment.delete({ org: req.orgid }, function (err, data) {
        if (err) next(err);
    })
    res.json([])
};
