var async = require('async');
var gitClone = require('./CloneRepo');
var gitCreateBranch = require('./CreateBranches');
var gitPushBranch = require('./PushBranches');
var gitProtectBranch = require('./ProtectedBranches');
const repoPath = '/media/srishti/6C58AAC458AA8D00/workspace/demo';
const repository = 'srishtinanda/Excercise1';
const ownerName=repository.split('/')[0];
const branchName='Integration';


module.exports=function(repoName,teamType){
    console.log("inside");
const branchPath = repoPath.concat('/' + repoName);

async.series([
        gitClone.bind(null, repoPath,repoName, ownerName),
        gitCreateBranch.bind(null, branchPath,teamType),
        gitPushBranch.bind(null, branchPath),
        gitProtectBranch.bind(null,ownerName,repoName,branchName)

    ],

    function(err, results) {
        if (err) { console.error(err.message);
            return; }
        console.log("sucess")
    })
}