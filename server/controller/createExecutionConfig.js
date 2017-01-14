const executionConfigModel=require('../models/executionsConfig.model');
const buildDocker=require('../services/buildPipeline');
const runDocker=require('../services/runPipeline');
const async=require('async');

module.exports=function(req,res,err){
  console.log(req.body.htmlhint[0]);
  process.env.HTMLHINT=req.body.htmlhint[0];
  async.waterfall([
      buildDocker.bind(null),
      runDocker.bind(null),

   ],(err, results) => {
       if(err) { console.error('error', err); return; }
       console.log('successfull');
}

   );
  res.send("done");
}