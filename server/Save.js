const evalFindingsConfigModel=require('./models/evalFindingsConfig.model');
console.log("entered");
console.log(process.argv[2],process.argv[3]);
const reponame=process.argv[2]


const mongoose = require('mongoose');
console.log("this is mongo url");
const connection=mongoose.connect('mongodb://localhost:27017/Database_CI');
mongoose.connection.on('connected', () => {
	console.log('Mongo Connected');
});

var fs=require('fs');
var htmlhintJson = fs.readFileSync('./outputJson/htmlhintOutput.json','utf-8');
console.log('HTMLHINTJSON', htmlhintJson);
var eslintJson = fs.readFileSync('./outputJson/eslintOutput.json','utf-8');
console.log('ESLINTJSON', eslintJson);
var mochaJson = fs.readFileSync('./outputJson/mochawesome.json','utf-8');
console.log('MOCHAJSON', mochaJson);
var istanbulJson = fs.readFileSync('./'+reponame+'/coverage/coverage.json','utf-8');
console.log('ISTANBULJSON', istanbulJson);
	
const evalFindingsConfig = new evalFindingsConfigModel();

		evalFindingsConfig.repoBranch= "";
        evalFindingsConfig.owner= "";
        evalFindingsConfig.repoName= "req.params.repoName";
        evalFindingsConfig.eslintConfig= "req.body.eslintConfig";
        evalFindingsConfig.htmlhintConfig= "req.body.htmlhintConfig";
        evalFindingsConfig.mochaConfig= "req.body.mochaConfig";
        evalFindingsConfig.istanbulConfig= "req.body.istanbulConfig";
		
		evalFindingsConfig.save((err)=> {

          if(err){
           throw err;
          }
          console.log("saved");
          mongoose.connection.close();
        });

