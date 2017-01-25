module.exports=function(mocha,callback){
  const spawn=require('child_process').spawn;
  const mochaCmd=spawn('sh',["/test/mocha.sh","-e",`MOCHA=${mocha}`]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];

  var status=0;
  var err=null;
  mochaCmd.stderr.on('data', (data)=> {
    // console.log(`${data}`);
    //  if(`${data}`)
    //   {
    //    stdErr.push(`${data}`);
    //   }
  });
  mochaCmd.stdout.on('data', (data)=> {
    // console.log(`${data}`);
    //  stdOut.push(`${data}`);
  });
  mochaCmd.on('close', (code) => {
    // if(code !== 0) { var err = new Error("Mocha Test Failed"); err.stage='mocha'; callback(err); return; }
    if(code !== 0) {
      err=code;
      parseInt(err);
     }
    exitCode=`${code}`;

    callback(null,exitCode);
  });

}
