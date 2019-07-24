var Member = require('./memberModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = function (req, res, next) {

    Member.find({})
        .then(function (members) {
            console.log(members)
            res.json(members);
        }, function (err) {
            next(err);
        });
};

exports.post = function (req, res, next) {
    var newMember = req.body;

    Member.create(newMember)
        .then(function (member) {
            res.json(member);
        }, function (err) {
            next(err);
        });
};

exports.delete = function (req, res, next) {
    Member.remove({})
        .then(function (members) {
            console.log(members)
            res.json(members);
        }, function (err) {
            next(err);
        });
};