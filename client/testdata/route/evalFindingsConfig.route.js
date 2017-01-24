const getEvalFindings=require('../controller/getEvalFindings');
const express = require('express');
const router = express.Router();
router.get('/api/:owner/:repoName/:repoBranch/:starttime/evalFindings',getEvalFindings);
module.exports=router;
