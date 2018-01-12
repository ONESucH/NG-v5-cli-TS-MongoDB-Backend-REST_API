var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  albums: String,
  name_music: String,
  author: String,
  genre: String,
  post_data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Music', BookSchema);
