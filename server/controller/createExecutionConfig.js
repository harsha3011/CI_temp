const executionConfigModel=require('../models/executionsConfig.model');
const buildDocker=require('../services/buildPipeline');
const runDocker=require('../services/runPipeline');
const async=require('async');
const state='';
module.exports=function(err,req,res){
	async.waterfall([

       buildDocker.bind(null),
       runDocker.bind(null),
       function(exitCode,stdOut,stdErr){
       	console.log(exitCode);
        const executionConfig = new executionConfigModel();
        if (exitCode==0){
        	state='Completed';
        }
        else{
        	state='Failed';
        }
        executionConfig.state=state;
		executionConfig.repoName=req.params.reponame;
		executionConfig.repoBranch = req.params.repobranch;
		executionConfig.stdout = stdOut;
		executionConfig.stderr = stdErr;
		executionConfig.exitcode = exitCode;
		executionConfig.save(function (err) {
 			if(!err){
 				res.send("created")
 			}
		});
       }
   
   ], (err, results) => {
       if(err) { console.error('error', err); return; }
       console.log('successfull');
});

}

	
