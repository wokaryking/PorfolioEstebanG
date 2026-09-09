@echo off
setlocal

cd /d "%~dp0"

start "PorfolioEstebanG - VS Code" code .
start "PorfolioEstebanG - Vite" cmd /k "pnpm dev --host 0.0.0.0"
start "" "http://localhost:5173"

endlocal