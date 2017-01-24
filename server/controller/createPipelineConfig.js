const pipelineConfigModel=require('../models/pipelineConfig.model');
const Request=require('superagent');
const jwtDecode=require('jwt-decode');
module.exports=function (req, res) {
	const pipelineConfig = new pipelineConfigModel();
		console.log("hello config");
	var hookData={
	 "name": "web",
	 "active": true,
	 "events": [
		 "push"
	 ],
	 "config": {
		 "url": 'https://dca0fa5d.ngrok.io/'+req.params.owner+'/'+req.params.reponame+'/projects',
		 "content_type": "json"
	 }
	}
	     Request
        .post('http://api.github.com/repos/'+req.params.owner+'/'+req.params.reponame+'/hooks?access_token='+req.body.access_token)
        .set('Content-Type', 'application/json')
        .send(hookData)
        .end(function(err, resp) {
          if(err){
            console.log(err);
          }else{
          console.log("success");
					console.log(resp.body);
				}
        });
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
