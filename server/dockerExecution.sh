# !/bin/sh


ROOT_DIR=`pwd`

echo ROOT_DIR $ROOT_DIR

mkdir $ROOT_DIR/outputJson -p

echo ROOT_DIR $ROOT_DIR

cd $REPO_NAME

echo cd $REPO_NAME -b $REPO_BRANCH $REPO_URL

npm install

npm install --save eslint-config-google eslint-json

exitstatus=$(node $ROOT_DIR/runTestcases.js $MOCHA $ESLINT false $HTMLHINT $REPO_NAME $REPO_BRANCH $OWNER $STARTTIME)

echo exitstatus $exitstatus
echo $ID
cd ..
echo $ID
echo $STARTTIME is starttime
node ./executionsSave.js $ID $exitstatus
node ./Save.js $REPO_NAME $REPO_BRANCH $OWNER false $STARTTIME $exitstatus
