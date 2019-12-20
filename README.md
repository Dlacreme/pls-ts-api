# PLS Backend

## Requirements

* NodeJS
* ts-node

## Commands

* npm i           > *Install dependancies*
* npm run dev     > *Run server on development*
* npm run lint    > *Run linter*
* npm run test    > *Run unit tests and linter*
* npm run prod    > *Run in production mode*

## Notes

Please make sure your text editor is running our linter.

## DB

` sudo -u postgres psql`

```psql
  CREATE DATABASE pls_dev;
  CREATE USER pls WITH ENCRYPTED PASSWORD 'pls_rules';
  GRANT ALL PRIVILEGES ON DATABASE pls_dev TO pls;
  psql pls_dev pls < ./db/import.psql
  psql pls_dev pls < ./db/seed.psql
```

```
  $ npm run build
  $ npm i typeorm -g
  $ typeorm migration:run
```

### Generates model

Export from ondras.

`datetime` -> `timestamp`
`tinyint` -> `bool`

```
./node_modules/.bin/ts-node ./bin/sync-db-models.ts
```