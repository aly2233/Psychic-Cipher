const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    handle: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      require: false
    },
    astrology_sign: {
      type: String,
      required: false
    },
    liked_posts: {
      type: [Schema.Types.ObjectId],
      ref: 'posts',
      default: undefined
    },
    friends: {}
  }, {
    timestamps: true
  })


  module.exports = User = mongoose.model('User', UserSchema);