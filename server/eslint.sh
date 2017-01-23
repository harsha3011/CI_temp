#!/bin/sh
eslint --max-warnings 0 --format=node_modules/eslint-json $ESLINT > /test/outputJson/eslintOutput.json
