DROP DATABASE IF EXISTS "burger_db"; 
CREATE DATABASE "burger_db";
USE "burger_db";

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Tofu Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Mushroom Burger', FALSE);




