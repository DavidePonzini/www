BEGIN;

CREATE SCHEMA www;

SET search_path TO www;

CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    password_hash VARCHAR(255) NOT NULL,
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,
    registration_ts TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE redirects (
    source VARCHAR(255) PRIMARY KEY,
    target TEXT NOT NULL
);

COMMIT;