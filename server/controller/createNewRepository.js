const Request = require('superagent');
require('superagent-auth-bearer')(Request);
module.exports=function (req, res) {
  const token=req.body.Access_Token;
  delete req.body.Access_Token;
	     Request
        .post('https://api.github.com/user/repos')
        .authBearer(token)
        .send(req.body)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          if(err){
            console.log(err);
          }else
          console.log("success");
        });
	}
