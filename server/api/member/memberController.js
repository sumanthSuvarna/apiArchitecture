var Member = require('./memberModel');
var Organisation = require('../organisation/organisationModel');
var _ = require('lodash');
var logger = require('../../util/logger');

exports.get = function (req, res, next) {
    mySort = { followers: -1 }
    Member.find({ org: req.orgid },
        function (err, result) {
            if (err) next(err);
            else logger.log(result)
        }).sort(mySort)
        .then(function (members) {
            res.json(members)
        }, function (err) {
            next(err);
        })
};

exports.post = function (req, res, next) {
    var newMember = req.body;
    newMember["org"] = req.orgid
    const member = new Member(newMember)
    member.save(function (err) {
        if (err) next(err);
    })
    res.json(newMember)
};

exports.delete = function (req, res, next) {
    Member.delete({ org: req.orgid }, function (err, data) {
        if (err) next(err);
    })
    res.json([])
};
