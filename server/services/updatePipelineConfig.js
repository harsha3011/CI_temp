const pipelineConfigSchema=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
    const pipelineConfig = new pipelineConfigSchema();
pipelineConfigSchema.findOne({reponame:req.params.reponame,
 username:req.params.username}, function (err, mySchema) {
 if (!err) {
     console.log(req.params.reponame);
   mySchema.reponame=req.params.reponame;
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
