const executionConfigModel=require('../models/executionsConfig.model');
var id;
const starttime=new Date();
module.exports=function(req,res,err,owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime,callback){
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
     executionsConfig.save((err,data)=> {
       if(!err){
        res.send('success');
        console.log("ID of the current entry",data._id);
        id=data._id;
       }
       else{
          console.log('error')
       }
      callback(null,owner,repo_URL,repobranch,reponame,mocha,eslint,htmlhint,istanbul,starttime,id)
     });
}
