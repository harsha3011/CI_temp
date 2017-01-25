const request = require('superagent');
require('superagent-auth-bearer')(request);
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

function gitProtectBranch (ownerName, repoName, token,teamType,callback) {
 
    request
        .patch('https://api.github.com/repos/' +ownerName + '/' +repoName +'/branches/master')
        .authBearer(token)
        .send(files)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
        	if(err){
            console.log(err);
          }else
          console.log("success");
        });

  if(teamType=='Multiple_Team'){
    request
        .patch('https://api.github.com/repos/' +ownerName + '/' +repoName +'/branches/testing')
        .authBearer(token)
        .send(files)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          if(err){
            console.log(err);
          }else
          console.log("success");
        });
      }
    };

module.exports=gitProtectBranch