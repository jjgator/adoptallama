var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  llama_name: String,
  description: String,
  img_link: String
});

module.exports = mongoose.model('User', userSchema);