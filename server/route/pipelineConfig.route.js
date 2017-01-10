const pipelineConfig=require('../services/createPipelineConfig');
const express = require('express')
const router = express.Router()
router.put('/repo/:repoId/:username/pipeline',pipelineConfig);

module.exports=router;