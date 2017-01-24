var MY_SLACK_WEBHOOK_URL = 'https://stackrouteteam.slack.com/services/hooks/incoming-webhook?token=MJBbvMVI4tOKK5nkxEHYqmoS';
var slack = require('slack-notify')(MY_SLACK_WEBHOOK_URL);

slack.send({
  channel: 'ci-team',
  icon_url: 'http://example.com/my-icon.png',
  text: 'Your build is complete!! Check on "<https://slack.com>"',
  unfurl_links: 1,
  username: 'paurvi_bhardwaj'
});