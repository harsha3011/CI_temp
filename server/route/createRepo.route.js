const getNewRepo=require('../controller/createNewRepository');
const express = require('express');
const router = express.Router();
router.post('/api/:owner/repos',getNewRepo);
module.exports=router;
