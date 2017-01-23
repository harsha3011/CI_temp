console.log("entered Save.js");
const evalFindingsConfigModel=require('./models/evalFindingsConfig.model');
const reponame=process.argv[2];
const repobranch=process.argv[3];
const owner=process.argv[4];

const mongoose = require('mongoose');
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
          console.log("saved in eval findings");
          mongoose.connection.close();
        });
