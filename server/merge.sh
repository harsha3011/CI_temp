#!/bin/sh

set -e

git config --global user.email "srishti_nanda@yahoo.com"
git config --global user.name "CI-JARVIS"

echo cloning repository $REPO_URL
git clone $REPO_URL -b $BASE_BRANCH

cd $REPO_NAME
echo merging
git merge origin/$BRANCH
echo merged
#
# echo committing
# git commit -m "merged"
# echo committed

echo done
