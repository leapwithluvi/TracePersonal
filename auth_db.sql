-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 30, 2025 at 08:19 AM
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
  `completion_rate` int DEFAULT NULL,
  `finished_at` datetime DEFAULT NULL,
  `created_by` int DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `daily_progess` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `user_id` (`user_id`),
  KEY `challenge_id` (`challenge_id`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
  UNIQUE KEY `title_13` (`title`),
  UNIQUE KEY `title_14` (`title`),
  UNIQUE KEY `title_15` (`title`),
  UNIQUE KEY `title_16` (`title`),
  UNIQUE KEY `title_17` (`title`),
  UNIQUE KEY `title_18` (`title`),
  UNIQUE KEY `title_19` (`title`),
  UNIQUE KEY `title_20` (`title`),
  UNIQUE KEY `title_21` (`title`),
  UNIQUE KEY `title_22` (`title`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `challenges`
--

INSERT INTO `challenges` (`id`, `title`, `description`, `start_date`, `end_date`, `type`, `target`, `visibility`, `created_by`, `updated_by`, `createdAt`, `updatedAt`, `thumbnail`) VALUES
(1, 'Tutorial Bahasa Ular Piton plssttt.....s', '<h2>Tutorial bahasa python biar bisa bahasa ular piton dan berkomunikasi dengan bangsa ular lainnya, sttt... plsesttttt... (ini di update lewat frontend) yoi</h2><p><br></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor minus officia r', '2025-07-21 00:00:00', '2025-07-30 00:00:00', 'daily', 'Bisa membuat kalkulator CLI sederhana (rill)', 'public', NULL, NULL, '2025-07-10 06:19:03', '2025-07-30 08:02:57', '1753862577224.jpg'),
(2, 'Tutorial Bahasa JawaScript', '<p>bahasa sejuta umat</p>', '2025-07-21 00:00:00', '2025-07-31 00:00:00', 'Weekly', 'Bisa membuat DOM', 'public', NULL, NULL, '2025-07-10 06:34:06', '2025-07-30 08:11:59', '1753863119743.jpeg'),
(13, 'Ini Sekedar test yah guys yahhh', '<p>Hello ini lorem25</p><p>kali ini ini ini ini ini</p><p>kalau timpa teks jangan berlebihan..</p><p><br></p><p>hello pengguna fb, selamat datang di meta tempat berdiskusi, cari teman, cara jodoh dan cari pekerjaan (edit)</p>', '2025-07-30 00:00:00', '2025-08-14 00:00:00', 'weekly', 'Jadi Pemalas', 'public', NULL, NULL, '2025-07-30 01:39:39', '2025-07-30 08:12:15', '1753863135609.jpg'),
(14, 'sasxas', '<p>sxasxas</p>', '2025-07-30 00:00:00', '2025-07-30 00:00:00', 'daily', 's', 'public', NULL, NULL, '2025-07-30 06:51:28', '2025-07-30 08:11:33', '1753863093804.jpg'),
(16, 'dscadsvd', '<p>vasdvadsv1</p>', '0004-12-31 00:00:00', '0000-00-00 00:00:00', 'monthly', 'qceqwfqcef', 'public', NULL, NULL, '2025-07-30 07:44:45', '2025-07-30 07:44:45', '1753861485790.png'),
(17, 'TEST gambar (thumbnail)', '<p>test thumbnail </p>', '2025-07-30 00:00:00', '2025-07-30 00:00:00', 'daily', 'thumbnail test', 'public', NULL, NULL, '2025-07-30 07:47:47', '2025-07-30 07:47:47', '1753861667049.jpeg');

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `logdays`
--

INSERT INTO `logdays` (`id`, `user_id`, `date`, `water_intake`, `sleep_duration`, `workout_completed`, `mood`, `notes`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, NULL, '2025-07-21 00:00:00', 3, 8, 1, 5, 'Hari ini sepertinya gacor (edit)', NULL, NULL, '2025-07-10 08:25:17', '2025-07-29 05:49:56'),
(8, 3, '2025-07-29 00:00:00', 3, 4, 1, 4, 'Mau tidur (ngantuk berat mau bobok)', NULL, NULL, '2025-07-29 02:06:28', '2025-07-29 06:20:01'),
(9, 3, '2025-07-29 00:00:00', 2, 5, 0, 3, 'Mau bobok', NULL, NULL, '2025-07-29 06:06:46', '2025-07-29 06:06:46'),
(10, 3, '2025-07-29 00:00:00', 4, 7, 1, 5, 'Main Game', NULL, NULL, '2025-07-29 06:11:08', '2025-07-29 06:11:08'),
(11, 3, '2025-07-29 00:00:00', 5, 6, 1, 4, 'Belajar', NULL, NULL, '2025-07-29 06:11:21', '2025-07-29 06:11:21'),
(12, 3, '2025-07-29 00:00:00', 5, 8, 1, 5, 'Hidup sehat', NULL, NULL, '2025-07-29 06:11:47', '2025-07-29 06:11:47'),
(13, 3, '2025-07-29 00:00:00', 3, 6, 0, 4, 'Streamer di donate paus', NULL, NULL, '2025-07-29 06:12:13', '2025-07-29 06:12:13'),
(14, 3, '2025-07-29 00:00:00', 5, 5, 0, 5, 'Nonton bang windah basudara', NULL, NULL, '2025-07-29 06:12:34', '2025-07-29 06:12:34'),
(15, 3, '2025-07-29 00:00:00', 4, 7, 0, 5, 'Ketemu keluarga', NULL, NULL, '2025-07-29 06:12:55', '2025-07-29 06:12:55'),
(16, 3, '2025-07-29 00:00:00', 3, 5, 1, 5, 'Bersekolah lagi', NULL, NULL, '2025-07-29 06:13:27', '2025-07-29 06:13:27'),
(17, 3, '2025-07-29 00:00:00', 3, 5, 0, 4, 'Main valorant', NULL, NULL, '2025-07-29 06:13:46', '2025-07-29 06:13:46');

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
  UNIQUE KEY `name_13` (`name`),
  UNIQUE KEY `name_14` (`name`),
  UNIQUE KEY `name_15` (`name`),
  UNIQUE KEY `name_16` (`name`),
  UNIQUE KEY `name_17` (`name`),
  UNIQUE KEY `name_18` (`name`),
  UNIQUE KEY `name_19` (`name`),
  UNIQUE KEY `name_20` (`name`),
  UNIQUE KEY `name_21` (`name`),
  UNIQUE KEY `name_22` (`name`),
  UNIQUE KEY `name_23` (`name`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, 'Admin', NULL, NULL, '2025-07-10 11:11:22', '2025-07-10 11:11:22'),
(2, 'User', NULL, NULL, '2025-07-10 04:00:27', '2025-07-10 04:00:27'),
(3, 'Anomali', NULL, NULL, '2025-07-14 09:06:00', '2025-07-14 09:06:00'),
(13, 'Jawir', NULL, NULL, '2025-07-29 07:40:56', '2025-07-29 07:56:16'),
(14, 'Manager', NULL, NULL, '2025-07-29 07:53:29', '2025-07-29 07:56:22'),
(15, 'Anonim', NULL, NULL, '2025-07-29 07:53:32', '2025-07-29 07:56:32'),
(16, 'Hacker', NULL, NULL, '2025-07-29 07:53:34', '2025-07-29 07:56:37'),
(17, 'Cleaning', NULL, NULL, '2025-07-29 07:53:36', '2025-07-29 07:56:46'),
(18, 'Security', NULL, NULL, '2025-07-29 07:53:39', '2025-07-29 07:56:52'),
(19, 'Robots', NULL, NULL, '2025-07-29 07:53:41', '2025-07-29 07:56:59'),
(20, 'Developer', NULL, NULL, '2025-07-29 07:53:43', '2025-07-29 07:57:09');

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
('CRKfkGYYzREySlLLnp1p5mUtrbbPoYoc', '2025-07-30 09:17:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-29 01:07:35', '2025-07-29 09:17:15'),
('LPKg1Y3f-revILSIxHvHm8aWlGTO7O57', '2025-07-31 03:55:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-30 03:49:45', '2025-07-30 03:55:52'),
('Z7VpdAKynJrhsXaFqUOw5TehoCe7bV42', '2025-07-31 08:16:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"58208293-e239-48c0-8c1a-57386f219204\"}', '2025-07-30 01:32:52', '2025-07-30 08:16:03');

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
  UNIQUE KEY `name_13` (`name`),
  UNIQUE KEY `name_14` (`name`),
  UNIQUE KEY `name_15` (`name`),
  UNIQUE KEY `name_16` (`name`),
  UNIQUE KEY `name_17` (`name`),
  UNIQUE KEY `name_18` (`name`),
  UNIQUE KEY `name_19` (`name`),
  UNIQUE KEY `name_20` (`name`),
  UNIQUE KEY `name_21` (`name`),
  UNIQUE KEY `name_22` (`name`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `name`, `created_by`, `updated_by`, `createdAt`, `updatedAt`) VALUES
(1, 'Sabbath', 3, NULL, '2025-07-10 11:11:54', '2025-07-10 11:11:54'),
(2, 'PRX', NULL, NULL, '2025-07-10 03:51:17', '2025-07-10 03:51:17'),
(3, 'FNC', NULL, NULL, '2025-07-14 06:57:27', '2025-07-14 06:57:27'),
(4, 'RRQ', NULL, NULL, '2025-07-14 06:58:23', '2025-07-14 06:58:23'),
(5, 'ORCA', NULL, NULL, '2025-07-14 07:00:55', '2025-07-14 07:27:27'),
(6, 'T1', NULL, NULL, '2025-07-16 01:19:10', '2025-07-16 01:19:10'),
(21, '-', NULL, NULL, '2025-07-17 06:41:13', '2025-07-17 06:41:13'),
(22, 'TH', NULL, NULL, '2025-07-29 08:20:50', '2025-07-29 08:20:50'),
(23, 'ONIC', NULL, NULL, '2025-07-29 08:20:56', '2025-07-29 08:20:56'),
(24, 'EVOS', NULL, NULL, '2025-07-29 08:21:01', '2025-07-29 08:21:01'),
(26, 'BTR', NULL, NULL, '2025-07-29 08:27:58', '2025-07-29 08:27:58');

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
  `avatar` varchar(255) DEFAULT NULL,
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
  UNIQUE KEY `name_13` (`name`),
  UNIQUE KEY `email_13` (`email`),
  UNIQUE KEY `name_14` (`name`),
  UNIQUE KEY `email_14` (`email`),
  UNIQUE KEY `name_15` (`name`),
  UNIQUE KEY `email_15` (`email`),
  UNIQUE KEY `name_16` (`name`),
  UNIQUE KEY `email_16` (`email`),
  UNIQUE KEY `name_17` (`name`),
  UNIQUE KEY `email_17` (`email`),
  UNIQUE KEY `name_18` (`name`),
  UNIQUE KEY `email_18` (`email`),
  UNIQUE KEY `name_19` (`name`),
  UNIQUE KEY `email_19` (`email`),
  UNIQUE KEY `name_20` (`name`),
  UNIQUE KEY `email_20` (`email`),
  UNIQUE KEY `name_21` (`name`),
  UNIQUE KEY `email_21` (`email`),
  UNIQUE KEY `name_22` (`name`),
  UNIQUE KEY `email_22` (`email`),
  UNIQUE KEY `name_23` (`name`),
  UNIQUE KEY `email_23` (`email`),
  KEY `role` (`role`),
  KEY `team` (`team`),
  KEY `created_by` (`created_by`),
  KEY `updated_by` (`updated_by`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `name`, `email`, `password`, `role`, `team`, `created_by`, `updated_by`, `createdAt`, `updatedAt`, `avatar`) VALUES
(1, 'c2ffb175-915b-4e6d-9603-fe7517dd0c6b', 'wargi', 'wargi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$Y89r6TnfQN6XzbwFAdehmQ$M8hgQxrcr0DCujmCySj8/5TaXwg3FtSN8cm/LN1rrEo', 'Admin', 'FNC', NULL, NULL, '2025-07-15 02:11:28', '2025-07-21 08:32:47', ''),
(2, 'acb87a6e-5d3b-11f0-bb5a-088fc389ea81', 'Superadmin', 'admin@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$ueH5RZk3U1y4bXxXdxOdXg$XwAlEG9RaJMBMB91HpA0V6zKb8GJfhnF6kjDCBl0NOA', 'Admin', 'Sabbath', NULL, NULL, '2025-07-10 11:12:13', '2025-07-10 11:12:13', ''),
(3, '58208293-e239-48c0-8c1a-57386f219204', 'Yasinta', 'sinta@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$aewo/d0oRXQBbdsRUTdP+w$HhNEsliuBGx39uwzRmvyOeUIbUbjpQheD6nE6/2LKbQ', 'Admin', 'Sabbath', NULL, NULL, '2025-07-10 03:24:31', '2025-07-30 06:12:56', ''),
(4, '17fcd794-06a1-4ce1-a9d0-162f3336b61d', 'Luvi Aprilyansyah Gabriel', 'luvi@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$CnhXH4pZADcar7CrmFB1QA$iXLTR9poOn+k6DIz5l386z+8/WT7Lc1nb8iWtEGULp8', 'User', 'Sabbath', NULL, NULL, '2025-07-11 02:00:30', '2025-07-21 05:23:58', ''),
(5, '4744e3ea-ae15-4f70-9c18-d43102e17153', 'Kuromiko', 'kuro@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$10bTr3ZovReTxmFBX50xHA$OKkgot/u+uDdtSNa0yxPzVo4mR8lhE5nXN3pqmDcSkw', 'Anomali', 'PRX', NULL, NULL, '2025-07-14 09:10:28', '2025-07-14 09:10:28', ''),
(6, 'aa99860b-e779-4d63-a68c-daeb0a246a0f', 'Pak Slapur', 'slapur@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$z+fHrn8O25YyUN/+SFfDLw$Zt9TXySBSL0pq2URSk9USveg2mHsaIzuDvv6r6Ppgt8', 'User', 'PRX', NULL, NULL, '2025-07-15 02:10:00', '2025-07-21 07:30:20', ''),
(8, '0f801d3b-105c-4e3c-89e3-96c5c6719204', 'anonim', 'anonim@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$0i3L8H1nZW93SCau2OidQQ$Yce8Ppz+4V4j01zmALw5rZZJovprkUMvAHKUcISIWXU', 'Admin', 'FNC', NULL, NULL, '2025-07-16 03:14:37', '2025-07-16 03:14:37', ''),
(21, '4f829b33-d5e6-49eb-b81c-1468059c8b6a', 'quantum leap', 'quantum@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$5nJBw2jOdGab+rylqqnRPQ$X8NqJ07X8Ds+QUydw2FxPz3/tgQ+Gfe63ESm4c2e7QM', 'Admin', 'Sabbath', NULL, NULL, '2025-07-18 07:37:08', '2025-07-18 08:39:55', ''),
(23, 'd0fbed3d-c17b-432d-bc59-dab77327e653', 'Juki', 'juki@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$1hr5zIaflsgVSLMV9r31rg$SN8cu+ys8i5hnmzZHJNjkqcaycyOiDnRYZCXzOt+1n4', 'User', '-', NULL, NULL, '2025-07-30 08:14:35', '2025-07-30 08:14:35', NULL),
(24, '359342e5-c67b-4f89-859a-fe26708c278e', 'Nanda', 'nanda@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$RdlqFlW3Yg6hl5HPYhgBOQ$5jZSn5WC1DV9HpccVIN2tflZZ7IXiTYrj0pKCtbJ7wc', 'User', 'T1', NULL, NULL, '2025-07-30 08:14:55', '2025-07-30 08:14:55', NULL),
(25, 'c5a2872a-1dfd-43c0-b5e6-e870df69c7e1', 'Kakek Zeus', 'gacor@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$nxh0lVqZ8suDOdvZ7ufE/g$4JQHQhsoKY5TcI9oboe811wSLwVf25DENdCdC5SzUNY', 'Admin', 'EVOS', NULL, NULL, '2025-07-30 08:15:21', '2025-07-30 08:15:21', NULL);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `challengeentry`
--
ALTER TABLE `challengeentry`
  ADD CONSTRAINT `challengeentry_ibfk_27` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `challengeentry_ibfk_28` FOREIGN KEY (`challenge_id`) REFERENCES `challenges` (`id`),
  ADD CONSTRAINT `challengeentry_ibfk_29` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `challengeentry_ibfk_30` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

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
  ADD CONSTRAINT `users_ibfk_84` FOREIGN KEY (`role`) REFERENCES `roles` (`name`),
  ADD CONSTRAINT `users_ibfk_85` FOREIGN KEY (`team`) REFERENCES `teams` (`name`),
  ADD CONSTRAINT `users_ibfk_86` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_ibfk_87` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
