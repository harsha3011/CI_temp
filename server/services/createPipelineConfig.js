const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigSchema(); 

    pipelineConfig.reponame=req.params.reponame;
    pipelineConfig.username=req.params.username;
	pipelineConfig.setup = req.body.setup;
	pipelineConfig.stages = req.body.stages;
    pipelineConfig.save(function (err) {
     
      if (err) throw err;
      console.log('inserted');
    });


	res.send('inserted');
	}
