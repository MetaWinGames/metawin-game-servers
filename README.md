# Metawin Game Servers

## Prerequisites:
- update system
- (for easy MacOs installations) install homebrew: https://brew.sh/
- install git: brew install git
- install node: brew install node

## RTP Simulation setup

- git clone https://github.com/slotify/meatwin-game-servers.git meatwin-game-servers
- put packages registry token in .npmrc file
- cd metawin
- npm install --force
- npm run build
- npx slotify-gdk stats -g games/book-of-magic/index.ts -i 1000000 --cores=8 --bet=1 --variant=rtp100

## Game Server Setup

- clone and setup Slotify solution (as described in root [Slotify local Quickstart](../../README.md))
- put metawin repository games folder ~/dev/slotify/games/metawin
- change local platform's RGS/Game server lines to run Metawin games in dev.sh script:
```
GAMES_SERVICES="GAMES_SERVICES=test-provider,metawin GAMES_TEST_PROVIDER_SERVICE_HOST=localhost GAMES_TEST_PROVIDER_SERVICE_PORT=8090 GAMES_ROSETTA_SERVICE_HOST=localhost GAMES_ROSETTA_SERVICE_PORT=8091"
"cd ../metawin; IS_PRODUCTION=$IS_PRODUCTION $LOG_LEVEL $SERVICES ENV=$ENV PORT=8091 GAMES_PATH=games/* npm run start:dev" \
```
- start local platform slotify/dev.sh

## Pushing Docker image

- make sure you have Docker installed (https://www.docker.com/products/docker-desktop/)
- login to docker with password from .npmrc
```
export CR_PAT=TOKEN_FROM_NPMRC_FILE
echo $CR_PAT | docker login ghcr.io -u user --password-stdin
````
- script requires jq JSON Processor: `brew install jq`
- Increase version in package.json
```
cd script
./deploy.sh
```
- you might need to elevate script's execute permissions `chmod +x deploy.sh`
