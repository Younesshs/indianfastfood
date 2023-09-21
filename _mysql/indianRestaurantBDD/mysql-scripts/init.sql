-- Création de la base de données IndianRestaurant
CREATE DATABASE IF NOT EXISTS indianRestaurant;

USE indianRestaurant;

-- Création de la table country
CREATE TABLE country (
  id_country INT AUTO_INCREMENT,
  country_name VARCHAR(255),
  PRIMARY KEY(id_country)
);

-- Création de la table warehouse
CREATE TABLE warehouse (
  id_warehouse INT AUTO_INCREMENT,
  warehouse_name VARCHAR(255),
  PRIMARY KEY(id_warehouse)
);

-- Création de la table product
CREATE TABLE product (
  id_product INT AUTO_INCREMENT,
  product_name VARCHAR(50),
  product_price DECIMAL(10, 2),
  product_quantityStock INT,
  product_fabricationDate DATETIME,
  PRIMARY KEY(id_product)
);

-- Création de la table image
CREATE TABLE image (
  id_image INT AUTO_INCREMENT,
  image_name VARCHAR(50),
  image_format VARCHAR(10),
  id_product INT NOT NULL,
  PRIMARY KEY(id_image),
  FOREIGN KEY(id_product) REFERENCES product(id_product)
);

-- Création de la table restaurant
CREATE TABLE restaurant (
  id_restaurant INT AUTO_INCREMENT,
  restaurant_name VARCHAR(100),
  id_warehouse INT NOT NULL,
  PRIMARY KEY(id_restaurant),
  FOREIGN KEY(id_warehouse) REFERENCES warehouse(id_warehouse)
);

-- Création de la table role
CREATE TABLE role (
  id_role INT AUTO_INCREMENT,
  role_name VARCHAR(25),
  isAdmin_role BOOLEAN,
  PRIMARY KEY(id_role)
);

-- Création de la table city
CREATE TABLE city (
  id_city INT AUTO_INCREMENT,
  city_name VARCHAR(255),
  city_zipCode INT,
  id_country INT NOT NULL,
  PRIMARY KEY(id_city),
  FOREIGN KEY(id_country) REFERENCES country(id_country)
);

-- Création de la table _order
CREATE TABLE _order (
  id_order INT AUTO_INCREMENT,
  order_status TINYINT,
  order_date DATETIME,
  id_restaurant INT NOT NULL,
  PRIMARY KEY(id_order),
  FOREIGN KEY(id_restaurant) REFERENCES restaurant(id_restaurant)
);

-- Création de la table order_item
CREATE TABLE order_item (
  id_orderItem INT AUTO_INCREMENT,
  orderItem_quantity SMALLINT,
  orderItem_comment TEXT,
  orderItem_price DECIMAL(10, 2),
  id_order INT NOT NULL,
  PRIMARY KEY(id_orderItem),
  FOREIGN KEY(id_order) REFERENCES _order(id_order)
);

-- Création de la table address
CREATE TABLE address (
  id_address INT AUTO_INCREMENT,
  address_number INT,
  address_streetName VARCHAR(255),
  address_streetAdd VARCHAR(255),
  id_restaurant INT NOT NULL,
  id_city INT NOT NULL,
  PRIMARY KEY(id_address),
  FOREIGN KEY(id_restaurant) REFERENCES restaurant(id_restaurant),
  FOREIGN KEY(id_city) REFERENCES city(id_city)
);

-- Création de la table _member
CREATE TABLE _member (
  id_member INT AUTO_INCREMENT,
  member_firstName VARCHAR(50),
  member_lastName VARCHAR(50),
  member_mobilePhone SMALLINT,
  member_email VARCHAR(255),
  member_password VARCHAR(25),
  id_address INT NOT NULL,
  PRIMARY KEY(id_member),
  FOREIGN KEY(id_address) REFERENCES address(id_address)
);

-- Création de la table customer
CREATE TABLE customer (
  id_customer INT AUTO_INCREMENT,
  customer_firstName VARCHAR(50),
  customer_lastName VARCHAR(50),
  customer_email VARCHAR(255),
  customer_password VARCHAR(25),
  customer_mobilePhone VARCHAR(12),
  customer_fidelityPoint INT,
  id_address INT NOT NULL,
  PRIMARY KEY(id_customer),
  FOREIGN KEY(id_address) REFERENCES address(id_address)
);

-- Création de la table member__role
CREATE TABLE member__role (
  id_member INT,
  id_role INT,
  PRIMARY KEY(id_member, id_role),
  FOREIGN KEY(id_member) REFERENCES _member(id_member),
  FOREIGN KEY(id_role) REFERENCES role(id_role)
);

-- Création de la table member__restaurant
CREATE TABLE member__restaurant (
  id_restaurant INT,
  id_member INT,
  PRIMARY KEY(id_restaurant, id_member),
  FOREIGN KEY(id_restaurant) REFERENCES restaurant(id_restaurant),
  FOREIGN KEY(id_member) REFERENCES _member(id_member)
);

-- Création de la table orderItem__Product
CREATE TABLE orderItem__Product (
  id_orderItem INT,
  id_product INT,
  PRIMARY KEY(id_orderItem, id_product),
  FOREIGN KEY(id_orderItem) REFERENCES order_item(id_orderItem),
  FOREIGN KEY(id_product) REFERENCES product(id_product)
);

-- Création de la table customer__order
CREATE TABLE customer__order (
  id_customer INT,
  id_order INT,
  PRIMARY KEY(id_customer, id_order),
  FOREIGN KEY(id_customer) REFERENCES customer(id_customer),
  FOREIGN KEY(id_order) REFERENCES _order(id_order)
);

-- Création de la table customer__restaurant
CREATE TABLE customer__restaurant (
  id_customer INT,
  id_restaurant INT,
  PRIMARY KEY(id_customer, id_restaurant),
  FOREIGN KEY(id_customer) REFERENCES customer(id_customer),
  FOREIGN KEY(id_restaurant) REFERENCES restaurant(id_restaurant)
);

-- Création de la table warehouse__product
CREATE TABLE warehouse__product (
  id_warehouse INT,
  id_product INT,
  PRIMARY KEY(id_warehouse, id_product),
  FOREIGN KEY(id_warehouse) REFERENCES warehouse(id_warehouse),
  FOREIGN KEY(id_product) REFERENCES product(id_product)
);
