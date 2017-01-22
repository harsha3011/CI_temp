  const executionConfigModel=require('../models/executionsConfig.model');
 module.exports=function(req,res,err,repobranch,reponame,exitCode,stdOut,stdErr,starttime,state,callback){
   
     const executionsConfig=new executionConfigModel();
     executionConfigModel.findOneAndUpdate({starttime:starttime},
        {$set:
          {
            state:state,
            stdout:stdOut,
            stderr:stdErr,
            exitcode:exitCode,
            endtime:new Date()
          } 
        },
        function(err,data){
          if(err) throw err;
          console.log("");
          res.send("success");
        }
    )
        callback(null,'completed build');
}   

