var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orgSchema = new Schema({
    orgname: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('organisation', orgSchema);