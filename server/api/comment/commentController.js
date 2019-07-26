var Comment = require('./commentModel');
var Organisation = require('../organisation/organisationModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = (req, res, next) => {
    Organisation.findOne({ orgname: req.orgname })
        .then((organisation) => {
            return organisation.comments
        }, (err) => {
            next(err);
        }).then((comments) => {
            res.json(comments);
        });
};

exports.post = (req, res, next) => {
    var newComment = req.body;
    Organisation.findOne({ orgname: req.orgname })
        .then((organisation) => {
            var comments = organisation.comments;
            comments.push(newComment)

            organisation.save()
            res.json(newComment);
        }, (err) => {
            next(err);
        })
};

exports.delete = (req, res, next) => {

    Organisation.findOne({ orgname: req.orgname })
        .then((org) => {
            org.comments = [];
            org.save()
            res.json(org.comments);
        }, (err) => {
            next(err);
        })

};
