const async = require('async');
const NewRepo=require('./NewRepository');
const addReadme=require('./addReadme');


module.exports=function(token,repoDetails,ownerName){
  console.log("async call",ownerName);
  console.log("namerepo",repoDetails.name);

async.series([
        NewRepo.bind(null,token,repoDetails),
        addReadme.bind(null,token,repoDetails,ownerName)

    ],

    function(err, results) {
        if (err)
         { 
            return err.message;
          }else{
            return results;
             console.log("sucess");
          }

    })
}