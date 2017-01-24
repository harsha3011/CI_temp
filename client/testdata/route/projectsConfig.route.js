const getProjectList=require('../controller/getAllProjects');
const express = require('express');
const router = express.Router();

router.get('/api/:owner/projects',getProjectList);

module.exports=router;