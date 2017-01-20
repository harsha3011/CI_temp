const Request = require('superagent');
module.exports=function (req, res) {
	     Request
        .post('https://api.github.com/user/repos')
        .query({
          access_token: 'adb7003612b0d585c40cc19a4cf387529d730db8'
        })
        .send(req.body)
        .set("Accept","application/vnd.github.loki-preview+json")
        .end(function(err, res) {
          console.log(res);
        });
	}
