DROP DATABASE IF EXISTS sequelized_burgers_db;
CREATE DATABASE sequelized_burgers_db;

USE sequelized_burgers_db;

INSERT INTO diners (diner_name)
VALUES ("Dave"),
("Fatty"),
("Arnold");

INSERT INTO burgers (burger_name, DinerId)
VALUES ("Pastrami", 1),
("Bacon Bleu Cheese", 2),
("Jalapeno and Onion Rings", 1),
("Stuff Yo Face", 1),
("Shutcho Face", 1),
("Om Nom Nom", 1),
("Death by Burger!", 1),
("Olympic Burger", 1),
("Obesity Rules", 1),
("I Eat", 1),
("Nom Nom", 2);