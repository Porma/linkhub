const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Link', LinkSchema);