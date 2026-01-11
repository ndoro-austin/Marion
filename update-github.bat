@echo off
cd /d "c:\Users\Austin\OneDrive\Desktop\kaisa"

echo Adding all changes...
git add .

echo Creating commit...
git commit -m "Update: remove featured-unit lines on mobile"

echo Pushing to GitHub...
git push

echo.
echo Done! Changes pushed to GitHub.
pause
