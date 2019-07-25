var Comment = require('./commentModel');
var Organisation = require('../organisation/organisationModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = function (req, res, next) {
    Organisation.findOne({ orgname: req.orgname })
        .then(function (organisation) {
            return organisation.comments
        }, function (err) {
            next(err);
        }).then(function (comments) {
            res.json(comments);
        });
};

exports.post = function (req, res, next) {
    var newComment = req.body;
    Organisation.findOne({ orgname: req.orgname })
        .then(function (organisation) {
            var comments = organisation.comments;
            comments.push(newComment)

            organisation.save()
            res.json(newComment);
        }, function (err) {
            next(err);
        })
};

exports.delete = function (req, res, next) {

    Organisation.findOne({ orgname: req.orgname })
        .then(function (org) {
            org.comments = [];
            org.save()
            res.json(org.comments);
        }, function (err) {
            next(err);
        })

};