var status;

var gitClone = function(repoPath, repoName, callback) {

    console.log("hi")

    const spawn = require('child_process').spawn;
    const gitCloneCmd = spawn('git', ['clone', 'git@github.com:' + repoName], { cwd: repoPath });

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
