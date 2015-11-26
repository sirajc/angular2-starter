#!/bin/sh
echo copying app files...
cd build/app
cp -Rv . ../../../io-angular2-starter/app/
echo copying images
cd ..
cd images
cp -Rv . ../../../io-angular2-starter/images
cd ../../../io-angular2-starter/
echo removing sourcemaps
find . -type f -name '*.js.map' -delete
echo staging files in git
git add .
git status
echo "completed"
