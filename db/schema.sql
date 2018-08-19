USE v6b2sdfeidr9asrq;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    createdAt timestamp default current_timestamp,
	PRIMARY KEY (id)
);