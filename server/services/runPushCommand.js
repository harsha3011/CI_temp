module.exports=function(repo_URL,basebranch,reponame, callback){
 const spawn=require('child_process').spawn;
 const env = process.env;
 env.REPO_URL = repo_URL;
 env.REPO_NAME = reponame;
 env.BASE_BRANCH= basebranch;
 const merge=spawn('./pushCommand.sh', {env: env});
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

   callback(null,exitCode);

 });

}
