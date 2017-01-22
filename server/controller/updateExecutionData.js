const executionConfigModel=require('../models/executionsConfig.model');
module.exports=function(req,res,err,repobranch,reponame,starttime,exitCode,stdOut,stdErr,callback){

   const executionsConfig=new executionConfigModel();
   console.log(starttime,"starttime")
   executionConfigModel.findOne({starttime:starttime}, function (err, mySchema) {
     if (err) throw err;
   if (mySchema) {
      if(exitCode==0){
        executionsConfig.state='Completed';
      }
      else{
        executionsConfig.state='Failed';
      }
      executionsConfig.save( (err)=> {
        if(!err){
         console.log("saved in executionsConfig");

        }
        else{
           console.log('error')
        }
      });
    }
        callback(null,'Done');


});
}
