const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EvalFindingSchema = new Schema({
  owner: { type: String},
  repoName: { type: String},
  repoBranch: { type: String},
  eslintConfig: { type: Object},
  htmlhintConfig: { type: Object},
  mochaConfig: { type: Object},
  istanbulConfig: { type: Object}
});

module.exports = mongoose.model('EvalFindings', EvalFindingSchema);
