
var Organisation = require('./organisation/organisationModel');

exports.middlewareForParan = (req, res, next) => {
    Organisation.findOne({ orgname: req.params.orgname }, 'orgname impediment',
        (err, result) => {
            if (!result) {
                err = new Error('UnauthorizedError')
                next(err);
            } else {
                req.orgname = req.params.orgname
                req.orgid = result._id
                next();
            }

        }
    )
}