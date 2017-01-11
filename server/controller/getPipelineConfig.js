const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigModel();
	pipelineConfigModel.findOne({reponame:req.params.reponame,
		username:req.params.username}, function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send(mySchema);
		}
		else{
			res.send("IRepository doesnot exist");
		}
	});
}
   