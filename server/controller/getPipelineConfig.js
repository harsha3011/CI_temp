const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigModel();
	pipelineConfigModel.findOne({reponame:req.params.repoName,
		owner:req.params.ownerName}, function (err, mySchema) {
		if (err) {
			console.log("error");
			
		};
		if(mySchema){
			res.send(mySchema);
		}
		else{
			console.log("Repository doesn't exist");
			res.send("Repository doesn't exist");
		}
	});
}
