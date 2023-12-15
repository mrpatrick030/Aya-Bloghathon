CREATE TABLE informatioblog (
  id SERIAL PRIMARY KEY,
  contributor VARCHAR(500) NOT NULL,
  image_link VARCHAR(5000) NOT NULL,
  video_link VARCHAR(5000) NOT NULL,
  title VARCHAR(500) NOT NULL,
  date VARCHAR(500) NOT NULL,
  description VARCHAR(20000) NOT NULL,
  category VARCHAR(500) NOT NULL,
  status VARCHAR(500) NOT NULL DEFAULT 'pending'
);

CREATE TABLE informatiocontributors (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL
);

CREATE TABLE informatioadmin (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    gender VARCHAR(100) NOT NULL,
    secretkey VARCHAR(50) NOT NULL DEFAULT 'admiN100$xyz'
);


