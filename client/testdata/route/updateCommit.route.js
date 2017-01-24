const getCommit=require('../controller/updateCommits');
const express = require('express');
const router = express.Router();

router.post('/commitStatus',getCommit);


module.exports=router;
