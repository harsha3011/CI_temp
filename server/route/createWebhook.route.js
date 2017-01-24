const getWebhook=require('../controller/createWebhook.js');
const express = require('express');
const router = express.Router();
router.post('/api/:ownerName/:repoName/hooks', getWebhook);
module.exports=router;
