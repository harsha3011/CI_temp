const executionConfigModel=require('../models/executionsConfig.model');
const buildDocker=require('../services/buildPipeline');
const runDocker=require('../services/runPipeline');
const async=require('async');

module.exports=function(req,res,err){
  const htmlhint = req.body.htmlhint[0];
  console.log(req.body.htmlhint[0]);
  process.env.HTMLHINT=req.body.htmlhint[0];
  console.log('HTMLHINT:'+process.env.HTMLHINT)
  async.waterfall([
      buildDocker.bind(null, htmlhint),
      runDocker.bind(null),

   ],(err, results) => {
       if(err) { console.error('error', err); return; }
       console.log('successfull');
}

   );
  res.send("done");
}
