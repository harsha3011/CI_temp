#!/bin/sh

echo pulling
git pull $REPO_URL
echo pulled
echo adding
# git add .
# echo added
# echo committing
# git commit -m "pulled changes"
# echo committed
set -e
echo pushing
git push -u origin $BRANCH
echo pushed
cd ..

rm $REPO_NAME

echo done
