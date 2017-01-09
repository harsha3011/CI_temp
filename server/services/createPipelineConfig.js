
const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	console.log(req.body.pipeline[0].stage);
	const pipelineConfig = new pipelineConfigSchema(); 
	pipelineConfig.setupSettings = req.body.setupSettings;
	pipelineConfig.pipeline = req.body.pipeline;

	pipelineConfig.save(function(err) {
		if (err) throw err;
		
		console.log('saved in mongodb');
	});

	res.send('inserted');
	}
