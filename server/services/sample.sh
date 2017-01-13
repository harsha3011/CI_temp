#!/bin/sh
set -e

git clone https://github.com/google/material-design-lite.git
echo cloning is done

cd material-design-lite
echo entered into material-design-lite folder

npm install  
echo mocha installed successfully

npm install --save-dev mochawesome
echo mochawesome installed successfully

npm install -g  htmlhint 
echo htmlhint installed successfully

npm install eslint eslint-config-google 
echo eslint installed successfully

eslint --init
echo eslint is initialized and eslintrc file is created

npm install eslint-json 
echo eslint-json installed successfully

npm install -g istanbul 
echo istanbul install successfully

istanbul cover _mocha test/unit/slider.js 
echo run mocha on slider.js

eslint src/button/button.js
