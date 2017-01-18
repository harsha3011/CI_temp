const executionsListModel=require('../models/executionsConfig.model');
module.exports=function (req, res) {
	const executionsList = new executionsListModel();
	executionsListModel.find({repoName:req.params.reponame,repoBranch:req.params.repobranch}, 
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
   