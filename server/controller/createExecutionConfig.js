const createExecutionData=require('./createExecutionData');
const runDocker=require('../services/runPipeline');
const async=require('async');
const getExecutionConfig=require('./getExecutionConfig');

module.exports=function(req,res,err){
  console.log("Branch",req.body.repobranch);
  const htmlhint = req.body.htmlhint;
  const eslint = req.body.eslint;
  const mocha = req.body.mocha;
  const istanbul =req.body.istanbul;
  const repo_URL=req.body.repo_URL;
  const repobranch=req.body.repobranch;
  const reponame=req.body.reponame;
  async.waterfall([
      runDocker.bind(null,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul),
      createExecutionData.bind(null,req,res,err)

   ],(err, results) => {
       if(err) { console.error('error', err); return; }
       console.log(results);

}

   );
  
}
