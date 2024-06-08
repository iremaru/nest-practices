# Readme

## 🏛️ Stack

1. PostgreSQL
2. Docker
3. Nest
4. Typescript

## 🐣 First steps

1. Clone the repo
2. Duplicate the env.template file, delete '.template' termination and fill it up:

> All data can be found in the docker-compose file.

   ````BASH
   MONGO_DB=mongodb://{host}:{portListeningTheDB}/{dbName}
   PORT={apiPort}
   ````

1. Install the dependencies with ``npm i``
2. Get nest cli instaled ``npm i @nestjs/cli``
3. Run the database ``docker compose up -d``
4. ``yarn start:dev``

## 📥Populate database with fake data

Only for local dev.

Get: `` http:localhost:3000/seed ``
