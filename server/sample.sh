#!/bin/sh
set -e
git clone https://github.com/wesbos/JavaScript30.git
echo cloning is done
cd JavaScript30
echo started executing shell script
echo HTMLHINT $HTMLHINT
htmlhint $HTMLHINT
eslint .
