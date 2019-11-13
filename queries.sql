CREATE DATABASE analytics;

USE analytics;

--Line chart 
CREATE TABLE line_chart
(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(45) NOT NULL,
    series DOUBLE NOT NULL
);

INSERT INTO line_chart(category, series) VALUES('Jan', 29.9);
INSERT INTO line_chart(category, series) VALUES('Feb', 71.5);
INSERT INTO line_chart(category, series) VALUES('Mar', 106.4);
INSERT INTO line_chart(category, series) VALUES('Apr', 129.2);
INSERT INTO line_chart(category, series) VALUES('May', 144.0);
INSERT INTO line_chart(category, series) VALUES('Jun', 176.0);
INSERT INTO line_chart(category, series) VALUES('Jul', 135.6);
INSERT INTO line_chart(category, series) VALUES('Aug', 148.5);
INSERT INTO line_chart(category, series) VALUES('Sep', 216.4);
INSERT INTO line_chart(category, series) VALUES('Oct', 194.4);
INSERT INTO line_chart(category, series) VALUES('Nov', 95.6);
INSERT INTO line_chart(category, series) VALUES('Dec', 54.4);

SELECT * FROM line_chart;
--End Line chart

--Multiple line chart
CREATE TABLE multiple_line_chart
(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    subscribers VARCHAR(10),
    year VARCHAR(4) NOT NULL
);
--End Multiple line chart

--Pie chart
CREATE TABLE pie_chart(
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    yaxis INT NOT NULL
)
--End Pie chart

