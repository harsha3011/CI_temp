const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExecutionsSchema = new Schema({
  state: { type: String, required: true },
  repoName: { type: String , required: true, unique: true},
  repoBranch: { type: String, required: true },
  stdout : {type:String},
  stderr:{type:String},
  exitcode:{type:String}
});

module.exports = mongoose.model('Executions', ExecutionsSchema);

