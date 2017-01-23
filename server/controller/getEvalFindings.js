const evalFindingsModel=require('../models/evalFindingsConfig.model');
module.exports=function (req, res) {
	const projectList = new evalFindingsModel();
	// console.log(new Date(req.params.starttime).toISOString());
		evalFindingsModel.find({owner:req.params.owner,repoName:req.params.repoName,repoBranch:req.params.repoBranch,starttime:req.params.starttime}, 
		function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send(mySchema);
		}
		else{
			res.send("User doesn't exist");
		}
	});
}
   