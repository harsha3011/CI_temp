const createPipelineConfig=require('../controller/createPipelineConfig');
const getPipelineConfig=require('../controller/getPipelineConfig');
const updatePipelineConfig=require('../controller/updatePipelineConfig');

const express = require('express');
const router = express.Router();

router.get('/api/:owner/:reponame/projects',getPipelineConfig);
router.put('/api/:owner/:reponame/projects',updatePipelineConfig);
router.post('/api/:owner/:reponame/projects',createPipelineConfig);

module.exports=router;