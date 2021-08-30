# shoutbox
A simple shoutbox application, which stores messages in database.

## Prerequisites
- docker
- (optional) postgres

Postgres can run from 
## How to run in docker

```
cp template.env .env
docker-compose up
```
* editing .env file you can change ports and postgres username but for testing it should be sufficient
##how to access

localhost:4000 

* the port is based on your .env file

#Development
for this setup you need 4 separate terminal windows/processes ( I know it is not perfect at all :-( ))
## backend 
run watcher for build 
```
cd backend
npm ci
tsc --watch or ./node_modules/.bin/tsc --watch
```

run webserver in another terminal/cmd/bash
```
npm run start
```

## frontend 
run watcher for build
```
cd frontend
npm ci 
npm run watch
```

## DB
you can run postgres in docker or you can your (local) instance 
```
docker-compose -f docker-compose.dev.yml up
```
