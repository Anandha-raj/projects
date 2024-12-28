CREATE DATABASE GUVI_zenclass

CREATE TABLE Users (
  userID INT AUTO_INCREMENT KEY,
  username VARCHAR(50),
  email VARCHAR(100),
  password_hash varchar(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
CREATE TABLE Courses (
  courseID INT AUTO_INCREMENT KEY,
  coursename VARCHAR(50),
  coursedescription VARCHAR(255),
  course_fee varchar(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
CREATE TABLE Classes (
  classID INT AUTO_INCREMENT KEY,
  courseID VARCHAR(50),
  class_topic VARCHAR(100),
  class_description varchar(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);

INSERT INTO Users(username, email, password_hash, created_at, updated_at) VALUES 
('anand', 'anand@gmail.com', 'grgregehhehththerhhh', NOW(), NOW()),
('aadhvik', 'aadhvik@gmail.com', 'grgregehhehththerhhh', NOW(), NOW()),
('Dhivya', 'Dhivya@gmail.com', 'grgregehhehththerhhh', NOW(), NOW());

select * from Users

INSERT INTO Courses(coursename, coursedescription, course_fee, created_at, updated_at) VALUES 
('course 1', 'This is course 1', 10000, NOW(), NOW()),
('course 2', 'This is course 2', 20000, NOW(), NOW()),
('course 3', 'This is course 3', 30000, NOW(), NOW());

select * from Courses

INSERT INTO Classes(courseID, class_topic, class_description, created_at, updated_at) VALUES 
(1, 'Node js', "app with node js", NOW(), NOW()),
(1, 'React js', "app with react js", NOW(), NOW()),
(1, 'Express js', "app with express js", NOW(), NOW());

select * from Classes