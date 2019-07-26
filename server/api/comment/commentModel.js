var mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    comment: {
        type: String
    },
    org: { type: Schema.Types.ObjectId, ref: 'organisation' },
});

CommentSchema.plugin(mongoose_delete, { deletedAt: true })

module.exports = mongoose.model('comment', CommentSchema);