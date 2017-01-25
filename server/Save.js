const evalFindingsConfigModel=require('./models/evalFindingsConfig.model');
const reponame=process.argv[2];
const repobranch=process.argv[3];
const owner=process.argv[4];
var htmlhintJson='';
var eslintJson='';
var mochaJson='';
var istanbulJson='';
var state='';
const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://localhost:27017/Database_CI');

var fs=require('fs');
htmlhintJson = fs.readFileSync('./outputJson/htmlhintOutput.json','utf-8');
// console.log('htmlhint',htmlhintJson);
eslintJson = fs.readFileSync('./outputJson/eslintOutput.json','utf-8');
// console.log('eslint',eslintJson);
mochaJson = fs.readFileSync('./outputJson/mochawesome.json','utf-8');
// console.log('mocha',mochaJson);
if(process.argv[5]){
	istanbulJson = fs.readFileSync('./'+reponame+'/coverage/coverage.json','utf-8');
}
else{
	 istanbulJson='';
}
const evalFindingsConfig = new evalFindingsConfigModel();
        var time=process.argv[6]+" "+process.argv[7]+" "+process.argv[8]+" "+process.argv[9]+" "+process.argv[10]+" "+process.argv[11]+" "+process.argv[12];
				console.log("Save date",time);
        evalFindingsConfig.starttime=new Date(time).toISOString();
		    evalFindingsConfig.repoBranch= repobranch;
        evalFindingsConfig.owner= owner;
        evalFindingsConfig.repoName= reponame;
        evalFindingsConfig.eslintConfig= eslintJson;
        evalFindingsConfig.htmlhintConfig= htmlhintJson;
        evalFindingsConfig.mochaConfig= mochaJson;
        evalFindingsConfig.istanbulConfig= istanbulJson;

		evalFindingsConfig.save((err)=> {

          if(err){
           throw err;
          }
          mongoose.connection.close();
        });
