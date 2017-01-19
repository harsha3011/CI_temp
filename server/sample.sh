#!/bin/sh
git clone $REPO_URL -b $REPO_BRANCH

ROOT_DIR=`pwd`

echo ROOT_DIR $ROOT_DIR

mkdir $ROOT_DIR/outputJson -p

cd $REPO_NAME

echo cd $REPO_NAME -b $REPO_BRANCH $REPO_URL

npm install

npm install --save eslint-config-google eslint-json

echo htmlhint $HTMLHINT
htmlhint -f json $HTMLHINT > $ROOT_DIR/outputJson/htmlhintOutput.json

echo eslint $ESLINT
eslint --format=node_modules/eslint-json $ESLINT > $ROOT_DIR/outputJson/eslintOutput.json

echo mocha $MOCHA
if (($MOCHA))
then
mocha $MOCHA --reporter mochawesome > $ROOT_DIR/outputJson/mochaOutput.json
else
mocha --reporter mochawesome
fi

echo istanbul $ISTANBUL
if (($ISTANBUL))
then
istanbul cover _mocha
fi
 cd ..
echo Saving into MongoDB
node Save.js