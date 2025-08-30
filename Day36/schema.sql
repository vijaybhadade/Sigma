create TABLE user(
    id int PRIMARY KEY,
    username VARCHAR(40) UNIQUE,
    email VARCHAR(30)  UNIQUE NOT NULL,
    password VARCHAR(40) NOT NULL
);


SHOW TABLES;

