const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res,err) {
	const pipelineConfig = new pipelineConfigModel(); 
	pipelineConfigModel.findOne({reponame:req.params.reponame,
	  owner:req.params.owner}, function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send('Already Exsist');
		}
		else{
			pipelineConfig.repo_URL=req.body.repo_URL;
			pipelineConfig.repo_Ref=req.body.repo_Ref;
			pipelineConfig.owner=req.params.owner;
 			pipelineConfig.reponame=req.params.reponame;
			pipelineConfig.setup = req.body.setup;
			pipelineConfig.stages = req.body.stages;
  			pipelineConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});
		}
	});
}