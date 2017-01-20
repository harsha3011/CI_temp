var async = require('async');
var gitClone = require('./CloneRepo');
var gitCreateBranch = require('./CreateBranches');
var gitPushBranch = require('./PushBranches');
var gitProtectBranch = require('./ProtectedBranches');
const repoPath = '/media/srishti/6C58AAC458AA8D00/workspace';
const repository = 'srishtinanda/Excercise1';
const repoName = repository.split('/')[1];
const ownerName=repository.split('/')[0];
const branchPath = repoPath.concat('/' + repoName);
var teamType = 'Single_Team';


async.series([
        gitClone.bind(null, repoPath, repository),
        gitCreateBranch.bind(null, branchPath,teamType),
        gitPushBranch.bind(null, branchPath),
        gitProtectBranch.bind(null,ownerName,repoName)
    ],

    function(err, results) {
        if (err) { console.error(err.message);
            return; }
        console.log("sucess")
    })
