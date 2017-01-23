const createExecutionData=require('./createExecutionData');
const runDocker=require('../services/runPipeline');
const async=require('async');
const getExecutionConfig=require('./getExecutionConfig');
const executionConfigModel=require('../models/executionsConfig.model');

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
   const executionsConfig=new executionConfigModel();
        executionsConfig.state='Running';
        executionsConfig.owner=owner;
        executionsConfig.repoName=reponame;
        executionsConfig.repoBranch=repobranch;
        executionsConfig.stdout ="";
        executionsConfig.stderr="";
        executionsConfig.exitcode=0;
        executionsConfig.starttime=starttime;
        executionsConfig.endtime=starttime;
        executionsConfig.save( (err)=> {
          if(!err){
           // res.send('success');
          }
          else{
             console.log('error')
          }
        });
  async.waterfall([
      runDocker.bind(null,owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime),
      createExecutionData.bind(null,req,res,err)



  ],(err, results) => {
      if(err) { console.error('error', err); return; }
      console.log(results);

}

  );

}
