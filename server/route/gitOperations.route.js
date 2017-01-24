const gitOperate=require('../controller/gitOperation');
const express = require('express');
const router = express.Router();

router.post('/api/owner/reponame',gitOperate);

module.exports=router;