DROP DATABASE IF EXISTS sequelized_burgers_db;
CREATE DATABASE sequelized_burgers_db;

USE sequelized_burgers_db;

INSERT INTO diners (diner_name)
VALUES ("Ben"),
("Nick"),
("Corbin"),
("Keith");

INSERT INTO burgers (burger_name, DinerId)
VALUES ("Pastrami", 1),
("Bacon Burger", 4),
("Bacon Bleu Cheese", 2),
("Jalapeno and Onion Rings", 1),
("Stuff Yo Face", 1),
("Shutcho Face", 1),
("Ice Cream Burger", 3),
("Nom Nom", 1),
("Om Nom Nom", 1),
("Death by Burger!", 1),
("Olympic Burger", 1),
("Hotdog Burger", 1),
("Eata Burger", 1);