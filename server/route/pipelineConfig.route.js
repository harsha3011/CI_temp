const pipelineConfig=require('../services/createPipelineConfig');
const express = require('express')
const router = express.Router()
router.put('/repo/:repoId/pipeline',pipelineConfig);

module.exports=router;