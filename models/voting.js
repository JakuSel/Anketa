const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://Admin1:akademiasovy@ds229388.mlab.com:29388/recog');

const VoteSchema = new Schema({
  os: {
    type: String,
    required: true
  },
  points: {
    type: String,
    required: true
  }
});

// Create collection and add schema
const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;