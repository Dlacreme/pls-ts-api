# PLS API

## Init DB

```sh
sudo -u postgres psql
postgres# CREATE USER pls WITH ENCRYPTED PASSWORD 'pls_rules';
postgres# ALTER USER pls CREATEDB;
postgres# ALTER USER pls SUPERUSER;
postgres# CREATE EXTENSION "uuid-ossp";
postgres# CREATE DATABASE pls_development;
```

## Environment variables

|Name|Type|Default value|Description|
|--|--|--|--|
|PORT|string|3001|Port on which the express will listen|


## Database

You can use `/resources/db_schema.xml` on `https://ondras.zarovi.cz/sql/demo/` to see the schema of our database.

Glossary:
 - `timestamps`: `created_at` + `updated_at`
 - `timestamps_crud`: `created_at` + `updated_at` + `disabled_at`
