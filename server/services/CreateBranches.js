var status;
const async = require('async');
const spawn = require('child_process').spawn;

var branchObj = {
    'Single_User': ['Dev'],
    'Single_Team': ['Dev',
        'Testing'
    ],
    'Multiple_Team': ['Integration',
        'Dev',
        'Testing'
    ]
};

var gitCreateBranch = function(branchPath, teamType, callback1) {

    if (branchObj.hasOwnProperty(teamType)) {
        async.eachSeries(branchObj[teamType], getInfo.bind(this, branchPath), function(e, r) {
            callback1(null);
        });
    }
}

function getInfo(branchPath, name, callback) {
    console.log("name:", name);

    let gitCreateCmd = spawn('git', ['checkout', '-b' + name], { cwd: branchPath });

    gitCreateCmd.stderr.on('data', (data) => {
        status = `${data}`;
        console.log('Inside', status);
    });

    gitCreateCmd.stdout.on('data', (data) => {
        console.log("branch created");
        status = "Sucess";
        status = `${data}`;
    });

    gitCreateCmd.on('close', (code) => {
        console.log(`Status:${code}`);
        if (code !== 0) { callback(new Error('git gitCreate Branch exited with code', code));
            return; }
        callback(null);
    });
}
module.exports = gitCreateBranch;
