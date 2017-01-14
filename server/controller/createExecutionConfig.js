const executionConfigModel=require('../models/executionsConfig.model');
const buildDocker=require('../services/buildPipeline');
const runDocker=require('../services/runPipeline');
const async=require('async');

module.exports=function(err,req,res){
	async.waterfall([

       buildDocker.bind(null),
       runDocker.bind(null),
       function(err,req,res,exitCode,stdOut,stdErr){
       	console.log(exitCode);
        const executionConfig = new executionConfigModel();
        if (exitCode==0){
        	executionConfig.state='Completed';
        }
        else{
        	executionConfig.state='Failed';
        }
        
		executionConfig.repoName='abc';
		executionConfig.repoBranch = 'dev';
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

	
