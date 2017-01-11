const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
const pipelineConfig = new pipelineConfigModel(); 

  pipelineConfig.reponame=req.params.reponame;
  pipelineConfig.username=req.params.username;
	pipelineConfig.setup = req.body.setup;
	pipelineConfig.stages = req.body.stages;
  
  pipelineConfig.save(function (err) {
      res.send(err);
    });

	}
