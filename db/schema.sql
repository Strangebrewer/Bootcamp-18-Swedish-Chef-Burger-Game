DROP DATABASE IF EXISTS sequelized_burgers_db;
CREATE DATABASE sequelized_burgers_db;

USE sequelized_burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(200) NOT NULL,
  devoured BOOLEAN NOT NULL default false,
  PRIMARY KEY(id)
);