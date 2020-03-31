const mongoose = require("mongoose");

const singleCharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("singleCharacter", singleCharacterSchema);
