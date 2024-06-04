@echo off
setlocal
rem Get version from package.json
for /f "delims=" %%a in ('type ..\package.json ^| jq -r ".version"') do set version=%%a
set image=ghcr.io/slotify/games/metawin:v%version%
rem Check if the image exists
docker pull %image% >NUL 2>&1
if errorlevel 1 (
    echo %image% to be deployed
    echo Building & pushing
    set DOCKER_BUILDKIT=1
    docker buildx build --platform linux/amd64 --push -t %image% ..
) else (
    echo %image% already exists
)
endlocal