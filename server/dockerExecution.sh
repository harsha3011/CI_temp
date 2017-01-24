#!/bin/sh

git clone $REPO_URL -b $REPO_BRANCH

ROOT_DIR=`pwd`

echo ROOT_DIR $ROOT_DIR

mkdir $ROOT_DIR/outputJson -p

cd $REPO_NAME

echo cd $REPO_NAME -b $REPO_BRANCH $REPO_URL

npm install

npm install --save eslint-config-google eslint-json
echo running testcases
node $ROOT_DIR/runTestcases.js $MOCHA $ESLINT $ISTANBUL $HTMLHINT $REPO_NAME $REPO_BRANCH $OWNER
cd ..
echo testing over
node Save.js $REPO_NAME $REPO_BRANCH $OWNER $ISTANBUL $STARTTIME
