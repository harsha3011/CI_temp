const evalFindingsConfigModel=require('./models/evalFindingsConfig.model');
const reponame=process.argv[2];
const repobranch=process.argv[3];
const owner=process.argv[4];
var istanbulJson='';
const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://localhost:27017/Database_CI');

var fs=require('fs');
var htmlhintJson = fs.readFileSync('./outputJson/htmlhintOutput.json','utf-8');
var eslintJson = fs.readFileSync('./outputJson/eslintOutput.json','utf-8');
var mochaJson = fs.readFileSync('./outputJson/mochawesome.json','utf-8');
var istanbulJson = '';
if(process.argv[5]){
istanbulJson = fs.readFileSync('./'+reponame+'/coverage/coverage.json','utf-8');
}
else{
  istanbulJson='';
}
const evalFindingsConfig = new evalFindingsConfigModel();

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

