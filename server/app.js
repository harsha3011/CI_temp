const express = require('express');
const app = express();

const port = process.env.PORT || 9080;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

var BodyParser = require('body-parser');
app.use(BodyParser());

const pipelineConfigRoute=require('./route/pipelineConfig.route')
const rubericConfigRoute=require('./route/rubericConfig.route')
const executionsConfigRoute=require('./route/executionsConfig.route');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Database_CI');

app.use('/',executionsConfigRoute);
app.use('/',pipelineConfigRoute);
app.listen(port, function() {
console.log('Express App listening on port ', port);
});