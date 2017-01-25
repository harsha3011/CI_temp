
const Request=require('superagent');

module.exports=function(ownerName,repo,access_token){
var hookData={
 "name": "web",
 "active": true,
 "events": [
   "push"
 ],
 "config": {
   "url": 'https://dca0fa5d.ngrok.io/'+ownerName+'/'+repo+'/projects',
   "content_type": "json"
 }
}
  console.log('attempting to create webhook');
     Request
      .post('https://api.github.com/repos/'+ownerName+'/'+repo+'/hooks?access_token='+access_token)
      .set('Content-Type', 'application/json')
      .send(hookData)
      .end(function(err, resp) {
        if(err){
          console.log(err);
        }else{
        console.log("success!!");
        // console.log('resp',resp);
      }
      });
    }
