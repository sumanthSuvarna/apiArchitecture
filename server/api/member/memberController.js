var Member = require('./memberModel');
var Organisation = require('../organisation/organisationModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = function (req, res, next) {
    Organisation.findOne({ orgname: req.orgname })
        .then(function (org) {
            return org.members
        }, function (err) {
            next(err);
        }).then(function (members) {
            res.json(members);
        });
};

exports.post = function (req, res, next) {
    var newMember = req.body;
    Organisation.findOne({ orgname: req.orgname })
        .then(function (org) {
            var members = org.members;
            members.push(newMember)
            org.save()
            res.json(newMember);
        }, function (err) {
            next(err);
        })
};

exports.delete = function (req, res, next) {

    Organisation.findOne({ orgname: req.orgname })
        .then(function (org) {
            org.members = [];
            org.save()
            res.json(org.members);
        }, function (err) {
            next(err);
        })
};