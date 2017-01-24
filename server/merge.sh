#!/bin/sh
git clone $REPO_URL

ROOT_DIR=`pwd`

echo ROOT_DIR $ROOT_DIR

mkdir $ROOT_DIR/outputJson -p

cd $REPO_NAME

echo cd $REPO_NAME -b $BASE_BRANCH $REPO_URL

git merge $BRANCH 
