-- Crear la base de datos
DROP DATABASE IF EXISTS greenlink;

CREATE DATABASE IF NOT EXISTS greenlink;

-- Usar la base de datos
USE greenlink;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    cantidad DECIMAL(10, 2) NOT NULL,
    stock_minimo DECIMAL(10, 2) NOT NULL,
    stock_maximo DECIMAL(10, 2) NOT NULL,
    fecha_entrada DATE NOT NULL,
    lote VARCHAR(255) NOT NULL
);

CREATE TABLE materiales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    cantidad INT NOT NULL,
    stock_minimo INT NOT NULL,
    fecha_entrada DATE NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
