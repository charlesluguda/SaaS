#!/bin/bash

clear

echo -e  "WELCOME TO OUR GITHUB AUTOMATION \n"
git init
git status
git add .
git commit -m "Update made on the landing page to fit isellova requiremwnts."
git pull
git push origin master
echo -e "SUCESSFULLY............!!!!!!!!!!!!🙌"