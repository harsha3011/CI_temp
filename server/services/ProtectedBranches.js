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

function gitProtectBranch (ownerName, repoName,branchName,callback) {
  if(branchName==='Integration'){
      request
        .patch('https://api.github.com/repos/' +ownerName + '/' +repoName +'/branches/Integration')
        .query({
          access_token: '6fbb19ea4b7bb01025fbe11b549ccc61e10fa2b9'
        })
        .send(files)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          if(err){
            console.log(err);
          }else
          console.log("success");
        });
  }else{
    request
        .patch('https://api.github.com/repos/' +ownerName + '/' +repoName +'/branches/master')
        .query({
        	access_token: '6fbb19ea4b7bb01025fbe11b549ccc61e10fa2b9'
        })
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