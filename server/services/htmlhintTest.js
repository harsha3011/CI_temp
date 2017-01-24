module.exports=function(htmlhint,callback){
  const spawn=require('child_process').spawn;
  const htmlhintCmd=spawn('sh',["/test/htmlhint.sh","-e",`HTMLHINT=${htmlhint}`]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var status;
  var err;
  htmlhintCmd.stderr.on('data', (data)=> {
    console.log(`${data}`);
     if(`${data}`)
      {
       stdErr.push(`${data}`);
      }
  });
  htmlhintCmd.stdout.on('data', (data)=> {
    console.log(`${data}`);
     stdOut.push(`${data}`);
  });
  htmlhintCmd.on('close', (code) => {

    exitCode=`${code}`;
    if(exitCode!=0){
      err="htmlhint test failed"
    }
    else{
      status="htmlhint test passed"
    }
    console.log(status);
    callback(err,status);
  });

}
