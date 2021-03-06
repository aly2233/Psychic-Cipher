const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CardSchema = new Schema({
  arcana: {
    type: String,
    required: true
  },
  nameShort: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  valueInt: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  meaning: {
    up: {
      type: String,
      required: true
    },
    rev: {
      type: String,
      required: true
    }
  },
  photoUrls: {
    up: {
      type: String,
      required: true
    },
    rev: {
      type: String,
      required: true
    }
  }
}, {
  timestamps: true
});

module.exports = Card = mongoose.model("Card", CardSchema)