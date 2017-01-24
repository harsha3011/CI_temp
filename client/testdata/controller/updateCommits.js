const express = require('express');
const Request = require ('superagent');
var url='';
const router = express.Router();
const createExecutionConfig=require('../controller/createExecutionConfig');

var data=function (req, res)
{

	if(req.body.head_commit!=undefined)
	{
		const owner = req.body.repository.owner.name;
		const repo = req.body.repository.name;
		const sha = req.body.head_commit.id;
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
	else if(req.body.pull_request!=undefined)
	{
		var owner=req.body.repository.owner.name;
		var repo=req.body.repository.name;
		var branch=req.body.pull_request.base.ref;
		router.post('/api/'+owner+'/'+repo+'/'+branch+'/executions',createExecutionConfig);
	}
}
 module.exports=data;
