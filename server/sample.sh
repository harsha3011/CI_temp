#!/bin/sh
git clone $REPO_URL -b $REPO_BRANCH

cd $REPO_NAME 
echo cd $REPO_NAME -b $REPO_BRANCH $REPO_URL

npm install

npm install --save eslint-json

mkdir outputJson -p

htmlhint -f json $HTMLHINT >> outputJson/htmlhintOutput.json

eslint --format=../node_modules/eslint-json $ESLINT >> outputJson/eslintOuput.json

if (($MOCHA))
then
mocha $MOCHA --reporter mochawesome  >> outputJson/mochaOutput.json
else
mocha --reporter mochawesome
fi

if (($ISTANBUL))
then
istanbul cover _mocha >> outputJson/istanbulOutput.json
fi
