const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    cardId: {
        type: Schema.Types.ObjectId,
        ref: 'cards'
    },
    body: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: [Schema.Types.ObjectId],
        ref: 'users',
        default: []
    }

});

module.exports = Post = mongoose.model('post', PostSchema)
