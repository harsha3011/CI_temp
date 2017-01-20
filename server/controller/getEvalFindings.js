const evalFindingsModel=require('../models/evalFindingsConfig.model');
module.exports=function (req, res) {
	const projectList = new evalFindingsModel();
		evalFindingsModel.find({owner:req.params.owner,repoName:req.params.repoName}, 
		function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send(mySchema);
			console.log(mySchema[0].eslintConfig.hi);
		}
		else{
			res.send("User doesn't exist");
		}
	});
}
   