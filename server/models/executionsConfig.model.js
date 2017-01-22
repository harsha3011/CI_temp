const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExecutionsSchema = new Schema({
  state: { type: String, required: true },
  repoName: { type: String , required: true},
  repoBranch: { type: String, required: true },
  stdout : {type:String},
  stderr:{type:String},
  exitcode:{type:String},
  starttime:{type:Date},
  endtime:{type:Date}
});

module.exports = mongoose.model('Executions', ExecutionsSchema);

