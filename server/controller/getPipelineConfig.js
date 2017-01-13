const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigModel();
	pipelineConfigModel.findOne({reponame:req.params.reponame,
		owner:req.params.owner}, function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send(mySchema);
		}
		else{
			res.send("Repository doesn't exist");
		}
	});
}
   