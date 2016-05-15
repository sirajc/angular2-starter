#!/bin/sh
echo copying app files...
cd build/app
cp -Rv . ../../gh-pages/app/
echo copying images
cd ..
cd images
cp -Rv . ../../gh-pages/images
cd ../../gh-pages/
echo removing sourcemaps
find . -type f -name '*.js.map' -delete
echo staging files in git
git add .
git status
echo "completed"
