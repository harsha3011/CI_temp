module.exports=function(htmlhint,callback){
  const spawn=require('child_process').spawn;
  const htmlhintCmd=spawn('sh',["/test/htmlhint.sh","-e",`HTMLHINT=${htmlhint}`]);
  var exitCode;
  var stdOut=[];
  var stdErr=[];
  var err=null;
  htmlhintCmd.stderr.on('data', (data)=> {
    // console.log(`${data}`);
    //  if(`${data}`)
    //   {
    //    stdErr.push(`${data}`);
    //   }
  });
  htmlhintCmd.stdout.on('data', (data)=> {
    // console.log(`${data}`);
    //  stdOut.push(`${data}`);
  });
  htmlhintCmd.on('close', (code) => {
    // if(code !== 0) { var err = new Error("htmlhint Test Failed"); err.stage='htmlhint'; callback(err); return; }
    if(code !== 0) {
      err=code;
      parseInt(err);
     }
    exitCode=`${code}`;

    callback(null,exitCode);
  });

}
