FROM node:20-slim

RUN mkdir -p /usr/src/metawin/games

WORKDIR /usr/src/metawin/games

COPY . .

RUN npm install --production
RUN npm run build

EXPOSE 8080

ENV PROVIDER=metawin
ENV RNG=node_modules/@slotify/gdk/lib/rng/SlotifyRNG
ENV GAMES_PATH=lib/games/*/index.js
CMD ["node", "node_modules/@slotify/gdk/lib/index.js"]
