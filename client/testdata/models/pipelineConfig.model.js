const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StageSchema = new Schema({
  stage: { type: String, required: true },
  configString: { type: String, required: true }
}, {
  _id: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

StageSchema.virtual('config')
  .get(function() { return JSON.parse(this.configString); })
  .set(function(config) { this.set('configString', JSON.stringify(config)); })

const PipelineSchema = new Schema({
  reponame:{type:String},
  owner:{type:String},
  repo_URL:{type:String},
  repo_Ref:{type:Array},
  setup:{type: String },
  stages: [StageSchema]
});
PipelineSchema.index({ reponame: 1, owner: 1}, { unique: true });


module.exports = mongoose.model('Projects', PipelineSchema);

