var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: {
        type: String
    }
});

module.exports = mongoose.model('comment', CommentSchema);