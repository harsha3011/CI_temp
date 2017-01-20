var status;

var gitPushBranch=function(branchPath, callback) {

        const spawn=require('child_process').spawn;

        const gitPushCmd=spawn('git', ['push', '--all', 'origin'],{cwd:branchPath});
        
        gitPushCmd.stderr.on('data', (data)=> {
             status=`${data}`;
             console.log(status);
        });

       gitPushCmd.stdout.on('data', (data)=> {
            status="Sucess";
            console.log(status);
        });
        
        gitPushCmd.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('git  branch push exited with code', code)); return; }
            callback(null);

                });

} 
module.exports = gitPushBranch;