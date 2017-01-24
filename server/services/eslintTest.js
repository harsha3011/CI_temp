module.exports=function(eslint,callback){
  const spawn=require('child_process').spawn;
  const eslintCmd=spawn('sh',["/test/eslint.sh","-e",`ESLINT=${eslint}`]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var status;
  var err;
  eslintCmd.stderr.on('data', (data)=> {
    console.log(`${data}`);
     if(`${data}`)
      {
       stdErr.push(`${data}`);
      }
  });
  eslintCmd.stdout.on('data', (data)=> {

     stdOut.push(`${data}`);
  });
  eslintCmd.on('close', (code) => {
    console.log(`${code}`);
    exitCode=`${code}`;
    if(exitCode!=0){
      err="eslint test failed"
    }
    else{
      status="eslint test passed"
    }
    console.log(status);
    callback(err,status);
  });

}
