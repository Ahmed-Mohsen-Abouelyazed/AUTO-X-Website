@echo off
REM AUTO-X Website Build and Deploy Script
REM Builds the production-ready site and deploys to Netlify

echo AUTO-X Website Build & Deploy
echo ==============================
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

echo Building production bundle...
npm run build

if errorlevel 1 (
    echo.
    echo ERROR: Build failed!
    echo.
    pause
    exit /b 1
)

echo.
echo Build successful! Output in ./dist
echo.

REM Check if netlify CLI is available
npx netlify --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Netlify CLI detected.
    echo Deploying to Netlify...
    echo.
    echo NOTE: A browser window will open for Netlify authentication.
    echo Please sign in and authorize the CLI, then return here.
    echo.
    npx netlify deploy --prod --dir=dist
    if errorlevel 1 (
        echo.
        echo ERROR: Deployment failed!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo Deployment successful!
) else (
    echo Netlify CLI not found. Installing...
    npm install -g netlify-cli
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install Netlify CLI!
        echo.
        pause
        exit /b 1
    )
    echo Deploying to Netlify...
    echo.
    echo NOTE: A browser window will open for Netlify authentication.
    echo Please sign in and authorize the CLI, then return here.
    echo.
    npx netlify deploy --prod --dir=dist
    if errorlevel 1 (
        echo.
        echo ERROR: Deployment failed!
        echo.
        pause
        exit /b 1
    )
    echo.
    echo Deployment successful!
)

echo.
echo Done!
pause