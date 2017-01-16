#!/bin/sh

git clone $REPO_URL -b $REPO_BRANCH

npm install

cd $REPO_NAME

htmlhint $HTMLHINT 

eslint $ESLINT

if (($MOCHA))
then
mocha $MOCHA
else
mocha 
fi

if (($ISTANBUL))
then
istanbul cover _mocha
fi