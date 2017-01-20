const Request = require('superagent');
module.exports=function (req, res) {
	     Request
        .post('https://api.github.com/user/repos')
        .query({
          access_token: '6fbb19ea4b7bb01025fbe11b549ccc61e10fa2b9'
        })
        .send(req.body)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          if(err){
            console.log(err);
          }else
          console.log("success");
        });
	}
