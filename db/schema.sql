CREATE burgers_db;
USE burgers_db;

CREATE TABLE hamburgers
(
	id int NOT NULL AUTO_INCREMENT,
	hamburger_name VARCHAR(140) NOT NULL,
	devour BOOLEAN DEFAULT FALSE,
	date_created TIMESTAMP,
    PRIMARY KEY ('id')
);