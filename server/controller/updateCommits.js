const express = require('express');
const Request = require ('superagent');
const runMerge=require('../services/runMergeCommand');
const runDocker=require('../services/runPipeline');
const async=require('async');

const pushCommand=require('../services/runPushCommand');
const getTestData=require('./getTestData');
const createExecutionData=require('./createExecutionData');
const getExecutionConfig=require('./updateExecution');
const getExitCode=require('./getExitCode');
// const executionConfigModel=require('../models/executionsConfig.model');
const notify=require('../slackNotification');
var data=function (req, res, next)
{
	var payload=JSON.parse(req.body.payload);
	console.log('payload:',payload);
	if(payload.head_commit!=undefined)
	{
		console.log('payload.head_commit', payload.head_commit);
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


	else if(payload.pull_request!=undefined&&payload.action!='closed')
	{
		console.log('payload.pull_request', payload.pull_request);
		var owner=payload.repository.owner.login;
		var repo=payload.repository.name;
		var basebranch=payload.pull_request.base.ref;
		var branch=payload.pull_request.head.ref;
		console.log("branch",branch);
		var repo_URL="https://github.com/"+owner+"/"+repo+".git";
		async.waterfall([
			getTestData.bind(null,req,res,next,owner,repo_URL,branch,repo),
      getExecutionConfig.bind(null),
      runMerge.bind(null,basebranch,branch),
      runDocker.bind(null),
      createExecutionData.bind(null,req,res,next),
      pushCommand.bind(null,basebranch),
      getExitCode.bind(null),
      notify.bind(null)

	   ],(err, results) => {
	       if(err) { console.error('error', err); return; }
	       console.log(results);
	});
	}
	console.log('ELSE');

}
 module.exports=data;
