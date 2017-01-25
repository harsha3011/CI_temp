module.exports=function(istanbul,callback){
  const spawn=require('child_process').spawn;
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var err=null;
  if(istanbul){
    const istanbulCmd=spawn('sh',["/test/istanbul.sh",`ISTANBUL=${istanbul}`]);

    istanbulCmd.stderr.on('data', (data)=> {
      // console.log(`${data}`);
      //  if(`${data}`)
      //   {
      //    stdErr.push(`${data}`);
      //   }
    });
    istanbulCmd.stdout.on('data', (data)=> {
      // console.log(`${data}`);
      //  stdOut.push(`${data}`);
    });
    istanbulCmd.on('close', (code) => {
      // if(code !== 0) { var err = new Error("istanbul Test Failed"); err.stage='istanbul'; callback(err); return; }
      if(code !== 0) {
        err=code;
        parseInt(err);
       }
      exitCode=`${code}`;

      callback(null,exitCode);
    });

}
}
