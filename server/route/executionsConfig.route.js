const express = require('express');
const router = express.Router();
const createExecutionConfig=require('../controller/createExecutionConfig');

router.post('/api/:owner/:reponame/:repobranch/executions',createExecutionConfig);
module.exports=router;