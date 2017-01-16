const executionConfigModel=require('../models/executionsConfig.model');
const buildDocker=require('../services/buildPipeline');
const runDocker=require('../services/runPipeline');
const async=require('async');

module.exports=function(req,res,err){
  const htmlhint = req.body.htmlhint;
  const eslint = req.body.eslint;
  const mocha = req.body.mocha;
  const istanbul =req.body.istanbul;
  const repo_URL=req.body.repo_URL;
  const repobranch=req.body.repobranch;
  const reponame=req.body.reponame;
  async.waterfall([
      buildDocker.bind(null, repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul),
      runDocker.bind(null),
      (exitCode,stdOut,stdErr,callback)=>{

        const executionsConfig=new executionConfigModel();
        if(exitCode==0){
          executionsConfig.state='Completed';
        }
        else{
          executionsConfig.state='Failed';
        }
        executionsConfig.repoName=reponame;
        executionsConfig.repoBranch=repobranch;
        executionsConfig.stdout =stdOut;
        executionsConfig.stderr=stdErr;
        executionsConfig.exitcode=exitCode;
        executionsConfig.save( (err)=> {
          if(!err){
           console.log("saved")
          }
          else{
             console.log('error')
          }
            callback(null);
        });
        
      }

   ],(err, results) => {
       if(err) { console.error('error', err); return; }
       console.log('successfull');

}

   );
}
