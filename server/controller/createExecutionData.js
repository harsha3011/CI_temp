  const executionConfigModel=require('../models/executionsConfig.model');
 module.exports=function(req,res,err,owner,repo_URL,repobranch,reponame,exitCode,stdOut,stdErr,starttime,state,id,callback){


     const executionsConfig=new executionConfigModel();
     executionConfigModel.findByIdAndUpdate(id,
        {$set:
          {
            stdout:stdOut,
            stderr:stdErr,
            endtime:new Date()
          }
        },
        function(err,data){
          if(err) throw err;
          console.log("");
          // res.send("success");
        }
    )
        callback(null,repo_URL,reponame,id);
}
