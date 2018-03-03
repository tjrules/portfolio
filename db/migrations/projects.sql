/c portfolio

DROP TABLE IF EXISTS projects

CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    image_url TEXT,
    link TEXT,
    user_id INTEGER
);