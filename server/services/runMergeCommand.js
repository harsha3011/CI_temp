module.exports=function(repo_URL,basebranch,comparebranch,reponame, callback){
 const spawn=require('child_process').spawn;
 const merge=spawn('./merge.sh', {env: {
   REPO_URL: repo_URL,
   REPO_NAME: reponame,
   BASE_BRANCH: basebranch,
   BRANCH: comparebranch
 }});
 var exitCode;
 var stdOut=[];
 var stdErr=[];
 merge.stderr.on('data', (data)=> {
   console.log(`${data}`);
    if(`${data}`)
     {
      stdErr.push(`${data}`);
     }
 });
 merge.stdout.on('data', (data)=> {
   console.log(`${data}`);
    stdOut.push(`${data}`);
 });
 merge.on('close', (code) => {
   exitCode=`${code}`;
   return(stdOut);
   callback(null,exitCode);

 });

}
