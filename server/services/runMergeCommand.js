module.exports=function(basebranch,branch,owner,repo_URL,repobranch,reponame,mocha,eslint,htmlhint,istanbul,starttime,id,callback){

  const spawn=require('child_process').spawn;
  // console.log(repobranch);
  const env = process.env;
  env.REPO_URL = repo_URL;
  env.REPO_NAME = reponame;
  env.BASE_BRANCH= basebranch;
  env.BRANCH= repobranch;
  const merge=spawn('./merge.sh', {env: env});
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  merge.stderr.on('data', (data) => {
    console.log(`${data}`);
    if(`${data}`) {
      stdErr.push(`${data}`);
    }
  });
  merge.stdout.on('data', (data) => {
    console.log(`${data}`);
    stdOut.push(`${data}`);
  });
  merge.on('close', (code) =>
  {
    exitCode=`${code}`;
    callback(null,owner,repo_URL,repobranch,reponame,mocha,eslint,htmlhint,istanbul,starttime,id);
  });
}
