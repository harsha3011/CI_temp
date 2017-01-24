const Request=require('superagent');

const NewRepo = function(token, repoDetails, callback) {
  console.log("creating");
	Request
        .post('https://api.github.com/user/repos')
        .authBearer(token)
        .send(repoDetails)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          if(err){
            console.log(err);
          }else{
          console.log("success");
          callback(null);
        }
        });

}
module.exports = NewRepo;