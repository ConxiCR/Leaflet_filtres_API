-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Temps de generació: 15-02-2021 a les 13:17:41
-- Versió del servidor: 10.4.17-MariaDB
-- Versió de PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de dades: `my_app`
--

-- --------------------------------------------------------

--
-- Estructura de la taula `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `latitud` decimal(8,6) NOT NULL,
  `longitud` decimal(8,6) NOT NULL,
  `kind_food` set('Italiana','Mediterrània','Catalana','Sense Gluten','De Mercat','Portuguesa','tapes','Japonesa') NOT NULL,
  `fotos` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Bolcament de dades per a la taula `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `latitud`, `longitud`, `kind_food`, `fotos`) VALUES
(1, 'La Piazzenza', 'Avinguda de Gaudí  27', '41.407280', '2.174050', 'Italiana', 'La_Piazzenza.jpg'),
(2, 'Restaurant Art i Tapes', 'Carrer de Mallorca 450', '41.405510', '2.177610', 'Mediterrània', 'Restaurant_Art_i_Tapes.jpg'),
(3, 'Can Josep', 'Carrer de Roger de Flor  237', '41.402870', '2.167690', 'Catalana', 'Can_Josep.jpg'),
(4, 'Restaurant Gut', 'Carrer del Perill 13', '41.399760', '2.161280', 'Sense Gluten', 'Restaurant_Gut.jpg'),
(5, 'Restaurant Zed', 'Carrer de València 399', '41.401630', '2.174620', 'De Mercat', 'Restaurant Zed.jpg'),
(6, 'Oporto Restaurante', 'Carrer de Sardenya 296 Local 1', '41.402470', '2.175220', 'Portuguesa', 'Oporto_Restaurante.jpg'),
(7, 'The Sopa Boba', 'Carrer del Bruc 115', '41.396570', '2.166580', 'tapes', 'The_sopa_Boba.jpg'),
(8, 'PUR Restaurant', 'Passatge de la Concepció 11', '41.394850', '2.160070', 'De Mercat', 'Pur_Restaurant.jpg'),
(9, 'Con Gracia', 'Carrer de Martínez de la Rosa 8', '41.399410', '2.160100', 'Catalana', 'Con_Gracia.jpg'),
(10, 'Shunka', 'Carrer dels Sagristans 5', '41.385360', '2.175150', 'Japonesa', 'Shunka.jpg');

--
-- Índexs per a les taules bolcades
--

--
-- Índexs per a la taula `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);

--
-- AUTO_INCREMENT per les taules bolcades
--

--
-- AUTO_INCREMENT per la taula `restaurants`
--
ALTER TABLE `restaurants`
  MODIFY `id_restaurant` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
