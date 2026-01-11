@echo off
cd /d "c:\Users\Austin\OneDrive\Desktop\kaisa"

echo Initializing git repository...
git init

echo Adding all files...
git add .

echo Creating initial commit...
git commit -m "Initial commit: Orchid Residency website - Premium luxury real estate website"

echo Adding remote repository...
git remote add origin https://github.com/ndoro-austin/Marion.git

echo Renaming branch to main...
git branch -M main

echo Pushing to GitHub...
git push -u origin main

echo.
echo Done! Your project has been pushed to GitHub.
pause
