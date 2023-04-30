create TABLE post(
	id SERIAL PRIMARY KEY,
	content VARCHAR(255),
	title VARCHAR(255),
	user_id INTEGER,
	FOREIGN KEY (user_id) REFERENCES person (id)
);


create TABLE person(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	username VARCHAR(255)
);