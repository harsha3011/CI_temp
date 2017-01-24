const executionsConfigModel=require('./models/executionsConfig.model');

const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://localhost:27017/Database_CI');
var state;
var exitCode;
const executionsConfig = new executionsConfigModel();
const agr1=parseInt(process.argv[14]);
const agr2=parseInt(process.argv[15]);
const agr3=parseInt(process.argv[16]);
const agr4=parseInt(process.argv[17]);

if(agr1!=0||agr2!=0||agr3!=0||agr4!=0){
	state='Failed';
  exitCode=1;
}
else{
	state='Success';
  exitCode=0;
}
console.log('ENTIRE PROCESS.ARGV', process.argv);
console.log("ID of my database item",process.argv[2]);
    const id=process.argv[2];
      executionsConfigModel.findByIdAndUpdate(id,
           {$set:
             {
               state:state,
               exitcode:exitCode
             }
           },
         function(err,data){
           if(err) throw err;
           console.log(data);
           // res.send("success");
           mongoose.connection.close();
         }
      )
