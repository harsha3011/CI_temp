const rubericConfigModel=require('../models/rubericConfig.model');
module.exports=function (req, res,err) {
	const rubericConfig = new rubericConfigModel();

			rubericConfig.reponame=req.params.reponame;
 			rubericConfig.username=req.params.username;
			rubericConfig.setup = req.body.setup;
			rubericConfig.stages = req.body.stages;
  			rubericConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});
}
