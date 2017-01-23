const runAsync=require('../services/gitOperations');
module.exports=function (req, res) {
  console.log("controller");
  const repoName = req.body.RepoName;
  const teamType = req.body.TeamType;
	     runAsync(repoName,teamType);
       console.log(repoName,teamType);
	}