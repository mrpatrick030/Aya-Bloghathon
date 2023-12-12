CREATE TABLE informatio (
  id SERIAL PRIMARY KEY,
  contributor VARCHAR(500) NOT NULL,
  "image-link" VARCHAR(5000) NOT NULL,
  "video-link" VARCHAR(5000) NOT NULL,
  title VARCHAR(500) NOT NULL,
  date VARCHAR(500) NOT NULL,
  description VARCHAR(20000) NOT NULL,
  category VARCHAR(500) NOT NULL,
  status VARCHAR(500) NOT NULL DEFAULT 'pending'
);
