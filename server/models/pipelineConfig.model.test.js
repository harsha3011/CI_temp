const mongoose = require('mongoose');
const Pipeline = require('./pipelineConfig.model');

const pipeline = new Pipeline({

  repo_URL:'',
  repo_Ref:'',
  setup: `npm install`,
  stages: [{
      stage: 'eslint',
      config: {
        include: ["src/**/*.js(|x)", "test/**/*.js(|x)"],
        exclude: ["node_modules/**/*.js", "bower_components/**/*"]
      }
    }, {
      stage: 'htmlhint',
      config: {
        include: ["src/**/*.(xhtml|html)", "test/**/*.(xhtml|html)"],
        exclude: ["node_modules/**/*", "bower_components/**/*"]
      }
    }, {
      stage: 'automated testing',
      config: {
        include: ["src/**/*.(js)", "test/**/*.(js)"],
        exclude: ["node_modules/**/*", "bower_components/**/*"]
      }
    }, {
      stage: 'test coverage',
      config: {}
    }, {
      stage: 'shell',
      config: {
        cmd: `sendmail`
      }
    }]
});
// Connec to mongodb
require('../db');

pipeline.save(pipeline, (err, createdPipeline) => {
  if(err) { console.log('Error saving pipeline:', err); }
  console.log('Created Pipeline:', createdPipeline);
  mongoose.connection.close();
});
