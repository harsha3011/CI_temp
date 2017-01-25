const executionConfigModel=require('../models/executionsConfig.model');
const executionsConfig=new executionConfigModel();
var exitCode;
module.exports=function(repo_URL,reponame,id,callback){
executionConfigModel.findById(id,function(err,myschema){
exitCode=executionsConfig.exitcode;
});
   callback(null,exitCode);
}
