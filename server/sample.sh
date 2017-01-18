#!/bin/sh
git clone $REPO_URL -b $REPO_BRANCH

cd $REPO_NAME 
echo cd $REPO_NAME -b $REPO_BRANCH $REPO_URL

npm install

npm install --save eslint-config-google eslint-json

mkdir outputJson -p

echo htmlhint
htmlhint -f json $HTMLHINT 

echo eslint
eslint --format=node_modules/eslint-json $ESLINT 

echo mocha
if (($MOCHA))
then
mocha $MOCHA --reporter mochawesome  
else
mocha --reporter mochawesome
fi

echo istanbul
if (($ISTANBUL))
then
istanbul cover _mocha 
fi
