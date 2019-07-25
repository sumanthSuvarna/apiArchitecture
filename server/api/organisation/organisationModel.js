var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orgSchema = new Schema({
    orgname: {
        type: String,
        required: true,
        unique: true
    },
    members: [{ type: Schema.Types.ObjectId, ref: 'member' }],
    comments: [{ comment: String }]
});

module.exports = mongoose.model('organisation', orgSchema);