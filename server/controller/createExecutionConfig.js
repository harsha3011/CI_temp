const createExecutionData=require('./createExecutionData');
const runDocker=require('../services/updateRunPipeline');
const async=require('async');
const getExecutionConfig=require('./updateExecution');
const getExitCode=require('./getExitCode');
const cloneRepo=require('../services/cloneRepository');
const notify=require('../slackNotification');
var id;
module.exports=function(req,res,err){
  const owner=req.params.owner;
  const htmlhint = req.body.htmlhint;
  const eslint = req.body.eslint;
  const mocha = req.body.mocha;
  const istanbul =req.body.istanbul;
  const repo_URL=req.body.repo_URL;
  const repobranch=req.params.repobranch;
  const reponame=req.params.reponame;
  const starttime=new Date();
  async.waterfall([
      cloneRepo.bind(null,owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime),
      getExecutionConfig.bind(null,req,res,err),
      runDocker.bind(null),
      createExecutionData.bind(null,req,res,err),
      getExitCode.bind(null),
      notify.bind(null)
  ],(err, results) => {
      if(err) { console.error('error', err); return; }
      console.log(results);

}

  );

}
