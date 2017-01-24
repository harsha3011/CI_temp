const getCommit=require('../controller/updateCommits');
const express = require('express');
const router = express.Router();

router.post('/cihook',getCommit);

module.exports=router;
