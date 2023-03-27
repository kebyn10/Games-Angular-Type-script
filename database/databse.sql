CREATE DATABASE ng_games_db;
USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE users(
    email varchar(70) PRIMARY KEY,
    name varchar(50),
    surname varchar(50),
    pass varchar(30));
DESCRIBE games;