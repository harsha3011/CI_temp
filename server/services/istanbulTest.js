module.exports=function(istanbul,callback){
  const spawn=require('child_process').spawn;
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var status='';
  var err=null;
  if(istanbul){
    const istanbulCmd=spawn('sh',["/test/istanbul.sh",`ISTANBUL=${istanbul}`]);

    istanbulCmd.stderr.on('data', (data)=> {
      console.log(`${data}`);
       if(`${data}`)
        {
         stdErr.push(`${data}`);
        }
    });
    istanbulCmd.stdout.on('data', (data)=> {
      console.log(`${data}`);
       stdOut.push(`${data}`);
    });
    istanbulCmd.on('close', (code) => {

      exitCode=`${code}`;
      if(exitCode!=0){
        status="istanbul test failed"
      }
      else{
        status="istanbul test passed"
      }
      console.log(status);
      callback(err,status);
    });

}
}
