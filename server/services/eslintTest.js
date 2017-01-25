module.exports=function(eslint,callback){
  const spawn=require('child_process').spawn;
  const eslintCmd=spawn('sh',["/test/eslint.sh","-e",`ESLINT=${eslint}`]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var err=null;
  eslintCmd.stderr.on('data', (data)=> {
    // console.log(`${data}`);
    //  if(`${data}`)
    //   {
    //    stdErr.push(`${data}`);
    //   }
  });
  eslintCmd.stdout.on('data', (data)=> {
     //
    //  stdOut.push(`${data}`);
  });
  eslintCmd.on('close', (code) => {
    if(code !== 0) {
      err=code;
      parseInt(err);
     }

    exitCode=`${code}`;

    callback(null,exitCode);
  });

}
