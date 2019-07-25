
var Organisation = require('./organisation/organisationModel');

exports.middlewareForParan = function (req, res, next) {
    Organisation.findOne({ orgname: req.params.orgname }, 'orgname impediment',
        function (err, result) {
            if (!result) {
                err = new Error('UnauthorizedError')
                next(err);
            } else {
                req.orgname = req.params.orgname
                next();
            }

        }
    )


}