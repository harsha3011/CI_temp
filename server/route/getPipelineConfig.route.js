const pipelineConfig=require('../services/getPipelineConfig');
const express = require('express')
const router = express.Router()
router.get('/repo/:reponame/:username/pipeline',pipelineConfig);
module.exports=router;