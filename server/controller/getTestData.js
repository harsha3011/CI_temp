var result;
module.exports=function(owner,reponame,callback)
const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigModel();
	pipelineConfigModel.findOne({reponame:reponame,
		owner:owner}, function (err, mySchema) {
		if (err) {
			console.log("error");
		};
		if(mySchema){
			result=res.body;
		}
		else{
			console.log("Repository doesn't exist");
			res.send("Repository doesn't exist");
		}
	});
  callback(null,result);
}
