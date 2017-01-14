const projectListModel=require('../models/pipelineConfig.model');
module.exports=function (req, res) {
	const projectList = new projectListModel();
	projectListModel.find({owner:req.params.owner}, 
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
   