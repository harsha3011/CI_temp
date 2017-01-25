var status;

var gitClone = function(repoPath, repoName, ownerName, callback) {

    console.log(ownerName);

    const spawn = require('child_process').spawn;
    console.log("repo name : "+repoName);
    console.log('cwd:', repoPath);
    const gitCloneCmd = spawn('git', ['clone', 'git@github.com:' +ownerName+'/'+ repoName], { cwd: repoPath });

    gitCloneCmd.stderr.on('data', (data) => {
        status = `${data}`;
        console.log(status);

    });

    gitCloneCmd.stdout.on('data', (data) => {
        status = "Sucess";

    });

    gitCloneCmd.on('close', (code) => {
        console.log(`Status:${code}`);
        if (code !== 0) { callback(new Error('git clone exited with code', code));
            return; }
        callback(null);

    });
}
module.exports = gitClone;
