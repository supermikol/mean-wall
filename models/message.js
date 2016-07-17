var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
  name: String,
  message: String,
  creation: { type: Date, default: Date.now}
})

module.exports = mongoose.model('Message', messageSchema);