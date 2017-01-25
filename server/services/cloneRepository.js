module.exports=function(owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime,callback){
  const spawn=require('child_process').spawn;
  const cloneRepo=spawn('git',["clone",repo_URL,"-b",repobranch]);
cloneRepo.stderr.on('data',(data)=>{

});
cloneRepo.stdout.on('data',(data)=>{

});
cloneRepo.on('close',(code)=>{
    callback(null,owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime);
});
}
