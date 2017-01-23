const runAsync=require('../services/gitOperations');
module.exports=function (req, res) {
  console.log("controller");
  const repoName = req.body.RepoName;
  const teamType = req.body.TeamType;
  const token=req.body.Access_token;
  const ownerName=req.body.ownerName;
  const func=runAsync(repoName,teamType,token,ownerName);
       console.log(repoName,teamType);
       res.send(func);
       console.log(func);
	}