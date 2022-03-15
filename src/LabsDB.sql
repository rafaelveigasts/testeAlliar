DROP DATABASE IF EXISTS LabsDB;

CREATE DATABASE LabsDB;

USE LabsDB;

CREATE TABLE Lab (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    address VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE Exam (
    id INT NOT NULL auto_increment,
    name VARCHAR(30) NOT NULL,
    type VARCHAR(30) NOT NULL,
    status VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE Lab_Exam (
    id INT NOT NULL auto_increment,
    Lab_id INT,
    Exam_id INT ,
    FOREIGN KEY (Exam_id)
        REFERENCES Exam (id)
        ON DELETE CASCADE,
    FOREIGN KEY (Lab_id)
        REFERENCES Lab (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;
