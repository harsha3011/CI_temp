#!/bin/sh

set -e

git clone $REPO_URL

cd $REPO_NAME

git checkout -b $BASE_BRANCH

git merge $BRANCH

git commit -m "merged"

echo done
