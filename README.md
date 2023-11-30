# proyecto-final-vial-gonett

SENTENCIAS SQL:

DROP TABLE IF EXISTS `servicios`;
CREATE TABLE IF NOT EXISTS `servicios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img_id` varchar(200) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `titulo` varchar(200) COLLATE utf8mb3_unicode_ci NOT NULL,
  `subtitulo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  `cuerpo` text COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id`, `img_id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'gq0eusa0q7vujx1apdip', '¡Nueva disponibilidad de camiones!', 'Servicios de venta de tierra', 'A partir de la nueva incorporación a nuestra flota, contamos con más cupos para brindar nuestros servicios de traslado y venta de tierra negra. ¿Estás interesado? ¡Ponete en contacto con nosotros en nuestra sección de contacto!'),
(2, 'gmqqi6mclobwandjyyzl', 'Pistas de salto', 'Nuevo ', 'Colaboramos estrechamente con vos para diseñar pistas de equitación y salto que se adapten a tus necesidades, ya sea para entrenamiento, competencia o recreación. Nuestros materiales de primera calidad aseguran la comodidad de jinetes y caballos.'),
(9, 'cmajd0sioesenbewqjqv', 'Pavimentación y asfaltado', '03', 'Desde carreteras hasta estacionamientos, proporcionamos asfaltado de alta calidad que soporta el paso del tiempo y las condiciones climáticas adversas. Realizamos un marcado vial preciso y duradero para garantizar la seguridad en carreteras y estacionamientos.'),
(8, 'ddkixhi9ditpqb7gxcc1', 'Canchas de polo y fútbol', '02', 'Preparando una base estable y uniforme, utilizamos los mejores materiales y técnicas de instalación de césped para garantizar un terreno de juego de calidad internacional. Ofrecemos servicios de mantenimiento y restauración a lo largo del tiempo para asegurarnos de que tu cancha siga siendo de primera calidad.'),
(10, 's6a6tsgauhnosrdkbjt4', 'Movimiento de Suelos', '04', 'Realizamos excavaciones de precisión y creamos superficies perfectamente niveladas, desde predios barriales hasta parques industriales. Además, nos aseguramos de que tus suelos estén compactados para la correcta estabilidad de tus estructuras, y diseñamos soluciones de drenaje que mantienen la propiedad seca y protegida de la erosión fluvial.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` varchar(200) COLLATE utf8mb3_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `user`, `password`) VALUES
(1, 'Melissa', 'bd7db7397f7d83052f829816ecc7f004'),
(2, 'German', 'ad9be0b5d43f9e2aba895f3ede723aa1');
COMMIT;
