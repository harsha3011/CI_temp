const express = require('express');
const app = express();
const buildDocker=require('./services/buildPipeline');
const port = process.env.PORT || 9080;
const pipelineConfigRoute=require('./route/pipelineConfig.route')
const projectConfigRoute=require('./route/projectsConfig.route')
const executionsConfigRoute=require('./route/executionsConfig.route');
const triggerCommit=require('./route/updateCommit.route');
const createRepoRoute=require('./route/createRepo.route');
const evalFindingsConfigRoute=require('./route/evalFindingsConfig.route');
const http = require('http');
const cookieParser = require('cookie-parser');
const config = require('./config');
const _ = require('lodash');
const path = require('path');
const mongoose = require('mongoose');
const connection=mongoose.connect('mongodb://localhost:27017/Database_CI');


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

var BodyParser = require('body-parser');
app.use(BodyParser());
// const pipelineConfigRoute=require('./route/pipelineConfig.route');
// const rubericConfigRoute=require('./route/rubericConfig.route');
// const projectConfigRoute=require('./route/projectsConfig.route');
// const executionsConfigRoute=require('./route/executionsConfig.route');
// const createRepoRoute=require('./route/createRepo.route');
// const evalFindingsConfigRoute=require('./route/evalFindingsConfig.route');
const doGitOperationsRoute=require('./route/gitOperations.route')
// // const mongoose = require('mongoose');

// console.log("app");

// const connection=mongoose.connect('mongodb://localhost:27017/Database_CI');


buildDocker();

app.use('/',executionsConfigRoute);
app.use('/',pipelineConfigRoute);
app.use('/',projectConfigRoute);
app.use('/',createRepoRoute);
app.use('/',evalFindingsConfigRoute);
app.use('/',doGitOperationsRoute);
app.use(cookieParser());
app.use('/api/ci', require(path.join(__dirname, '..', 'server/api')));
app.use('/',triggerCommit);


const server = http.createServer(app);
server.listen(port, () => {
    // console.log('Express server started');
});