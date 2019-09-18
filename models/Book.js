const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  authors: [String],
  image: String,
  link: String
});

module.exports = mongoose.model("Book", BookSchema);