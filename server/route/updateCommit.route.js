const getCommit=require('../controller/updateCommits');
const express = require('express');
const router = express.Router();

router.post('/test2',getCommit);


module.exports=router;
