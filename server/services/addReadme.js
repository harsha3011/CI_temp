const Request=require('superagent');

const addReadme=function(token, repoDetails, ownerName, callback) {
	console.log("inside readme");
	let repoName=repoDetails.name;

	console.log(ownerName);
	console.log(token);
	console.log(repoName);
	console.log(repoDetails);
	let obj={
		"message": "my readme conmmit",
		  "committer": {
		    "name": "vaibhaw singh",
		    "email": "schacon@gmail.com"
		  },
		  "content": "SGkgVGhpcyBpcyBDSSBzeXN0ZW0="
	}
	Request
        .put('https://api.github.com/repos/'+ownerName+'/'+repoName+'/contents/README.md')
        .authBearer(token)
        .send(obj)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          if(err){
            console.log(err);
          }else
          console.log(res);
          console.log("success");
          callback(null);
        });
}
module.exports = addReadme;