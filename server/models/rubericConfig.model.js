const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rubericStageSchema = new Schema({
  stage: { type: String, required: true },
  acceptCriteria: { type: String, required: true }
}, {
  _id: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

rubericStageSchema.virtual('criteria')
  .get(function() { return JSON.parse(this.acceptCriteria); })
  .set(function(criteria) { this.set('acceptCriteria', JSON.stringify(criteria)); })

const RubericSchema = new Schema({
  reponame:{type:String},
  username:{type:String},
  branch:{type:String},
  stages: [rubericStageSchema]
});
RubericSchema.index({ reponame: 1, username: 1,branch: 1}, { unique: true });

module.exports = mongoose.model('Ruberic', RubericSchema);