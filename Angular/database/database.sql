CREATE DATABASE ng_gamestest_db;
CREATE TABLE games(
   id INT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(180),
   description VARCHAR(255),
   image VARCHAR(200),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
DESCRIBE games;
 
