const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigSchema(); 
	pipelineConfig.setup = req.body.setup;
	pipelineConfig.stages = req.body.stages;

	pipelineConfig.save(function(err) {
		if (err) throw err;
		
		console.log('saved in mongodb');
	});

	res.send('inserted');
	}
