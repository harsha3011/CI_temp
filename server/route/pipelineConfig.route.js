const createPipelineConfig=require('../controller/createPipelineConfig');
const getPipelineConfig=require('../controller/getPipelineConfig');
const updatePipelineConfig=require('../controller/updatePipelineConfig');

const express = require('express');
const router = express.Router();

router.get('/repo/:reponame/:username/pipeline',getPipelineConfig);
router.put('/repo/:reponame/:username/pipeline',updatePipelineConfig);
router.post('/repo/:reponame/:username/pipeline',createPipelineConfig);

module.exports=router;