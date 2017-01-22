  const executionConfigModel=require('../models/executionsConfig.model');
 module.exports=function(req,res,err,owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,callback){

     const executionsConfig=new executionConfigModel();

     const starttime= new Date();
     console.log('starttime',starttime);
       executionsConfig.state='';
       executionsConfig.repoName=reponame;
       executionsConfig.repoBranch=repobranch;
       executionsConfig.stdout ='';
       executionsConfig.stderr='';
       executionsConfig.exitcode='';
       executionsConfig.endtime=new Date();
     executionsConfig.starttime=new Date();
     executionsConfig.save( (err)=> {
      if(!err){
       console.log("saved in executionsConfig");
       res.send('success');
      }
      else{
         console.log('error')
      }
      callback(null,owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime);
     });
}
