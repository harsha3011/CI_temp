const express = require('express');
const router = express.Router();
const createExecutionConfig=require('../controller/createExecutionConfig');
const getExecutionConfig=require('../controller/getExecutionConfig');

router.post('/api/:owner/:reponame/:repobranch/executions',createExecutionConfig);
router.get('/api/:owner/:reponame/:repobranch/executions',getExecutionConfig);

module.exports=router;