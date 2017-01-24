
 const spawn=require('child_process').spawn;
 const shell=spawn('mocha',["ComparisonOperator.js"]);
 var stdErr=[];
 var stdOut=[];
 var exitCode;
 shell.stderr.on('data', (data)=> {
   console.log('stderr',`${data}`);
    if(`${data}`)
     {
      stdErr.push(`${data}`);
     }
 });
 shell.stdout.on('data', (data)=> {
   console.log('STDOUT',`${data}`);
    stdOut.push(`${data}`);
 });
 shell.on('close', (code) => {
   exitCode=`${code}`;
   console.log('EXITCODE',`${code}`)
 });
