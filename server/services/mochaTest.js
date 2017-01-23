module.exports=function(mocha,callback){
  console.log('in mocha test');
  const spawn=require('child_process').spawn;
  const mochaCmd=spawn('sh',["/test/mocha.sh","-e",`MOCHA=${mocha}`]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var status;
  var err;
  mochaCmd.stderr.on('data', (data)=> {
    console.log(`${data}`);
     if(`${data}`)
      {
       stdErr.push(`${data}`);
      }
  });
  mochaCmd.stdout.on('data', (data)=> {
    console.log(`${data}`);
     stdOut.push(`${data}`);
  });
  mochaCmd.on('close', (code) => {

    exitCode=`${code}`;
    if(exitCode!=0){
      status="mocha test failed"
    }
    else{
      status="mocha test passed"
    }
    console.log(status);
    callback(err,status);
  });

}
