const reportListModel=require('../models/evalfindingsConfig.model');
module.exports=function (req, res) {
	const reportList = new reportListModel();
	reportListModel.find({owner:req.params.owner,
  							repoName: req.params.owner,
  							repoBranch: req.params.owner,
  							buildstarttime:starttime
  						}, 
		function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send(mySchema);
		}
		else{
			res.send("doesn't exist");
		}
	});
}
   