START TRANSACTION;

DROP USER IF EXISTS 'dba'@'localhost';
CREATE USER 'dba'@'localhost' IDENTIFIED BY 'dav';
-- GRANT ALL PRIVILEGES ON *.* TO 'dba'@'localhost';

COMMIT;