-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-04-2022 a las 21:40:09
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `oniun`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nombreproducto` varchar(500) NOT NULL,
  `disponible` int(20) NOT NULL,
  `descripcionrapida` varchar(300) NOT NULL,
  `referencia` varchar(100) NOT NULL,
  `proveedor` varchar(300) NOT NULL,
  `descripciondetallada` varchar(800) NOT NULL,
  `url` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `nombreproducto`, `disponible`, `descripcionrapida`, `referencia`, `proveedor`, `descripciondetallada`, `url`) VALUES
(1, 'router inalambrico', 50, '2 antenas', 'TLWR840N', 'TPLINK', 'Tiene una velocidad de 300Mbps. Control de seguridad. Puede utilizarse como punto de acceso. Posibilidad de gestión remota. Función IPTV. Frecuencia de 2.4 GHz. Su interfaz contiene.', 'https://www.tauretcomputadores.com/product/monitor-curvo-gamer-asus-rog-strix-49-hdr-va-ultra-wide-xg49vq-4ms-gtg-144hz'),
(2, 'Mouse USB', 30, 'Marca Genius', 'TLWR840N', 'TPLINK', 'Tiene una velocidad de 300Mbps. Control de seguridad. Puede utilizarse como punto de acceso. Posibilidad de gestión remota. Función IPTV. Frecuencia de 2.4 GHz. Su interfaz contiene 4 puertos LAN de 10/100Mbps y un puerto WAN 10/100Mbps.', 'https://www.tauretcomputadores.com/product/monitor-curvo-gamer-asus-rog-strix-49-hdr-va-ultra-wide-xg49vq-4ms-gtg-144hz'),
(3, 'Joystick', 0, '0', 'TLWR840N', 'TPLINK', 'Tiene una velocidad de 300Mbps. Control de seguridad. Puede utilizarse como punto de acceso. Posibilidad de gestión remota. Función IPTV. Frecuencia de 2.4 GHz. Su interfaz contiene 4 puertos LAN de 10/100Mbps y un puerto WAN 10/100Mbps.', 'https://www.tauretcomputadores.com/product/monitor-curvo-gamer-asus-rog-strix-49-hdr-va-ultra-wide-xg49vq-4ms-gtg-144hz'),
(4, 'Teclado Bluetooth', 2, 'sin teclado númerico', 'TLWR840N', 'TPLINK', 'Tiene una velocidad de 300Mbps. Control de seguridad. Puede utilizarse como punto de acceso. Posibilidad de gestión remota. Función IPTV. Frecuencia de 2.4 GHz. Su interfaz contiene 4 puertos LAN de 10/100Mbps y un puerto WAN 10/100Mbps.', 'https://www.tauretcomputadores.com/product/monitor-curvo-gamer-asus-rog-strix-49-hdr-va-ultra-wide-xg49vq-4ms-gtg-144hz'),
(5, 'Pad mouse', 15, 'Negro', 'TLWR840N', 'TPLINK', 'Tiene una velocidad de 300Mbps. Control de seguridad. Puede utilizarse como punto de acceso. Posibilidad de gestión remota. Función IPTV. Frecuencia de 2.4 GHz. Su interfaz contiene 4 puertos LAN de 10/100Mbps y un puerto WAN 10/100Mbps.', 'https://www.tauretcomputadores.com/product/monitor-curvo-gamer-asus-rog-strix-49-hdr-va-ultra-wide-xg49vq-4ms-gtg-144hz'),
(6, 'Base refrigerante', 20, 'Marca Genius', 'TLWR840N', 'TPLINK', 'Tiene una velocidad de 300Mbps. Control de seguridad. Puede utilizarse como punto de acceso. Posibilidad de gestión remota. Función IPTV. Frecuencia de 2.4 GHz. Su interfaz contiene 4 puertos LAN de 10/100Mbps y un puerto WAN 10/100Mbps.', 'https://www.tauretcomputadores.com/product/monitor-curvo-gamer-asus-rog-strix-49-hdr-va-ultra-wide-xg49vq-4ms-gtg-144hz'),
(23, 'Antena', 23, 'Televiosion colombiana', 'ANTENAX300', 'TPLINK', 'Antena para ver television colombiana', 'https://www.homecenter.com.co/homecenter-co/product/441513/decodificador-con-antena-cable-hdmi-grabacion-pvr/441513/?queryId=fd3db060-e1e7-4098-b74c-bbb4d416a696'),
(25, 'Teclado Gaming', 10, 'Teclado para video jugadores', 'RZ#3334', 'Razer', 'teclado razer analogico para jugadores', 'https://www.razer.com/gaming-keyboards/razer-huntsman-mini-analog');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(300) NOT NULL,
  `password` varchar(200) NOT NULL,
  `creation_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `creation_date`) VALUES
(1, 'anaforero@oniun.com', 'U123456*', '2022-04-14 11:41:22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
