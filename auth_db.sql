-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 18, 2025 at 03:54 AM
-- Server version: 9.1.0
-- PHP Version: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `challengeentry`
--

DROP TABLE IF EXISTS `challengeentry`;
CREATE TABLE IF NOT EXISTS `challengeentry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `challenge_id` int NOT NULL,
  `joined_at` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `daily_progess` int DEFAULT NULL,
  `completion_rate` int DEFAULT NULL,
  `finished_at` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `challenge_id` (`challenge_id`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `challenges`
--

DROP TABLE IF EXISTS `challenges`;
CREATE TABLE IF NOT EXISTS `challenges` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `type` varchar(255) NOT NULL,
  `target` varchar(255) NOT NULL,
  `visibility` varchar(255) NOT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `thumbnail` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `title` (`title`),
  UNIQUE KEY `title_2` (`title`),
  UNIQUE KEY `title_3` (`title`),
  UNIQUE KEY `title_4` (`title`),
  UNIQUE KEY `title_5` (`title`),
  UNIQUE KEY `title_6` (`title`),
  UNIQUE KEY `title_7` (`title`),
  UNIQUE KEY `title_8` (`title`),
  UNIQUE KEY `title_9` (`title`),
  UNIQUE KEY `title_10` (`title`),
  UNIQUE KEY `title_11` (`title`),
  UNIQUE KEY `title_12` (`title`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`id`, `title`, `description`, `start_date`, `end_date`, `type`, `target`, `visibility`, `created_by`, `updated_by`, `createdAt`, `updatedAt`, `thumbnail`) VALUES
(1, 'Tutorial Bahasa Ular Piton plssttt.....s', '<h1>Tutorial bahasa python biar bisa bahasa ular piton dan berkomunikasi dengan bangsa ular lainnya, sttt... plsesttttt... (ini di update lewat frontend)</h1><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus officia recus', '2025-07-20 00:00:00', '2025-07-30 00:00:00', 'Monthly', 'Bisa membuat kalkulator CLI sederhana (rill)', 'public', NULL, NULL, '2025-07-10 06:19:03', '2025-07-17 08:46:36', ''),
(2, 'Tutorial Bahasa JawaScript', '<p>bahasa sejuta umat</p>', '2025-07-21 00:00:00', '2025-07-31 00:00:00', 'Weekly', 'Bisa membuat DOM', 'public', NULL, NULL, '2025-07-10 06:34:06', '2025-07-17 03:45:31', ''),
(3, 'Tutorial Mandarin sampai jago', '<p>Dijamin 100% nggk cuman bisa ni hao doang</p>', '2025-07-21 00:00:00', '2025-07-31 00:00:00', 'Monthly', 'Bisa HSK 1', 'public', NULL, NULL, '2025-07-10 08:45:03', '2025-07-17 03:45:03', '');

-- --------------------------------------------------------

--
-- Table structure for table `logdays`
--

DROP TABLE IF EXISTS `logdays`;
CREATE TABLE IF NOT EXISTS `logdays` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `date` datetime NOT NULL,
  `water_intake` int NOT NULL,
  `sleep_duration` int NOT NULL,
  `workout_completed` tinyint(1) NOT NULL,
  `mood` int NOT NULL,
  `notes` varchar(255) NOT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logdays`
--

INSERT INTO `logdays` (`id`, `user_id`, `date`, `water_intake`, `sleep_duration`, `workout_completed`, `mood`, `notes`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, NULL, '2025-07-21 00:00:00', 2000, 7, 1, 5, 'Hari ini sepertinya gacor', NULL, NULL, '2025-07-10 08:25:17', '2025-07-10 08:25:17');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `name_3` (`name`),
  UNIQUE KEY `name_4` (`name`),
  UNIQUE KEY `name_5` (`name`),
  UNIQUE KEY `name_6` (`name`),
  UNIQUE KEY `name_7` (`name`),
  UNIQUE KEY `name_8` (`name`),
  UNIQUE KEY `name_9` (`name`),
  UNIQUE KEY `name_10` (`name`),
  UNIQUE KEY `name_11` (`name`),
  UNIQUE KEY `name_12` (`name`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', NULL, NULL, '2025-07-10 11:11:22', '2025-07-10 11:11:22'),
(2, 'User', NULL, NULL, '2025-07-10 04:00:27', '2025-07-10 04:00:27'),
(3, 'Anomali', NULL, NULL, '2025-07-14 09:06:00', '2025-07-14 09:06:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('_26dPJlFBlFccatsciLHMVOkufbT5fH4', '2025-07-19 01:44:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:44:06', '2025-07-18 01:44:06'),
('_PIlpUSGqIr_-xwWqpKufWtXY0TdUKdR', '2025-07-19 01:55:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:55:37', '2025-07-18 01:55:37'),
('-2SVT-0F3ntQb_b_SXFmWdP2ScxGtxyI', '2025-07-19 02:39:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:46', '2025-07-18 02:39:46'),
('-EyRGTl5ZQcLpKKqHBo7I7hp_LIg0F7o', '2025-07-19 02:14:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:14:15', '2025-07-18 02:14:15'),
('00ldD70DfFm3t73dc2p7YgGqBZGkAc9b', '2025-07-19 01:46:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:46:33', '2025-07-18 01:46:33'),
('09DpXCJ2syXowxzrXr5jl6mq1q4ISzyc', '2025-07-19 01:50:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:50:44', '2025-07-18 01:50:44'),
('0V0Cb_FQUMkeXj0ivw50o1rw7_tzqCJk', '2025-07-19 02:14:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:14:54', '2025-07-18 02:14:54'),
('1ipjBrjcNQNi4P7VfZ5uI4Aj03LMSqJp', '2025-07-19 02:39:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:04', '2025-07-18 02:39:04'),
('1lFvsrawQMkQxElSOtO6X4FzenxA1JF0', '2025-07-19 02:03:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:03:37', '2025-07-18 02:03:37'),
('1n-enM2RLHQEH1TngN_kumrlp3jAWUSn', '2025-07-19 02:25:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:25:38', '2025-07-18 02:25:38'),
('1PN56hC7KqbIw_opIx7sgSWlHgBEMY1N', '2025-07-19 02:01:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:01:06', '2025-07-18 02:01:06'),
('1VNK1x94PuFiPY70OSfa1izyBdoEo4G_', '2025-07-18 05:27:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:27:09', '2025-07-17 05:27:09'),
('1Zl_9dAQQb92x4KaCMhpFY7T932Wa1Hp', '2025-07-19 02:17:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:17:28', '2025-07-18 02:17:28'),
('31hT9_BPou-3Q_m4WnrrkH0nmfc1sn1j', '2025-07-19 01:56:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:56:20', '2025-07-18 01:56:20'),
('369WYdYov16hlzEmspyYlvAOU55LyJV7', '2025-07-18 07:30:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:30:28', '2025-07-17 07:30:28'),
('3DJz0pFOVKfHt4Lh8NaTrJO0cRcnDqRA', '2025-07-18 06:58:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:58:40', '2025-07-17 06:58:40'),
('3he_YiesE7hzASkebxkHbUxK_071uKX7', '2025-07-18 05:27:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:27:51', '2025-07-17 05:27:51'),
('3Qsf2_EvxkPtQmJYTt1WK-Rs4Ui6gC0L', '2025-07-18 08:46:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:46:36', '2025-07-17 08:46:36'),
('3SMOh3qUCu7kf01971Vlu2wnx1dLKYEZ', '2025-07-19 01:44:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:44:25', '2025-07-18 01:44:25'),
('4fML-AnlCVkNmOYdqENFwuI46sxhbcB_', '2025-07-18 07:00:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:00:14', '2025-07-17 07:00:14'),
('4mxMB0dEviNwrZN2oleUrxFGfH2NQgfQ', '2025-07-18 03:45:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 03:45:21', '2025-07-17 03:45:21'),
('4NCU2n1BJc7izbFtD37hEfluFrJHXl9Z', '2025-07-18 07:55:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:55:25', '2025-07-17 07:55:25'),
('4SF1IMK2X8ImTcz8nnXVzcikCLWoviHN', '2025-07-19 02:39:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:16', '2025-07-18 02:39:16'),
('4xJUboTgl_ZlopyuSoLlB8kWQ5gmr_C3', '2025-07-19 01:56:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:56:24', '2025-07-18 01:56:24'),
('53_d_c0LJI7I3N4sBh6kD6amxdbKJWzG', '2025-07-18 08:38:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:38:25', '2025-07-17 08:38:25'),
('56hzEk8616H_W2-qk4FiW3zTQMt8zn55', '2025-07-19 01:37:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:37:16', '2025-07-18 01:37:16'),
('5snTTXcdlZoVAI0abbp3VD_XA0YRqSXY', '2025-07-19 01:56:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:56:18', '2025-07-18 01:56:18'),
('65G3aAF00T-XNlAJMLCkkJ-ZPZFyfsSb', '2025-07-19 02:39:11', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:11', '2025-07-18 02:39:11'),
('6BuvBVhK_QY8Oh3CKl9CoAftenQT02Hy', '2025-07-18 07:55:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:55:46', '2025-07-17 07:55:46'),
('6JBLymR8w4HoOTdD3_7JCrEQVcdJrw82', '2025-07-18 07:00:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:00:39', '2025-07-17 07:00:39'),
('6R2Efz9A9Pssxs3Lh3iW9RRE5bStFNDk', '2025-07-19 02:48:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:48:04', '2025-07-18 02:48:04'),
('6zR-cKuJMsumQ6BazDSpjRg4xFJp8hox', '2025-07-19 02:47:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:47:44', '2025-07-18 02:47:44'),
('76vknpv-N-rTSNz8hReuaLjFNi3X0aLb', '2025-07-18 08:06:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:06:18', '2025-07-17 08:06:18'),
('7iGXnLRNoHl83nozri8zn8rOCk-bM6yn', '2025-07-18 08:12:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:12:15', '2025-07-17 08:12:15'),
('8Ibz0r2lpJkmWmAuauF-q3xDOZ_aYL7I', '2025-07-18 05:25:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:25:40', '2025-07-17 05:25:40'),
('8M03wtDh3SkBTFSmeSVAM75dwmHbBjJb', '2025-07-18 05:25:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:25:57', '2025-07-17 05:25:57'),
('8UaWuV5wdcCVPburo2OSPYQnRXoilbdC', '2025-07-19 02:08:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:08:22', '2025-07-18 02:08:22'),
('90gXAQ--ZiXbzAyMBFk0TPXq0tChnp7P', '2025-07-18 03:45:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 03:45:03', '2025-07-17 03:45:03'),
('9FJwfRHIgvUfv9r1-pJrFDZSokRUrhZb', '2025-07-18 03:58:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 03:58:45', '2025-07-17 03:58:45'),
('A5lFcBlr5BskU8EN0c6a7GoMKRYkEN7o', '2025-07-19 01:55:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:55:49', '2025-07-18 01:55:49'),
('a7MVOMQ793hRS76GchcA49Tu8YNlhuZu', '2025-07-18 08:22:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:22:22', '2025-07-17 08:22:22'),
('B1MAfabTseHrHq4QNgbUik4qD3-8I_2L', '2025-07-18 03:45:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 03:45:13', '2025-07-17 03:45:13'),
('c6ydjDaOoPalHhjk_wwa1noJ7ELZcW26', '2025-07-19 02:39:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:29', '2025-07-18 02:39:29'),
('Canbq17b0-zT1FkFegX8BN0JElgfB_3Z', '2025-07-19 02:08:47', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:08:47', '2025-07-18 02:08:47'),
('cbVFU6TwW7fxPiQ8Aj7MaBttiRyr-25l', '2025-07-18 06:59:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:59:20', '2025-07-17 06:59:20'),
('CFr18xJJW1NaRzX9Jfa79XKXyArbBTm0', '2025-07-19 01:10:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:10:42', '2025-07-18 01:10:42'),
('cX8nlqEYfUHSps0XMKbC9novfJKnRGhj', '2025-07-19 03:14:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-18 02:40:14', '2025-07-18 03:14:52'),
('DK34EFItb-d--6Fpjgrq8oVn3jLmQtoE', '2025-07-18 07:52:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:52:25', '2025-07-17 07:52:25'),
('e_Qd-BQTdlEg0HBiz1fjFQjVjLcUkWUy', '2025-07-19 02:05:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:05:26', '2025-07-18 02:05:26'),
('ebyqs0bwGjhdtsLAjslAA6L8zeNd8UCS', '2025-07-18 07:44:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:44:59', '2025-07-17 07:44:59'),
('EGrtckgx6GRrZ9aCaj4p1se3fWqKApd0', '2025-07-18 07:30:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:30:23', '2025-07-17 07:30:23'),
('eSttncLtNL1UFWELOlYrYy2q-NJf8NbF', '2025-07-19 02:01:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:01:17', '2025-07-18 02:01:17'),
('EVwWkqQ_2l0Dpt1EMO5RRmTSKbqyRJPS', '2025-07-18 07:52:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:52:08', '2025-07-17 07:52:08'),
('EyX6WJFs1lKEXLaoSZJtajHHLxJ-6FIb', '2025-07-19 02:06:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:06:29', '2025-07-18 02:06:29'),
('EzoeSCYoXlskRwba19-0hfEDtTLiMwB1', '2025-07-18 05:27:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:27:04', '2025-07-17 05:27:04'),
('F_mvLvR8FSGLCd9D4zgWjoFtPFW47Kou', '2025-07-18 09:26:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 09:26:32', '2025-07-17 09:26:32'),
('Gfr-7RS0ahpq2S_rUNCAmEe1hxhOrzXD', '2025-07-18 07:59:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:59:15', '2025-07-17 07:59:15'),
('GgHNfY8_GWfAIqGdBHYSUIgCUFGAqfAq', '2025-07-19 02:24:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:24:18', '2025-07-18 02:24:18'),
('GKYfgeeoAzkZ-GyYUYOW4JuM16zlGtLr', '2025-07-19 03:14:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 03:14:17', '2025-07-18 03:14:17'),
('GVCBNODWG6xs6hTKFO_ghLlvxuqXU5UR', '2025-07-19 02:39:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:09', '2025-07-18 02:39:09'),
('HgHV2a2HG9NkGqFahGkTNo4OVTTZ0i9T', '2025-07-18 06:57:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:57:14', '2025-07-17 06:57:14'),
('HGuYC_hgi5jdCMj0kyrHlu2PxqsDDK2C', '2025-07-18 07:30:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:30:32', '2025-07-17 07:30:32'),
('hhEW_XuekOwBSN-6ns-AEtSRijQHtteT', '2025-07-18 05:28:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:28:35', '2025-07-17 05:28:35'),
('HJhyuSIW-eBBg73eO5FaIDNYbFDTYV2B', '2025-07-19 02:25:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:25:14', '2025-07-18 02:25:14'),
('Hs-X80PHgmLHhIHtRHGAeRDng5iWtENd', '2025-07-19 02:22:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:22:56', '2025-07-18 02:22:56'),
('Ioe4PKLGFneN9tY__ngsG5Im8OvkZFpt', '2025-07-19 02:39:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:22', '2025-07-18 02:39:22'),
('iUS7CQuEi_lCGldtzETCP9Rhxrf5L3Fa', '2025-07-19 02:39:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:56', '2025-07-18 02:39:56'),
('IZLmHNQZfRiRRSWSRuKr6S_oDs4qQrWg', '2025-07-18 06:46:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:46:44', '2025-07-17 06:46:44'),
('J7tdBANt1MZI3rxp65hEtLDlgQdKPCi_', '2025-07-18 08:24:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:24:51', '2025-07-17 08:24:51'),
('j8qqeNpBDSZl3doBoCjvGrEvyG0dBx4N', '2025-07-18 09:39:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-17 07:30:32', '2025-07-17 09:39:25'),
('JbvafQUIuOYjihCw3q6tDmKPNmQAPGqT', '2025-07-18 06:50:17', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:50:17', '2025-07-17 06:50:17'),
('jeqU9rA7i22obvbnSiPOk1fBeXudtAJ_', '2025-07-19 02:06:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:06:55', '2025-07-18 02:06:55'),
('JoE8V_aRocYJp78lWsggtUksE-kAkxyL', '2025-07-19 01:45:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:45:49', '2025-07-18 01:45:49'),
('JRjVEvnip0KMl_AbQTS5xIoVmGFZkMAF', '2025-07-18 06:57:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:57:20', '2025-07-17 06:57:20'),
('K_pYfHsqRTNQp-snUknknKg90AdI3yUw', '2025-07-18 07:30:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:30:04', '2025-07-17 07:30:04'),
('L-eme32h6cxp4ZiLlZV9vGjFqtVWdVsg', '2025-07-19 01:52:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:52:18', '2025-07-18 01:52:18'),
('L4eqcvT-w9Ymw4L_jc7BHFJCmMih_xb5', '2025-07-18 05:26:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:26:03', '2025-07-17 05:26:03'),
('l6DBR0ZNhg0dvgCSPyqpk2gLeOBtcWNt', '2025-07-19 02:25:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:25:29', '2025-07-18 02:25:29'),
('lFjwcuPShQUhz0IhoZxCfUkl5qx9YK0Y', '2025-07-19 02:16:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:16:01', '2025-07-18 02:16:01'),
('lkVKHqjXfwoTaGEna6PoenHEc6eiYV53', '2025-07-18 08:32:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:32:40', '2025-07-17 08:32:40'),
('lMyCotOtyoCANQs2LvyyrP7YsbpdoWfe', '2025-07-19 02:18:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:18:02', '2025-07-18 02:18:02'),
('lMyRzBM0CN8njAmi9UfI9cqtH4R8R72a', '2025-07-19 02:23:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:23:59', '2025-07-18 02:23:59'),
('LsdJQ81z3PxIDRI7LeWFCHcRwSQ7U1mb', '2025-07-18 07:29:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:29:57', '2025-07-17 07:29:57'),
('lVcgx_0_CGi9E3d4yuy7jeBC7QAF7TLG', '2025-07-19 01:55:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:55:50', '2025-07-18 01:55:50'),
('lxgSQGzNTjBg0YBbPHNSFLqqM4Vcqfb3', '2025-07-18 06:53:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:53:02', '2025-07-17 06:53:02'),
('LxYaNSgx2KYXxl6fYNzhPS5pQJTh681J', '2025-07-18 06:41:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:41:13', '2025-07-17 06:41:13'),
('LyMJ3eHX4zNcVq4T2VdbZAizXgv81dkR', '2025-07-19 02:08:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:08:39', '2025-07-18 02:08:39'),
('mCo2D2LZmWUIlxvO0M2Wiylx225VDw26', '2025-07-19 02:12:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:12:04', '2025-07-18 02:12:04'),
('nhiraZz851YpP4_MzYwB4H9akVjXDp_z', '2025-07-19 03:08:28', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 03:08:28', '2025-07-18 03:08:28'),
('NrJShbacU_khF8DnZIkNdo1c9gPFyHZ2', '2025-07-18 03:56:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-16 03:51:45', '2025-07-17 03:56:50'),
('nsu_21lrN6XAq5hhWnwWgox_nKi86Yc2', '2025-07-18 06:56:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:56:50', '2025-07-17 06:56:50'),
('O8wqm4yyxyNRtple5wn_CCD_Wp-AYkvt', '2025-07-19 01:19:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:19:18', '2025-07-18 01:19:18'),
('OBoO_mPtcYwjNUwHTk07hHMYX8Zk0g8F', '2025-07-19 02:22:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:22:13', '2025-07-18 02:22:13'),
('OfkyqOV2vlTQm0k84wbJKRugL5c9J0Ec', '2025-07-18 08:04:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:04:43', '2025-07-17 08:04:43'),
('Oho-buj8PAsch466GfkjLJ3H5CjsRzFV', '2025-07-18 06:39:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:39:24', '2025-07-17 06:39:24'),
('OPmXYWzebIfKl6PRB0izGkXU26yvqCRX', '2025-07-19 01:41:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:41:12', '2025-07-18 01:41:12'),
('oYrQ2w6Fq4pPOMFBIpzf9W4HGdy5aXx5', '2025-07-18 06:40:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:40:58', '2025-07-17 06:40:58'),
('pegYT_YcKqa_rIX-eKL1QWMMue3djput', '2025-07-19 02:01:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:01:10', '2025-07-18 02:01:10'),
('pp5UdaxKjCpfw0J7KG9srA60f1ElBMUc', '2025-07-18 05:25:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:25:34', '2025-07-17 05:25:34'),
('Pz54YrmVtqb84FtiXDDMtmvwjWsUxL74', '2025-07-18 08:46:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:46:19', '2025-07-17 08:46:19'),
('pZXCt318aiWxYK3s4sr7y1BmgsyMwe3l', '2025-07-18 07:04:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:04:00', '2025-07-17 07:04:00'),
('qCjvaoDoKRh_mJyUm0yxmdszW5AMvT7f', '2025-07-19 01:55:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:55:54', '2025-07-18 01:55:54'),
('qTeUdDuXbi6Qx85PvM0X6Hqfnc5xm30g', '2025-07-19 01:55:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:55:21', '2025-07-18 01:55:21'),
('R32hl7pMsGbc1fZSEXkmkpzYQMIY9ZCb', '2025-07-19 02:16:18', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:16:18', '2025-07-18 02:16:18'),
('RPGElmS-rdRe5nvxW3dON9KpL68BT5us', '2025-07-18 04:02:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 04:02:13', '2025-07-17 04:02:13'),
('rsUtKZK52G29q8PmQHgx43cYEggXcuqk', '2025-07-18 05:27:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:27:00', '2025-07-17 05:27:00'),
('Rur6Qj9Ez8i-7HbdHanHSBHyvpDvbhwN', '2025-07-19 02:19:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:19:15', '2025-07-18 02:19:15'),
('RXFkxa4lh9VWNWj5B-Iw3nF4Y0arKOSm', '2025-07-18 08:17:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:17:23', '2025-07-17 08:17:23'),
('SEHGvGV9EF2mMt80pAu-V6wbJPLDnXRh', '2025-07-19 02:08:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:08:41', '2025-07-18 02:08:41'),
('ShbZ_cqqh__s9hqC_CKadSjVqNiVnXH4', '2025-07-19 01:24:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:24:54', '2025-07-18 01:24:54'),
('SkWIygxkaUWSSWEKSXnRiufG_QDPa86N', '2025-07-19 02:22:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:22:46', '2025-07-18 02:22:46'),
('so_VQ1BIWl1lKf_sZOogD7kJ3w4LkfF1', '2025-07-18 06:53:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:53:50', '2025-07-17 06:53:50'),
('SRFMonLTYpnD9Ie-xqgvQuuQFKPrMGl3', '2025-07-19 02:48:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:48:26', '2025-07-18 02:48:26'),
('SYRf4dkH7hTU-_U9S5v2RrkwY03pQwzH', '2025-07-19 02:16:39', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:16:39', '2025-07-18 02:16:39'),
('Tdur0us2QrQlLxiN4cp1DfwE3kFZNW7L', '2025-07-19 02:05:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:05:19', '2025-07-18 02:05:19'),
('TVustQSPhA_okfELyFFU43KGqK9RUM4h', '2025-07-18 06:51:00', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:51:00', '2025-07-17 06:51:00'),
('Ui88RT36bnFYH5InDwnJ_G-byAqXYdKO', '2025-07-18 07:59:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:59:22', '2025-07-17 07:59:22'),
('uSAZ_fXLSvXU7mgmLga9Hp_uWVWOKq1z', '2025-07-19 01:10:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 01:10:13', '2025-07-18 01:10:13'),
('UU6eKPiaQuF_EcjeRRNbAGGabPuo2ydQ', '2025-07-19 02:24:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:24:37', '2025-07-18 02:24:37'),
('uzRusMXT1sXZF0r49sXHi__bzgGdKg3C', '2025-07-19 02:40:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:40:14', '2025-07-18 02:40:14'),
('Va1lylzpXwJ7dh7vUhtrcRSI3i7yENY6', '2025-07-19 02:40:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:40:02', '2025-07-18 02:40:02'),
('vbupmkBvJ6h5ujapB0RQsQHpMgzo9u3w', '2025-07-18 03:55:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-17 03:09:30', '2025-07-17 03:55:15'),
('VdrQX0EOLfj3uH2eZSnXWm-wt8dnqhaA', '2025-07-19 02:17:09', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:17:09', '2025-07-18 02:17:09'),
('VGAjCOjnSbQKTsTHO3x071hPPjbUhB-f', '2025-07-18 07:29:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:29:46', '2025-07-17 07:29:46'),
('voD9Tqig28163OK4iiAOoyUAnfEzZg2t', '2025-07-18 06:53:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:53:08', '2025-07-17 06:53:08'),
('VrBaweIGLbQAieNSoVAA5-BYGyVDTWRj', '2025-07-18 03:45:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 03:45:31', '2025-07-17 03:45:31'),
('w1yr1NLUMcLNQofjs56C4SfUzuLe1kR1', '2025-07-18 05:29:57', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:29:57', '2025-07-17 05:29:57'),
('W5ZBtvTx17pP8mmlBvrvOd3MPWfPavhp', '2025-07-18 06:51:50', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:51:50', '2025-07-17 06:51:50'),
('WlxGdMq9Eywzt-QrmJ_NtiTOCgWOODU6', '2025-07-18 07:30:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:30:43', '2025-07-17 07:30:43'),
('WqSuGnzgvyHT1VQn5WPvAEqs9YKofszB', '2025-07-19 02:17:34', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:17:34', '2025-07-18 02:17:34'),
('wzP0_Eb3qZxdZZhi1CTrqGIdz2l2TaW_', '2025-07-19 02:39:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:39:37', '2025-07-18 02:39:37'),
('X79LbiohB9otvK3htpuSut-9xJRFh66I', '2025-07-18 06:54:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:54:41', '2025-07-17 06:54:41'),
('XcncIxSUa-TF0OZLBrIu8sRcrfispZ4u', '2025-07-18 07:00:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:00:33', '2025-07-17 07:00:33'),
('XsPXvsFvhdvgcqf7lJaZpC9iIF4jg-PX', '2025-07-19 02:25:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:25:58', '2025-07-18 02:25:58'),
('y6seV0Sd1EXuFXDtCiFkE_0BNS7S5LPt', '2025-07-19 02:40:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:40:07', '2025-07-18 02:40:07'),
('y8-Mctf0VjZzTA5eTroGUIuZKQZXDQ4e', '2025-07-18 08:24:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 08:24:25', '2025-07-17 08:24:25'),
('YA42oIrPun7WHB-CtQdJYwePBewrQFNW', '2025-07-18 07:49:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 07:49:15', '2025-07-17 07:49:15'),
('YDFJFUR7CUDeavmtCCrvEmngFj0u4RgS', '2025-07-19 02:09:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:09:58', '2025-07-18 02:09:58'),
('YJwdbVnYLtzaCeqFIUkxf0nBw7ikNc1E', '2025-07-18 06:50:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:50:29', '2025-07-17 06:50:29'),
('YwlbjSpWfFAyF3bAzzAJv9kYP7Nj2u8e', '2025-07-18 03:59:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 03:59:49', '2025-07-17 03:59:49'),
('yy6zqvZN1Y2TCYbIIg5xgfggibzGyX5x', '2025-07-19 03:14:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 03:14:30', '2025-07-18 03:14:30'),
('zNyjL8S2Ym5ej74OTloL1GuDlTQMz5eK', '2025-07-18 05:27:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 05:27:46', '2025-07-17 05:27:46'),
('ZR-F--G1OqEGaddj1Ny7WG-cvnPLHA3o', '2025-07-19 02:48:31', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-18 02:48:31', '2025-07-18 02:48:31'),
('zwn44j41cBSHIJcitmY0Hk1JF-gI91rj', '2025-07-18 06:50:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2025-07-17 06:50:53', '2025-07-17 06:50:53');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
CREATE TABLE IF NOT EXISTS `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `name_3` (`name`),
  UNIQUE KEY `name_4` (`name`),
  UNIQUE KEY `name_5` (`name`),
  UNIQUE KEY `name_6` (`name`),
  UNIQUE KEY `name_7` (`name`),
  UNIQUE KEY `name_8` (`name`),
  UNIQUE KEY `name_9` (`name`),
  UNIQUE KEY `name_10` (`name`),
  UNIQUE KEY `name_11` (`name`),
  UNIQUE KEY `name_12` (`name`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, 'Sabbath', NULL, NULL, '2025-07-10 11:11:54', '2025-07-10 11:11:54'),
(2, 'PRX', NULL, NULL, '2025-07-10 03:51:17', '2025-07-10 03:51:17'),
(3, 'FNC', NULL, NULL, '2025-07-14 06:57:27', '2025-07-14 06:57:27'),
(4, 'RRQ', NULL, NULL, '2025-07-14 06:58:23', '2025-07-14 06:58:23'),
(5, 'ORCA', NULL, NULL, '2025-07-14 07:00:55', '2025-07-14 07:27:27'),
(6, 'T1', NULL, NULL, '2025-07-16 01:19:10', '2025-07-16 01:19:10'),
(21, '-', NULL, NULL, '2025-07-17 06:41:13', '2025-07-17 06:41:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `team` varchar(255) NOT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `name_2` (`name`),
  UNIQUE KEY `email_2` (`email`),
  UNIQUE KEY `name_3` (`name`),
  UNIQUE KEY `email_3` (`email`),
  UNIQUE KEY `name_4` (`name`),
  UNIQUE KEY `email_4` (`email`),
  UNIQUE KEY `name_5` (`name`),
  UNIQUE KEY `email_5` (`email`),
  UNIQUE KEY `name_6` (`name`),
  UNIQUE KEY `email_6` (`email`),
  UNIQUE KEY `name_7` (`name`),
  UNIQUE KEY `email_7` (`email`),
  UNIQUE KEY `name_8` (`name`),
  UNIQUE KEY `email_8` (`email`),
  UNIQUE KEY `name_9` (`name`),
  UNIQUE KEY `email_9` (`email`),
  UNIQUE KEY `name_10` (`name`),
  UNIQUE KEY `email_10` (`email`),
  UNIQUE KEY `name_11` (`name`),
  UNIQUE KEY `email_11` (`email`),
  UNIQUE KEY `name_12` (`name`),
  UNIQUE KEY `email_12` (`email`),
  KEY `role` (`role`),
  KEY `team` (`team`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `team`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, 'c2ffb175-915b-4e6d-9603-fe7517dd0c6b', 'wargi', 'wargi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Y89r6TnfQN6XzbwFAdehmQ$M8hgQxrcr0DCujmCySj8/5TaXwg3FtSN8cm/LN1rrEo', 'Admin', 'FNC', NULL, NULL, '2025-07-15 02:11:28', '2025-07-16 02:14:06'),
(2, 'acb87a6e-5d3b-11f0-bb5a-088fc389ea81', 'Superadmin', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$ueH5RZk3U1y4bXxXdxOdXg$XwAlEG9RaJMBMB91HpA0V6zKb8GJfhnF6kjDCBl0NOA', 'Admin', 'Sabbath', NULL, NULL, '2025-07-10 11:12:13', '2025-07-10 11:12:13'),
(3, '58208293-e239-48c0-8c1a-57386f219204', 'Yasinta', 'sinta@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$jfjswDoD2feajiAWg0bFEA$oajW+xktgmoo0ob5Xll8ehD1SJqY0n9yqDj3nqvxTgM', 'Admin', 'Sabbath', NULL, NULL, '2025-07-10 03:24:31', '2025-07-18 03:14:30'),
(4, '17fcd794-06a1-4ce1-a9d0-162f3336b61d', 'Luvi Aprilyansyah Gabriel', 'luvi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Qq1vopPNawxlWA3iODdeEQ$SYvtk7miJHcgQeVDKt+JIJYPOD5kXDypLthMAuG5Rrk', 'Admin', 'Sabbath', NULL, NULL, '2025-07-11 02:00:30', '2025-07-15 09:24:36'),
(5, '4744e3ea-ae15-4f70-9c18-d43102e17153', 'Kuromiko', 'kuro@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$10bTr3ZovReTxmFBX50xHA$OKkgot/u+uDdtSNa0yxPzVo4mR8lhE5nXN3pqmDcSkw', 'Anomali', 'PRX', NULL, NULL, '2025-07-14 09:10:28', '2025-07-14 09:10:28'),
(6, 'aa99860b-e779-4d63-a68c-daeb0a246a0f', 'Pak Slapur', 'slapur@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$z+fHrn8O25YyUN/+SFfDLw$Zt9TXySBSL0pq2URSk9USveg2mHsaIzuDvv6r6Ppgt8', 'user', 'PRX', NULL, NULL, '2025-07-15 02:10:00', '2025-07-15 02:10:00'),
(7, 'bb7716e5-292a-4cdc-ad65-324d34fe8eb6', 'wodetok', 'toktok@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$a7X5fSqsC/D9gPFgk5OTFg$bBZ/GVqmi3UmuO3fSoSCF5y1FFA6IOEBVwTzfPDXfyQ', 'User', 'FNC', NULL, NULL, '2025-07-15 02:12:11', '2025-07-15 02:12:11'),
(8, '0f801d3b-105c-4e3c-89e3-96c5c6719204', 'anonim', 'anonim@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$0i3L8H1nZW93SCau2OidQQ$Yce8Ppz+4V4j01zmALw5rZZJovprkUMvAHKUcISIWXU', 'Admin', 'FNC', NULL, NULL, '2025-07-16 03:14:37', '2025-07-16 03:14:37'),
(19, '8cc10d4e-de23-4c3b-ba4a-2213a8f5ac59', 'Anomali', 'anomali@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$sJ1TAAWVoql7tYrEv73WKg$9qcxpGtyiRE9xHmMBkCZAPPpPy+f0WRSsFZPSXpISH4', 'User', '-', NULL, NULL, '2025-07-17 07:00:33', '2025-07-17 07:00:33'),
(20, '20a0da83-425b-462d-a1f3-56b7915b007f', 'akun percobaan', 'test@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$+13RG6Pwv3CcmNxM/O4RuQ$yvn05gt/hrfpt0OMz+1riLBEIYjUXLTr4yf5Y7vv3B0', 'User', '-', NULL, NULL, '2025-07-17 07:30:04', '2025-07-17 07:30:04');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `challengeentry`
--
ALTER TABLE `challengeentry`
  ADD CONSTRAINT `challengeentry_ibfk_10` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `challengeentry_ibfk_7` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `challengeentry_ibfk_8` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`),
  ADD CONSTRAINT `challengeentry_ibfk_9` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `challenges`
--
ALTER TABLE `challenges`
  ADD CONSTRAINT `challenges_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `challenges_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `logdays`
--
ALTER TABLE `logdays`
  ADD CONSTRAINT `logdays_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `logdays_ibfk_2` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `logdays_ibfk_3` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `roles_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `teams`
--
ALTER TABLE `teams`
  ADD CONSTRAINT `teams_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `teams_ibfk_2` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_41` FOREIGN KEY (`role`) REFERENCES `roles` (`name`),
  ADD CONSTRAINT `users_ibfk_42` FOREIGN KEY (`team`) REFERENCES `teams` (`name`),
  ADD CONSTRAINT `users_ibfk_43` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_ibfk_44` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
