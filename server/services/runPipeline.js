 module.exports=function(owner,repo_URL,repobranch,reponame,htmlhint,eslint,mocha,istanbul,starttime, callback){
  let state='';
  const spawn=require('child_process').spawn;
  const docker=spawn('docker',["run","--net=host",
            "-e", `HTMLHINT=${htmlhint}`.replace(',',' '),
            "-e",`ESLINT=${eslint}`.replace(',',' '),
            "-e", `MOCHA=${mocha}`.replace(',',' '),
            "-e",`ISTANBUL=${istanbul}`,
            "-e",`REPO_URL=${repo_URL}`,
            "-e",`REPO_NAME=${reponame}`,
            "-e",`REPO_BRANCH=${repobranch}`,
            "-e",`OWNER=${owner}`,
             "test"]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  docker.stderr.on('data', (data)=> {
    console.log(`${data}`);
     if(`${data}`)
      {
       stdErr.push(`${data}`);
      }
  });
  docker.stdout.on('data', (data)=> {
    console.log(`${data}`);
     stdOut.push(`${data}`);
  });
  docker.on('close', (code) => {
    exitCode=`${code}`;
    if(exitCode==0)
    {
      state="Completed";
    }
    else{
      state="Failed";
    }

    callback(null,repobranch,reponame,exitCode,stdOut,stdErr,starttime,state);
  });

}
                