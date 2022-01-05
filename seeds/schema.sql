DROP DATABASE IF EXISTS licensing_db;
CREATE DATABASE licensing_db;

CREATE TABLE users (
    -- Creates a numeric column called "id" --
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- Makes a string column called "name" which cannot contain null --
    username VARCHAR(30) NOT NULL,
    password VARCHAR(128) NOT NULL
);

CREATE TABLE projects(
    project_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(30) NOT NULL, 
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
)

CREATE TABLE keys(
    key VARCHAR(30) NOT NULL PRIMARY KEY,
    project_id INT,

    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
)