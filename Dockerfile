#FROM node:lts-alpine3.14 AS bebuild
#WORKDIR /app
#COPY backend/package.json .
#COPY backend/package-lock.json .
#COPY backend/tsconfig.json .
#RUN npm ci
#COPY backend/src/ src/
#RUN ./node_modules/.bin/tsc

FROM node:lts-alpine3.14 AS febuild
WORKDIR /app
COPY frontend/package.json .
COPY frontend/package-lock.json .
COPY frontend/tsconfig.json .
RUN npm ci
COPY frontend/webpack.config.js .
COPY frontend/src/ src/
RUN npm run build

#FROM node:lts-alpine3.14
#EXPOSE $PORT
#WORKDIR /app
#COPY --from=bebuild /app/dist /app
#COPY --from=bebuild /app/node_modules /
#COPY --from=febuild /app/dist /app/public
#USER node
#CMD ["ls", "-la"]
#CMD ["node", "./index.js"]

FROM node:lts-alpine3.14
WORKDIR /app
COPY backend/package.json .
COPY backend/package-lock.json .
COPY backend/tsconfig.json .
RUN npm ci
COPY backend/src/ src/
RUN ./node_modules/.bin/tsc
EXPOSE $PORT
COPY --from=febuild /app /app/public
USER node
CMD ["ls", "-la"]
CMD ["node", "./dist/index.js"]
