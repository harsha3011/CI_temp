module.exports=function(){
  const spawn=require('child_process').spawn;
  const docker=spawn('docker',["build","-t","test","."]);
  var BuildStatus;
  var BuildSteps=[];
  var BuildErrors=[];
  var BuildReport=[];
    docker.stderr.on('data', (data)=> {
      console.log(`${data}`);
      if(`${data}`)
      {
       BuildErrors.push(`${data}`);
      }
    });
    docker.stdout.on('data', (data)=> {
      console.log(`${data}`);
      BuildSteps.push(`${data}`);

    });
    docker.on('close', (code) => {
      BuildStatus=`${code}`;
      console.log("Build Status:",BuildStatus);
    });
}
