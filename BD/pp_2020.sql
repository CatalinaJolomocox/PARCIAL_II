-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-10-2020 a las 08:52:03
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pp_2020`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id_alumno` int(11) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `correo` varchar(70) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `curso_id` int(11) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `descripcion` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`curso_id`, `nombre`, `descripcion`) VALUES
(1, 'Español', 'Aplica la normativa del idioma al redactar diferentes tipos de texto para los que y selecciona la estructura adecuada.'),
(2, 'Idiomas Mayas', 'Expresa sus necesidades comunicativas utilizando su idioma maya materno en el contexto escolar.'),
(3, 'Ingles', 'Aplica estrategias cognitivas y metacognitivas en la comprensión de nuevo vocabulario.'),
(4, 'TIC', 'Relaciona los diferentes dispositivos y comandos del sistema operativo, de Microsoft Office y de Internet de acuerdo con las aplicaciones de cada uno de éstos.'),
(5, 'Matemáticas', 'Utiliza las relaciones y propiedades entre diferentes patrones (algebraicos, geométricos y trigonométricos) en la representación de información y la resolución de problema.'),
(6, 'Ciencias Naturales', 'Contrasta los hábitos de su familia y de su comunidad con las prácticas que contribuyen a la conservación y el mejoramiento de la salud.'),
(7, 'Ciencias Sociales y Formaci?n Ciudadana', 'Emite juicios acerca del contexto histórico mundial dentro del cual se desarrolló el proceso de formación de la nación guatemalteca que creó una ciudadanía diferenciada con la continuidad de la estructura colonial.'),
(8, 'Formación Musical', 'Establece diferencias entre mensajes musicales provenientes de su propia cultura y otros similares que identifican a otras culturas.'),
(9, 'Artes Plásticas', 'Utiliza los factores de comunicación y tecnología en el diseño de campañas publicitarias de carácter informativo.'),
(10, 'Danza y Expresión Corporal', 'Interpreta bailes y danzas, individuales o grupales, expresando destreza en el uso coordinado del cuerpo en el espacio.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `maestros`
--

CREATE TABLE `maestros` (
  `id_maestro` int(11) NOT NULL,
  `nombre` varchar(60) DEFAULT NULL,
  `apellido` varchar(60) DEFAULT NULL,
  `telefono` int(8) DEFAULT NULL,
  `correo` varchar(70) DEFAULT NULL,
  `fecha_nac` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id_alumno`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`curso_id`);

--
-- Indices de la tabla `maestros`
--
ALTER TABLE `maestros`
  ADD PRIMARY KEY (`id_maestro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `curso_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `maestros`
--
ALTER TABLE `maestros`
  MODIFY `id_maestro` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
