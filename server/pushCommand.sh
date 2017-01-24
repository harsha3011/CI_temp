#!/bin/sh

set -e

git pull $REPO_URL

git add .

git commit -m "pulled changes"

git push -u origin $BASE_BRANCH

cd

rm $REPO_NAME 

echo done
