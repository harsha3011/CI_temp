  const executionConfigModel=require('../models/executionsConfig.model');
 module.exports=function(req,res,err,repobranch,reponame,exitCode,stdOut,stdErr,callback){
   
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
           console.log("saved in executionsConfig");
           res.send('success');
          }
          else{
             console.log('error')
          }
          callback(null,'Done');  
        });
        
}
