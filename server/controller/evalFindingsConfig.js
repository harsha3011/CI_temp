const evalFindingsConfigModel=require('../models/evalFindingsConfig.model');
module.exports=function (req, res,err) {
	const evalFindingsConfig = new evalFindingsConfigModel();
			evalFindingsConfig.repoBranch=req.params.repoBranch;
			evalFindingsConfig.owner=req.params.owner;
 			evalFindingsConfig.repoName=req.params.repoName;
			evalFindingsConfig.eslintConfig = req.body.eslintConfig;
			evalFindingsConfig.htmlhintConfig = req.body.htmlhintConfig;
      		evalFindingsConfig.mochaConfig = req.body.mochaConfig;
      		evalFindingsConfig.istanbulConfig = req.body.istanbulConfig;
  			evalFindingsConfig.save(function (err) {
     			if(err) throw err;
  			});
        res.send('saved');
}
