const pipelineConfigModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {

    const pipelineConfig = new pipelineConfigModel();
    pipelineConfigModel.findOne({reponame:req.params.reponame,
    owner:req.params.owner}, function (err, mySchema) {
    if (mySchema) {
      mySchema.reponame=req.params.reponame;
      mySchema.owner=req.params.owner;
      mySchema.setup = req.body.setup;
      mySchema.stages = req.body.stages;
      mySchema.save(function (err) {
        if(!err){ res.send("Updated")}
      });
    }
    else{
      res.send('Repository doesnot exist');
    }
  });
}
