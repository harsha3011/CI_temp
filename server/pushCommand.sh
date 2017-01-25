#!/bin/sh

set -e
echo pulling
git pull $REPO_URL
echo pulled
echo adding
git add .
echo added
echo committing
git commit -m "pulled changes"
echo committed
echo pushing
git push -u origin $BASE_BRANCH
echo pushed
cd

rm $REPO_NAME

echo done
