const pipelineConfig=require('../services/createPipelineConfig');
const express = require('express')
const router = express.Router()
router.post('/repo/:repoId/pipeline',pipelineConfig);

module.exports=router;