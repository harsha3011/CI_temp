module.exports=function(){
 const spawn=require('child_process').spawn;
 const docker=spawn('shell',["./dockerExecution.js"]]);
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

   callback(null,repobranch,reponame,starttime,exitCode,stdOut,stdErr);
 });
}
