const request = require('superagent');

const files = {
   "protection": {
       "enabled": true,
       "required_status_checks": {
           "enforcement_level": "everyone",
           "contexts": [
               "required-status"
           ]
       }
   }
};

function gitProtectBranch (ownerName, repoName,callback) {

    request
        .patch('https://api.github.com/repos/' +ownerName + '/' +repoName +'/branches/master')
        .query({
        	access_token: 'adb7003612b0d585c40cc19a4cf387529d730db8'
        })
        .send(files)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
        	console.log(res);
        });
};

module.exports=gitProtectBranch