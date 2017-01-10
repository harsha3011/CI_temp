const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigSchema(req.body);
	pipelineConfig.findOne({ setup:'npm install' }, function(err, settings) {
 	pipelineConfig.setup = settings.setup;
	pipelineConfig.stages = settings.stages;
});
	

	pipelineConfig.save(function(err) {
		if (err) throw err;
		
		console.log('saved in mongodb');
	});

	res.send('inserted');
	}
