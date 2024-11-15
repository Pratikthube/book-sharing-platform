-- Create the database
CREATE DATABASE IF NOT EXISTS book_exchange;

-- Use the database
USE book_exchange;

-- Create the 'users' table
CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) NOT NULL, -- UUID for unique user identification
    email VARCHAR(255) NOT NULL UNIQUE, -- Unique email for login
    password VARCHAR(255) NOT NULL, -- Encrypted password
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of user creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Timestamp for updates
    PRIMARY KEY (id) -- Primary key for 'users' table
);

-- Create the 'books' table
CREATE TABLE IF NOT EXISTS books (
    id CHAR(36) NOT NULL, -- UUID for unique book identification
    title VARCHAR(255) NOT NULL, -- Book title
    author VARCHAR(255) NOT NULL, -- Author of the book
    genre VARCHAR(255) NOT NULL, -- Book genre
    `condition` ENUM('New', 'Good', 'Fair', 'Poor') NOT NULL DEFAULT 'Good', -- Book condition
    user_id CHAR(36) NOT NULL, -- Foreign key referencing 'users'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Timestamp of book addition
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Timestamp for updates
    PRIMARY KEY (id), -- Primary key for 'books' table
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE -- Cascade delete on user removal
);
