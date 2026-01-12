@echo off
cd /d "c:\Users\Austin\OneDrive\Desktop\kaisa"

echo Adding all changes...
git add .

echo Creating commit...
git commit -m "Update: Logo text, menu button styling, featured unit text, mobile optimizations, and button sizing"

echo Pushing to GitHub...
git push

echo.
echo Done! All changes pushed to GitHub.
pause
