#!/bin/sh
git clone https://github.com/google/material-design-lite.git
echo cloning is done

echo HTMLHINT $HTMLHINT
htmlhint $HTMLHINT
