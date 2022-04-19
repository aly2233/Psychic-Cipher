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
    favorite_cards: {
      type: [Schema.Types.ObjectId],
      ref: 'cards',
      default: [],
      validate: [arrayLimit, `{Path} Exceeds limit of 5`]
    },
    friends: {}
  }, {
    timestamps: true
  })

  function arrayLimit(val) {
    return val.length <= 5;
  }


  module.exports = User = mongoose.model('User', UserSchema);