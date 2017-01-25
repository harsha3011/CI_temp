
module.exports=function(exitcode,callback){
var MY_SLACK_WEBHOOK_URL = 'https://stackrouteteam.slack.com/services/hooks/incoming-webhook?token=MJBbvMVI4tOKK5nkxEHYqmoS';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

if(exitcode==0){
  slack.send({
    channel: 'ci-team',
    icon_url: 'http://example.com/my-icon.png',
    text: 'Your build is complete!! Check on "<https://slack.com>"',
    unfurl_links: 1,
    username: 'JARVIS'
  });
}
else {
  slack.send({
    channel: 'ci-team',
    icon_url: 'http://example.com/my-icon.png',
    text: 'Your build Failed!! Check on "<https://slack.com>"',
    unfurl_links: 1,
    username: 'JARVIS'
  });
}
callback(null,'done');
}
