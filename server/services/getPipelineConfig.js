const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
    const pipelineConfig = new pipelineConfigSchema();
pipelineConfigSchema.findOne({reponame:req.params.reponame,
 username:req.params.username}, function (err, mySchema) {
 if (!err) {
  
   console.log(mySchema);
  
 res.send(mySchema);
    
}
});
}
   