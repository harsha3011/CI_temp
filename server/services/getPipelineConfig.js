
const spawn=require('child_process').spawn;
     

       const docker=spawn('docker',["build","-t","test","."]);

       docker.stderr.on('data', (data)=> {
           // status=`${data}`;
           console.log(`${data}`);

           // docker.send({status});

       });

       docker.stdout.on('data', (data)=> {
           //status=`${data}`;
           
          console.log(`${data}`);
       });

       docker.on('close', (code) => {
            console.log(`Status:${code}`);
           // if(code !== 0) { callback(new Error('"docker" exited with code', code)); return; }
           // callback(null,'ok');
       });  
       const docker1=spawn('docker',["run","test"]);

       docker1.stderr.on('data', (data)=> {
           // status=`${data}`;
           console.log(`${data}`);

           // docker.send({status});

       });

       docker1.stdout.on('data', (data)=> {
           //status=`${data}`;
           
          console.log(`${data}`);
       });

       docker1.on('close', (code) => {
            console.log(`Status:${code}`);
           // if(code !== 0) { callback(new Error('"docker" exited with code', code)); return; }
           // callback(null,'ok');
       });  
