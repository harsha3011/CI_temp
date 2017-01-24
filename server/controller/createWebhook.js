const Request = require('superagent');
const cookie=require('react-cookie');
const jwtDecode=require('jwt-decode');

module.exports=function (req, res) {
  const token = cookie.load('token');
  console.log("token "+req.cookies);
  // var decoded = jwtDecode(token);
  //   var code=decoded.accessToken;
  //   console.log(code);
  // var data=req.body;
  // var owner=req.params.ownerName;
  // var repo=req.params.repoName;
	//      Request
  //       .post('http://api.github.com/repos/'+owner+'/'+repo+'/hooks?access_token='+code)
  //       .set('Content-Type', 'application/json')
  //       .send(data)
  //       .end(function(err, res) {
  //         if(err){
  //           console.log(err);
  //         }else
  //         console.log("success");
  //       });
	}
