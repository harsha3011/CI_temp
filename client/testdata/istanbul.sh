#!/bin/sh
if (($ISTANBUL))
then
istanbul cover _mocha
fi
