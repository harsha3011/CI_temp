#!/bin/sh
if (($MOCHA))
then
mocha $MOCHA --reporter mochawesome --reporter-options reportDir=../outputJson,reportName=mochaOutput
else
mocha --reporter mochawesome --reporter-options reportDir=../outputJson,reportName=mochaOutput
fi
