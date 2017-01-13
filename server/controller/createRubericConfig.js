const rubericConfigModel=require('../models/rubericConfig.model');
module.exports=function (req, res,err) {
	const rubericConfig = new rubericConfigModel(); 
	rubericConfigModel.findOne({reponame:req.params.reponame,
	  username:req.params.username,branch:req.params.branch}, function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send('Already Exsist');
		}
		else{
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
	});
}
