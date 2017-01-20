const express = require('express');

const router = express.Router();
const loginGithub=require('../services/loginGithub');

router.get('/api/loginGithub',loginGithub);

module.exports=router;
