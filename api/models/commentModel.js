const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    post_id: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    }
});

module.exports = mongoose.model('Comment', commentSchema);
