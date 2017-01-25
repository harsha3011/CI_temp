const Request = require('superagent');
require('superagent-auth-bearer')(Request);
const runAsync=require('../services/createNewRepo');

module.exports=function (req, res) {

  const token=req.body.Access_Token;
  const ownerName=req.body.ownerName;
  delete req.body.Access_Token;
  delete req.body.ownerName;  
  const repoDetails=req.body;
  console.log(repoDetails);
  const func=runAsync(token,repoDetails,ownerName);

    }
