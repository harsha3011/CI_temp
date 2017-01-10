const pipelineConfig=require('../services/updatePipelineConfig');
const express = require('express')
const router = express.Router()
router.put('/repo/:reponame/:username/pipeline',pipelineConfig);
module.exports=router;