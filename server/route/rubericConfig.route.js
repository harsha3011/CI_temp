const createRubericConfig=require('../controller/createRubericConfig');

const express = require('express');
const router = express.Router();

router.post('repo/:username/:reponame/:branch/Ruberic',createRubericConfig);
module.exports=router;