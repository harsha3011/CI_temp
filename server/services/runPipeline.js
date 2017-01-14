 module.exports=function(callback){
  const spawn=require('child_process').spawn;
  const docker=spawn('docker',["run","test"]);
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
    
    callback(null,exitCode,stdOut,stdErr);
  });  
   
}