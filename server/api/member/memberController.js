var Member = require('./memberModel');
var Organisation = require('../organisation/organisationModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = (req, res, next) => {
    Organisation.findOne({ orgname: req.orgname })
        .then((org) => {
            return org.members
        }, (err) => {
            next(err);
        }).then((members) => {
            res.json(members);
        });
};

exports.post = (req, res, next) => {
    var newMember = req.body;
    Organisation.findOne({ orgname: req.orgname })
        .then((org) => {
            var members = org.members;
            members.push(newMember)
            org.save()
            res.json(newMember);
        }, (err) => {
            next(err);
        })
};

exports.delete = (req, res, next) => {

    Organisation.findOne({ orgname: req.orgname })
        .then((org) => {
            org.members = [];
            org.save()
            res.json(org.members);
        }, (err) => {
            next(err);
        })
};