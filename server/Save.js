console.log("entered");

// var ncp = require('ncp').ncp;

// ncp.limit = 16;

// ncp('outputJson', 'newoutputJson', function (err) {
//  if (err) {
//    return console.error(err);
//  }
//  console.log('done!');
// });

var fs=require('fs');
var htmlhintJson = fs.readFileSync('./outputJson/htmlhintOutput.json','utf-8');
console.log('HTMLHINTJSON', htmlhintJson);
var eslintJson = fs.readFileSync('./outputJson/eslintOutput.json','utf-8');
console.log('ESLINTJSON', eslintJson);
var mochaJson = fs.readFileSync('./VisualBI-2/mochawesome-reports/mochawesome.json','utf-8');
console.log('MOCHAJSON', mochaJson);
var istanbulJson = fs.readFileSync('./VisualBI-2/coverage/coverage.json','utf-8');
console.log('ISTANBULJSON', istanbulJson);