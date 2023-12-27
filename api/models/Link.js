const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  title: String,
  uri: String
})

module.exports = mongoose.model('Link', LinkSchema);