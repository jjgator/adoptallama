const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  llama_name: String,
  description: String,
  img_link: String
});

module.exports = mongoose.model('User', userSchema);