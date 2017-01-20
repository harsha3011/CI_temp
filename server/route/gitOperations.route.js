const gitOperate=require('../controller/gitOperation');
const express = require('express');
const router = express.Router();

console.log("route");

router.post('/api/owner/reponame',gitOperate);

module.exports=router;