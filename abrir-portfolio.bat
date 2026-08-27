@echo off
setlocal

cd /d "%~dp0"

where pnpm >nul 2>&1
if errorlevel 1 (
  echo No se encontro pnpm. Instala Node.js y pnpm para abrir el portfolio.
  pause
  exit /b 1
)

start "Portfolio Vite" cmd /k "pnpm dev --host 127.0.0.1"
timeout /t 2 /nobreak >nul
start "" "http://localhost:5173"

endlocal