const createPipelineConfig=require('../controller/createPipelineConfig');
const getPipelineConfig=require('../controller/getPipelineConfig');
const updatePipelineConfig=require('../controller/updatePipelineConfig');
const getPipelineData=require('../controller/getPipelineData');
const getProjectList=require('../controller/getAllProjects');
const express = require('express');
const router = express.Router();

router.get('/api/:owner/:reponame/projects',getPipelineConfig);
router.put('/api/:owner/:reponame/projects',updatePipelineConfig);
router.post('/api/:owner/:reponame/projects',createPipelineConfig);
router.post('/api/:owner/:reponame/executables',getPipelineData);
router.get('/api/:owner/projects',getProjectList);
module.exports=router;