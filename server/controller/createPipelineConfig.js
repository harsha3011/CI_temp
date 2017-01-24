const pipelineConfigModel=require('../models/pipelineConfig.model');

const jwtDecode=require('jwt-decode');
module.exports=function (req, res,next) {
	const pipelineConfig = new pipelineConfigModel();
		console.log("hello config");
		const token = cookie.load('token');
	       var decoded = jwtDecode(token);
	       console.log(decoded.accessToken);

	var hookData={
	 "name": "web",
	 "active": true,
	 "events": [
		 "push"
	 ],
	 "config": {
		 "url": "http://localhost:9080",
		 "content_type": "json",
		 "insecure_ssl": "1"
	 }
	}
	next();
  // var decoded = jwtDecode(token);
  //   var code=decoded.accessToken;
  //   console.log(code);
  // var data=req.body;
  // var owner=req.params.ownerName;
  // var repo=req.params.repoName;
	//      Request
  //       .post('http://api.github.com/repos/'+owner+'/'+repo+'/hooks?access_token='+code)
  //       .set('Content-Type', 'application/json')
  //       .send(data)
  //       .end(function(err, res) {
  //         if(err){
  //           console.log(err);
  //         }else
  //         console.log("success");
  //       });
	pipelineConfigModel.findOne({reponame:req.params.reponame,
	  owner:req.params.owner}, function (err, mySchema) {
		if (err) throw error;
		if(mySchema){
			res.send('Already Exsist');
		}
		else{
			pipelineConfig.repo_URL=req.body.repo_URL;
			pipelineConfig.repo_Ref=req.body.repo_Ref;
			pipelineConfig.owner=req.params.owner;
 			pipelineConfig.reponame=req.params.reponame;
			pipelineConfig.setup = req.body.setup;
			pipelineConfig.stages = req.body.stages;
  			pipelineConfig.save(function (err) {
     			if(!err){
     				res.send("created")
     			}
  			});

		}
	});

}
