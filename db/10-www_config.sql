START TRANSACTION;

DROP DATABASE IF EXISTS www_config;

CREATE DATABASE www_config;
GRANT SELECT, INSERT, UPDATE, DELETE ON www_config.* TO 'dba'@'localhost';

CREATE TABLE www_config.redirects (
    name VARCHAR(100) PRIMARY KEY NOT NULL,
    target TEXT NOT NULL
);

COMMIT;