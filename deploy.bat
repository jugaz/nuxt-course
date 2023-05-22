@echo off
setlocal enabledelayedexpansion

REM Install NPM
echo.
echo "############# Install NPM #############"
echo.
npm i

REM Build
echo.
echo "############# Build #############"
echo.
npm run generate
REM navigate into the build output directory
cd docs

REM Deploying
echo.
echo "############# Deploying #############"
echo.
git init
git add .
git commit -m "generate files"

REM Pushing Production
echo.
echo "############# Pushing Production #############"
echo.
REM git push -f https_name_proyecto master:production
git push -f nuxt-course master:gh-pages

cd ..

REM Pushing Master
echo.
echo "############# Pushing Master #############"
echo.
git add .
git commit -m "generate files branch master"
git push -f nuxt-course master:master

cd ..

REM Checkout
echo.
echo "############# Checkout #############"
echo.
git checkout -f gh-pages
rd /s /q docs
rd /s /q node_modules
del /f /q package-lock.json

cd ..
