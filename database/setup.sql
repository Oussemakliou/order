-- Script SQL pour créer la base de données Tuniform
-- Exécutez ce script dans MySQL Workbench ou phpMyAdmin

-- Créer la base de données
CREATE DATABASE IF NOT EXISTS tuniform_orders;

-- Utiliser la base de données
USE tuniform_orders;

-- Créer la table orders
CREATE TABLE IF NOT EXISTS orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insérer quelques données de test
INSERT INTO orders (customer_name, email) VALUES 
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Mike Johnson', 'mike.johnson@example.com');

-- Afficher les données
SELECT * FROM orders;