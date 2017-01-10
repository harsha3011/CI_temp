const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigSchema(); 
pipelineConfigSchema.findById("5874c097d61bf06b9cb8d2bd", function (err, mySchema) {
  if (!err) {
  	console.log(mySchema);
    mySchema.reponame=req.params.repoId;
	mySchema.username=req.params.username;
	mySchema.setup = req.body.setup;
	mySchema.stages = req.body.stages;
    mySchema.save(function (err) {
      // do something
  
  });

}
});
	res.send('updated');
	}
