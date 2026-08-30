@echo off
chcp 65001 >nul
echo در حال راه‌اندازی سرور محلی اپ Edito A1...
node "%~dp0start-server.js"
pause
