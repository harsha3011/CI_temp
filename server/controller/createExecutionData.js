  const executionConfigModel=require('../models/executionsConfig.model');

 module.exports=function(req,res,err,owner,repobranch,reponame,exitCode,stdOut,stdErr,starttime,state,callback){
    console.log("starting execution data");
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
