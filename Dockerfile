
FROM node:lts-alpine3.14 AS febuild
WORKDIR /app
COPY frontend/package.json .
COPY frontend/package-lock.json .
COPY frontend/tsconfig.json .
RUN npm ci
COPY frontend/webpack.config.js .
COPY frontend/src/ src/
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN npm run build

FROM node:lts-alpine3.14
WORKDIR /app
COPY backend/package.json .
COPY backend/package-lock.json .
COPY backend/tsconfig.json .
RUN npm ci
COPY backend/src/ src/
RUN ./node_modules/.bin/tsc
EXPOSE $PORT
COPY --from=febuild /app/dist /app/dist/public
WORKDIR /app/dist
CMD ["node", "./index.js"]
