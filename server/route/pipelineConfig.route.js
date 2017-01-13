const createPipelineConfig=require('../controller/createPipelineConfig');
const getPipelineConfig=require('../controller/getPipelineConfig');
const updatePipelineConfig=require('../controller/updatePipelineConfig');

const express = require('express');
const router = express.Router();

router.get('/api/:username/:reponame/projects',getPipelineConfig);
router.put('/api/:username/:reponame/projects',updatePipelineConfig);
router.post('/api/:username/:reponame/projects',createPipelineConfig);

module.exports=router;