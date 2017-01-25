var mocha;
var eslint;
var htmlhint;
var istanbul;
var result;

const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req,res,err,owner,repo_URL,repobranch,reponame,callback) {
	const pipelineConfig = new pipelineConfigModel();
	pipelineConfigModel.findOne({reponame:reponame,
		owner:owner}, function (err, mySchema) {
		if (err) {
			console.log("error");
		};
		if(mySchema){
			mocha=mySchema.stages.mocha;
			istanbul=mySchema.stages.istanbul;
			eslint=mySchema.stages.eslint;
			htmlhint=mySchema.stages.htmlhint;
		}
	});
  callback(null,req,res,err,owner,repo_URL,repobranch,reponame,mocha,eslint,htmlhint,istanbul);
}
