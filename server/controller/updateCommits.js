const express = require('express');
const Request = require ('superagent');
var url='';
const router = express.Router();
const createExecutionConfig=require('../controller/createExecutionConfig');
const createExecutionData=require('./createExecutionData');
const runDocker=require('../services/runPipeline');
const async=require('async');

var data=function (req, res,err)
{

	var payload=JSON.parse(req.body.payload);
	console.log(payload);
	if(payload.head_commit!=undefined)
	{
		const owner = req.body.payload.repository.owner.name;
		const repo = req.body.payload.repository.name;
		const sha = req.body.payload.head_commit.id;
		url='https://api.github.com/repos/'+owner+'/'+repo+'/statuses/'+sha+'?access_token=6edd0d4640c9e7d7ee7aea7219b9e6fc175a265c';
		var statusData=
		{
				state: 'success',
			  description: 'Commited successfully'
		}
		Request
		.post(url)
		.send(JSON.stringify(statusData))
		.end(function(err,resp)
		{
		if (err) console.log('error');
		});
	}
	else if(payload.pull_request!=undefined)
	{
		var owner=payload.repository.owner.login;
		var repo=payload.repository.name;
		var branch=payload.pull_request.base.ref;
		console.log(owner+" "+repo+" "+branch);
		var repo_URL="https://github.com/"+owner+"/"+repo+".git";
		async.waterfall([
	      runDocker.bind(null,owner,repo_URL,branch,repo,null,null,null,null),
	      createExecutionData.bind(null,req,res,err)

	   ],(err, results) => {
	       if(err) { console.error('error', err); return; }
	       console.log(results);

	}

	   );
	}
}
 module.exports=data;
