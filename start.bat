@echo off
REM AUTO-X Website Development Server
REM Starts the Vite dev server with proper error handling

echo Starting AUTO-X Website Development Server...
echo.

REM Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies!
        echo.
        pause
        exit /b 1
    )
    echo.
)

REM Check if port 3000 is in use
netstat -ano | findstr :3000 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo WARNING: Port 3000 is already in use.
    echo The Vite server may fail to start or use a different port.
    echo.
)

echo Starting Vite dev server on http://localhost:3000
echo Press Ctrl+C to stop
echo.

npm run dev

if errorlevel 1 (
    echo.
    echo ERROR: Dev server failed to start!
    echo.
    pause
    exit /b 1
)