-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Nov 16, 2023 at 05:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fjallraven_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Fjallraven', 'fjallraven', 'fjallraven.jpg', 'das', 'dasd', '2023-09-28 04:39:32', '2023-10-03 21:08:56', 1, 1, 1),
(13, 'sarfsdafdsa', 'sarfsdafdsa', 'sarfsdafdsa.jpeg', 'fadsfdas', 'fadsfdasf', '2023-10-02 10:24:08', '2023-10-02 10:24:08', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_cart`
--

CREATE TABLE `db_cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_cart`
--

INSERT INTO `db_cart` (`id`, `user_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(6, 3, 20, 1, '2023-10-28 10:01:12', '2023-10-28 10:01:12'),
(7, 3, 16, 2, '2023-11-14 05:12:21', '2023-11-14 05:12:30');

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `image`, `slug`, `parent_id`, `metakey`, `metadesc`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'Kånken', 'kanken.jpg', 'kanken', 0, 'ok', 'ok', '2023-09-22 00:44:24', '2023-10-08 22:38:56', 1, 1, 1),
(12, 'Backpacks & bags', 'backpacks-bags.png', 'backpacks-bags', 0, 'laptop-bags', 'laptop-bags', '2023-10-05 03:40:32', '2023-10-08 22:39:04', 1, 1, 1),
(13, 'Accessories', 'accessories.jpg', 'accessories', 0, 'accessories', 'accessories', '2023-10-08 22:42:00', '2023-10-09 06:27:15', 1, 1, 1),
(14, 'Tent & sleeping bags', 'tent-sleeping-bags.webp', 'tent-sleeping-bags', 0, 'tent', 'tent', '2023-10-08 22:43:05', '2023-10-08 22:43:05', 1, NULL, 1),
(15, 'Kånken bags', NULL, 'kanken-bags', 1, 'kanken-bags', 'kanken-bags', '2023-10-09 06:13:17', '2023-10-09 06:13:17', 1, NULL, 1),
(16, 'Daypacks', NULL, 'daypacks', 12, 'iukyukyuuk', 'hmhuimmuhhku', '2023-10-21 00:42:43', '2023-10-21 00:42:43', 1, NULL, 1),
(17, 'Tents', NULL, 'tents', 14, 'test', 'test', '2023-11-16 07:00:31', '2023-11-16 07:00:31', 1, 1, 1),
(18, 'Travel accessories', '', 'travel-accessories', 13, 'teast', 'testse', '2023-11-16 07:05:28', '2023-11-16 07:05:28', 1, 1, 1),
(19, 'Tent accessories', NULL, 'tent-accessories', 14, 'terst', 'testes', '2023-11-16 00:07:34', '2023-11-16 00:07:34', 4, NULL, 1),
(20, 'Sleeping bags', NULL, 'sleeping-bags', 14, '1231231', '12312312', '2023-11-16 00:08:21', '2023-11-16 00:08:21', 4, NULL, 1),
(21, 'Hunting accessories', NULL, 'hunting-accessories', 13, '1234124', '214124', '2023-11-16 00:10:41', '2023-11-16 00:10:41', 4, NULL, 1),
(22, 'Laptop bags', NULL, 'laptop-bags', 12, '12312', '12321', '2023-11-16 00:12:27', '2023-11-16 00:12:27', 4, NULL, 1),
(23, 'Trekking backpacks', NULL, 'trekking-backpacks', 12, 'fsdaf', 'adsfadsf', '2023-11-16 00:13:03', '2023-11-16 00:13:03', 4, NULL, 1),
(24, 'Hunting backpacks', NULL, 'hunting-backpacks', 12, 'asdas', 'adssdads', '2023-11-16 00:13:19', '2023-11-16 00:13:19', 4, NULL, 1),
(25, 'Kanken accessories', NULL, 'kanken-accessories', 1, 'asdfasd', 'dasdasd', '2023-11-16 00:13:41', '2023-11-16 00:13:41', 4, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `author` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(1000) NOT NULL,
  `zalo` varchar(1000) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `metadesc` varchar(1000) NOT NULL,
  `metakey` varchar(1000) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 2,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` mediumtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_contact`
--

INSERT INTO `db_contact` (`id`, `name`, `email`, `phone`, `title`, `content`, `created_at`, `updated_at`, `status`) VALUES
(1, 'test', 'tao@gmail.com', '09432432', 'Phan hoi', 'Phan hoi', '2023-10-03 04:46:30', '2023-10-02 22:26:26', 1),
(2, 'test', 'test@gmail.com', '123123', '12313', '12312', '2023-11-15 23:12:57', '2023-11-15 23:12:57', 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `path` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `path`, `parent_id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(5, 'Kånken', '#', 0, '2023-10-04 10:09:28', '2023-10-04 10:09:28', 1, NULL, 1),
(6, 'Kånken bags', '/category/kanken/kanken-bags/1', 5, '2023-10-04 10:11:38', '2023-10-19 00:44:33', 1, 1, 1),
(7, 'Kånken accessories', '/category/kanken-accessories/1', 5, '2023-10-04 10:12:26', '2023-10-09 06:56:03', 1, 1, 1),
(8, 'Backpacks & bags', '#', 0, '2023-10-04 10:44:17', '2023-10-04 10:44:17', 1, NULL, 1),
(9, 'Daypacks', '/category/backpacks-bags/daypacks/1', 8, '2023-10-04 10:48:34', '2023-10-25 04:45:20', 1, 1, 1),
(10, 'Laptop bags', '/category/laptop-bags/1', 8, '2023-10-04 10:52:20', '2023-10-04 10:52:20', 1, NULL, 1),
(11, 'Shoulder bags', '/category/shoulder-bags/1', 8, '2023-10-04 10:53:37', '2023-10-04 10:53:37', 1, NULL, 1),
(12, 'Trekking backpacks', '/category/backpacks-bags/trekking-backpacks/1', 8, '2023-10-04 10:59:31', '2023-11-16 01:22:03', 1, 4, 1),
(13, 'Hunting backpacks', '/category/backpacks-bags/hunting-backpacks/1', 8, '2023-10-04 11:01:43', '2023-11-16 01:22:48', 1, 4, 1),
(14, 'Mountaineering backpacks', '/category/mountaineering-backpacks', 8, '2023-10-04 11:02:14', '2023-10-04 11:02:14', 1, NULL, 1),
(15, 'Travel bags', '/category/travel-bags/1', 8, '2023-10-04 11:02:34', '2023-10-04 11:02:34', 1, NULL, 1),
(16, 'Hip packs', '/category/hip-packs/1', 8, '2023-10-04 11:07:43', '2023-10-04 11:07:43', 1, NULL, 1),
(17, 'Shop now', '/category', 0, '2023-10-09 06:40:39', '2023-10-09 06:40:39', 1, NULL, 1),
(18, 'News', '/news/all/1', 0, '2023-10-09 06:41:07', '2023-10-19 01:01:35', 1, 1, 1),
(19, 'Contact us', '/contact-us', 0, '2023-10-10 22:27:44', '2023-10-10 22:27:44', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 0, 'hiep', '34314', 'tao@gmail.com', '413431', '234234', '2023-09-21 14:29:46', '2023-09-21 14:29:46', NULL, 2),
(10, 1, 'hiep', '0123456', 'deptrai@gmail.com', 'cmm', '423', '2023-09-22 02:11:59', '2023-10-25 00:02:13', NULL, 1),
(17, 3, 'Lê Anh Minh Khải', '0966633134', 'test@gmail.com', 'Quy Nhon City, Vietnam', NULL, '2023-11-15 10:59:06', '2023-11-15 10:59:06', NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double(8,2) NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `price`, `qty`) VALUES
(1, 10, 16, 5000.00, 10),
(2, 10, 19, 3213.00, 7),
(3, 1, 20, 3213.00, 14),
(6, 17, 20, 115.00, 1),
(7, 17, 16, 80.00, 2);

-- --------------------------------------------------------

--
-- Table structure for table `db_page`
--

CREATE TABLE `db_page` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `content` varchar(10000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_page`
--

INSERT INTO `db_page` (`id`, `title`, `content`, `slug`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(3, 'Shipping', '<h5 class=\"card-title\">DELIVERY INFORMATION UK</h5><p>Orders placed on this website are despatched from our warehouse in the Netherlands. We are offering a reliable and fast delivery service with DPD. Once your order has left our warehouse you will receive an email &amp; SMS with your tracking details.</p><div class=\"row mt-5\"><div class=\"col-md-4\"><h5 class=\"card-title\">DELIVERY COST &amp; LEADTIME:</h5><p>We only ship to UK Mainland Note that we do not deliver to PO boxes or Army bases.</p><table style=\"height: 49px; width: 40px;\"><tbody><tr><td>Courier</td><td>Cost</td><td>Delivery Time</td></tr><tr><td>DPD</td><td>5.90 GBP</td><td>3-8 Working Days *</td></tr></tbody></table><p>DPD will make 1 attempt to deliver your parcel at your delivery address. If a parcel cannot be delivered at the first attempt, it will then be sent to a Pickup parcelshop.</p></div> <div class=\"col-md-4\"><h5 class=\"card-title\">FULLY TRACKED ONE-HOUR DELIVERY WINDOW</h5><p>All deliveries are made by DPD couriers; your delivery will be fully tracked with updates by email and SMS (if you provide a mobile number) throughout the process. On the morning of your delivery, DPD will contact you with a one hour delivery window and the name of your driver. You will also be given the following options, available both online and via SMS:</p><ul style=\"list-style: inherit; padding-left: 20px;\"><li>Select an alternative delivery date</li><li>Have your parcel left in a specified safe place</li><li>Collect from your local DPD PickUp Shop</li></ul></div> <div class=\"col-md-4\"><h5 class=\"card-title\">TRACKING YOUR ORDER</h5><p>You can track your order by using the tracking link in your order dispatch email or in the email &amp; SMS from DPD.</p><p>Products that are made to your specifications or are clearly personalized (i.e. Kånken Me and Kånken Me Mini) are manufactured by third hand party and then delivered to our warehouse. Until delivery to warehouse you will not be able to track your shipment of the specific order.</p></div> </div> <br><br>', 'shipping', 1, 1, '2023-11-15 09:01:54', '2023-11-15 09:05:25', 1),
(4, 'Returns', '<h5 class=\"card-title\">HOW TO RETURN</h5>\r\n      <p>\r\n        To facilitate your return, click on the link in your shipping\r\n        confirmation or follow the steps below:\r\n      </p>\r\n      <ul style=\"list-style: inherit; padding-left: 20px;\">\r\n        <li>\r\n          Click here and enter your order number and the email registered on the\r\n          order.\r\n        </li>\r\n        <li>Choose the item(s) you would like to return. </li>\r\n        <li>\r\n          Choose the reason for your return.\r\n          <ul>\r\n            <li>\r\n              If you would like to make a warranty claim, click on “Make a\r\n              warranty claim”. A request is sent to our Customer Service, they\r\n              will reach out with further instructions.\r\n            </li>\r\n            <li>\r\n              If you want to make an exchange, please choose the new size/colour\r\n              in the list of options.\r\n            </li>\r\n            <li>\r\n              <i>\r\n                Please note that your exchange is not shipped until your return\r\n                arrives at our warehouse. We reserve the right to refund if the\r\n                exchange cannot be fulfilled at that time.\r\n              </i>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          The available return service for you will be displayed, please click\r\n          on that option.\r\n        </li>\r\n        <li>\r\n          Print your generated label.\r\n          <ul>\r\n            <li>\r\n              Pack the item(s) securely in a box. You can use the box the\r\n              item(s) arrived in or another if you prefer.\r\n            </li>\r\n            <li>\r\n              Attach the label on the outside of your parcel. Make sure to\r\n              remove or completely cover the old lab\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          Leave the package at the delivery courier drop off point.\r\n          <ul>\r\n            <li>\r\n              Make sure to always keep the receipt you receive, in case of any\r\n              lost parcels this is needed as proof.\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-md-4\">\r\n          <h5 class=\"card-title\">FOR PERSONALISED ITEMS</h5>\r\n          <p>\r\n            Products that are made to your specifications or are clearly\r\n            personalised (i.e. Kånken Me and Kånken Me Mini) are excluded from\r\n            the right of withdrawal (see the instruction on the right of\r\n            withdrawal for more information). For information about defective\r\n            items, please see more details in our Terms and Conditions as well\r\n            as the Defects section.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5 class=\"card-title\">REFUND PROCESS</h5>\r\n          <p>\r\n            We will carry out the refund using the same payment method you chose\r\n            for your initial purchase. Example: If you paid by credit card, we\r\n            will refund the balance to your credit card. The refund is made\r\n            within max. 14 calendar days after receipt of the returned items.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5 class=\"card-title\">DEFECTS LIABILITY</h5>\r\n          <p>\r\n            We offer a 2-year warranty period that starts from the purchase date\r\n            stated on your receipt. For warranty claims to be processed you\r\n            should be able to present a receipt. Note that we only accept goods\r\n            purchased through our website. For goods purchased in the\r\n            store/through resellers the warranty issues should be handled by the\r\n            respective place of purchase that is specified on your receipt.\r\n          </p>\r\n          <p>\r\n            If you wish to submit a warranty claim on a product purchased\r\n            through our website, please contact our customer service via our\r\n            form found here (opens in a new window) or by phone (0046 (0) 660\r\n            490890).\r\n          </p>\r\n        </div>\r\n      </div>', 'returns', 1, 1, '2023-11-15 09:15:09', '2023-11-15 09:15:51', 1),
(5, 'Payments', '<h5 class=\"card-title\">HOW DO I PAY FOR MY ORDER?</h5>\r\n      <p>At the moment you can pay with the below payment methods:</p>\r\n      <ul style=\"list-style: inherit; padding-left: 20px;\">\r\n        <li>MasterCard</li>\r\n        <li>Maestro</li>\r\n        <li>VISA credit/debit card</li>\r\n        <li>VISA Electron</li>\r\n        <li>Paypal</li>\r\n        <li>Apple Pay</li>\r\n        <li>Gift card*</li>\r\n        <p>\r\n          <i>\r\n            *Please note that gift cards cannot be used to purchase other gift\r\n            cards.\r\n          </i>\r\n        </p>\r\n      </ul>\r\n      <div class=\"row mt-5\">\r\n        <div class=\"col-md-6\">\r\n          <h5 class=\"card-title\">PAYMENT WITH CREDIT CARD</h5>\r\n          <p>\r\n            All payments are subject to validation and authorization by both the\r\n            card issuer/credit company and us to maintain security and to\r\n            prevent fraud. Payment security has a very high priority. Therefore\r\n            all information is sent through encrypted servers (SSL/HTTPS). This\r\n            system prevents your credit/debit card from being fraudulently used\r\n            by others. Fenix never saves any information regarding your credit\r\n            card.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <h5 class=\"card-title\">WHEN WILL I BE CHARGED?</h5>\r\n          <p>\r\n            If you pay with credit/debit card, your card will be authorized when\r\n            you place your order, and you will receive an email confirming that\r\n            your order has been successful. We will not charge your card until\r\n            we process your order and ship it from our warehouse.\r\n          </p>\r\n          <p>\r\n            However, if you have purchased a personalized and non-returnable\r\n            item, such as Kånken Me or Kånken Me Mini, the amount will be\r\n            charged on your card directly after the order has been placed.\r\n          </p>\r\n          <p>\r\n            If your card is not authorized, no charge will appear, and you will\r\n            be notified immediately on the screen that the payment was\r\n            unsuccessful. You will be asked to provide another method of\r\n            payment.\r\n          </p>\r\n        </div>\r\n      </div>', 'payments', 1, 1, '2023-11-15 09:18:35', '2023-11-15 09:19:22', 1),
(6, 'About us', '<p>\r\n        Fjällräven was born out of one man’s vision: a vision to make nature\r\n        accessible to more people.\r\n      </p>\r\n      <p class=\"mt-2\">\r\n        Åke Nordin was born in Örnsköldsvik, on Sweden’s High Coast, in 1936.\r\n        Combining rolling hills, deep forests and sheltered coastline it was the\r\n        perfect playground for a young, curious Åke. And it was on one of his\r\n        many adventures that the seed for Fjällräven was planted, deep in Åke’s\r\n        mind.\r\n      </p>\r\n      <p class=\"mt-2\">\r\n        The idea arose out of necessity: to create a backpack that swallowed up\r\n        gear, but sat comfortably on his back. Åke knew there must be a way.\r\n        With his mother’s sewing machine and his father’s tools, Åke created a\r\n        wooden-framed backpack in his basement. And with it, the seed was sown.\r\n        10 years later, in 1960, in that same basement, Åke founded Fjällräven\r\n        and launched his first product for sale. Guess what is was? Yep, a\r\n        backpack; this time with an aluminium frame.\r\n      </p>\r\n      <p class=\"mt-2\">\r\n        During the 1960s and 70s, fuelled by Åke’s stubborn belief that there\r\n        must always be a way – a practical solution –the Fjällräven product\r\n        range expanded significantly, with tents, sleeping bags, jackets and\r\n        trousers. The Greenland Jacket, the Expedition Down Jacket and the\r\n        Kånken backpack proved to be defining products. Virtually every other\r\n        Swede, from avid trekker to enthusiastic nature lover, wore and trusted\r\n        Fjällräven.\r\n      </p>\r\n      <img\r\n        src=\"https://www.fjallraven.com/495e0f/contentassets/1054cb5a7c054e0ab04742fe1a4cebae/t04_cropped_our_history-12392-1.jpg\"\r\n        alt=\"test\"\r\n      />\r\n      <p class=\"mt-2\">\r\n        The 80s and 90s were more about geographical expansion. Trekking through\r\n        nature, going slowly, carrying everything you need on your back while\r\n        enjoying every step, shouldn’t just be something for Swedes. First we\r\n        expanded throughout Scandinavia, then further afield in Europe. But it\r\n        wasn’t enough for Åke to just offer the clothing and equipment to get\r\n        out in nature. His dream was to actually enable people to get out there.\r\n        He wanted more people to trek through the wilderness; because the more\r\n        people experience nature, the more likely they are to care for it. And\r\n        again, he knew there must be a way. His dream became a reality in 2005\r\n        with the launch of Fjällräven Classic: a 110km-long trek through\r\n        northern Sweden.{\" \"}\r\n      </p>\r\n      <p class=\"mt-2\">\r\n        And with nature being so important to us, here at Fjällräven, we’ve\r\n        placed more and more emphasis on sustainable development; to develop on\r\n        nature’s terms. Since the new millennium, we’ve launched Eco-Shell, our\r\n        Down Promise and the Fjällräven Way – our Code of Conduct.\r\n      </p>\r\n      <img\r\n        src=\"https://www.fjallraven.com/495e24/contentassets/1054cb5a7c054e0ab04742fe1a4cebae/imagezm0bv.png\"\r\n        alt=\"test1\"\r\n      />\r\n      <p class=\"mt-2\">\r\n        Then in 2017 we became very nostalgic. We returned to where Åke first\r\n        drew inspiration, the Swedish mountains, to create our mountaineering\r\n        collection: Bergtagen. And now, in 2018, we’re revisiting that first\r\n        defining product, the Greenland Jacket and the collection it forged, to\r\n        create Greenland Updated.\r\n      </p>\r\n      <p class=\"mt-2\">\r\n        But whether we’re looking forward, backwards or sideways for\r\n        inspiration, we’re always moving towards a common goal. Enabling and\r\n        inspiring more people to experience nature was Åke’s vision and we now\r\n        make it our mission. Nature is in our DNA. We simply can’t deviate from\r\n        it. Without it, we’d be nothing. It is our past, present and future.\r\n        It’s our forever.\r\n      </p>', 'about-us', 1, 1, '2023-11-15 09:24:27', '2023-11-15 09:25:10', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `topic_id` bigint(20) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` mediumtext NOT NULL,
  `image` varchar(1000) NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_post`
--

INSERT INTO `db_post` (`id`, `title`, `topic_id`, `slug`, `detail`, `image`, `metakey`, `metadesc`, `created_by`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'test', 2, 'test', 'test', 'test.png', 'test', 'test', 3, '2023-10-18 09:31:21', '2023-10-18 09:31:21', NULL, 1),
(3, 'test32', 2, 'test123', 'test123', 'test.png', 'test123', 'test213', 1, '2023-10-18 09:31:21', '2023-10-18 09:31:21', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `price` double(8,2) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `back_image` varchar(1000) NOT NULL,
  `description` mediumtext NOT NULL,
  `metakey` varchar(255) NOT NULL,
  `metadesc` varchar(255) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `category_id`, `brand_id`, `name`, `slug`, `price`, `image`, `back_image`, `description`, `metakey`, `metadesc`, `created_by`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(15, 15, 13, 'RÄVEN 28', 'raven-28', 120.00, 'raven-28.jpg', 'raven-28_back.jpg', 'Simple and hardwearing 28L backpack with great organizing possibilities. Separate Laptop compartment for laptops up to 15”. Large main compartment with a zippered inside security pocket. It also has a zippered front compartment with mesh organizer pockets inside, a fleece-lined top pocket and a padded air mesh back panel with comfortable shoulder straps. Robust leather handle at the top. Made from durable G-1000 HeavyDuty, this is a perfect backpack for commuting and everyday outdoor life.', 'yes', 'yes', 1, '2023-10-05 03:42:14', '2023-10-05 03:42:14', NULL, 1),
(16, 15, 1, 'Skule 28', 'skule-28', 95.00, 'skule-28.webp', 'skule-28_back.jpg', 'This 28L backpack is perfect for everyday trips to school or work and just as suitable for day hikes. Made from hardwearing, water-repellent Oxford fabric in recycled polyester. It has an easily accessed top pocket and a zippered main compartment with a padded 15” laptop sleeve. Spacious front compartment with inside zippered pocket and mesh organizing pockets. Comfortable back panel with air mesh, padded shoulder straps and adjustable chest strap.', 'skule 28', 'skule 28', 1, '2023-10-05 03:44:25', '2023-10-05 03:44:25', NULL, 1),
(19, 15, 1, 'Kaken totepack', 'kaken-totepack', 100.00, 'kaken-totepack.png', 'kaken-totepack_back.png', 'Kånken Totepack is a convertible version of Fjällräven’s iconic backpack and can be either a backpack when you bike or a shoulder bag when you board a crowded bus. It has a zippered main compartment and an inside pocket with a padded base for a 13” laptop. With the seat pad you’ll find in the back of the main compartment, you can always take a break, wherever you are.', 'kankentote', 'kankentote', 1, '2023-10-20 23:05:10', '2023-10-20 23:05:10', NULL, 1),
(20, 15, 1, 'Samlaren Kanken 2c', 'samlaren-kanken-2c', 115.00, 'samlaren-kanken-2c.jpg', 'samlaren-kanken-2c_back.jpg', 'Limited edition, special version of Kånken. Part of the Samlaren series made from leftover fabric from Fjällräven’s mills and factories carefully combined in unique designs. Samlaren Kånken is slightly larger and has padded shoulder straps and several pockets – open, zippered or with buttons. Otherwise it has the same timeless functionality as the original, with a spacious main compartment that has a seat pad stowed in the back inside pocket.', 'hrthrh', 'fdghdfgjfhd', 1, '2023-10-21 00:36:34', '2023-10-21 00:36:34', NULL, 1),
(21, 15, 1, 'Samlaren Kanken 2d', 'samlaren-kanken-2d', 115.00, 'samlaren-kanken-2d.jpg', 'samlaren-kanken-2d_back.jpg', 'Limited edition, special version of Kånken. Part of the Samlaren series made from leftover fabric from Fjällräven’s mills and factories carefully combined in unique designs. Samlaren Kånken is slightly larger and has padded shoulder straps and several pockets – open, zippered or with buttons. Otherwise it has the same timeless functionality as the original, with a spacious main compartment that has a seat pad stowed in the back inside pocket.', 'trd', 'hdg', 1, '2023-10-21 00:39:10', '2023-10-21 00:39:10', NULL, 1),
(22, 16, 1, 'High Coast Totepack', 'high-coast-totepack', 85.00, 'high-coast-totepack.jpg', 'high-coast-totepack_back.jpg', 'Versatile, light and practical – High Coast Totepack is a perfect companion for everyday life and travelling, both in town and on easy hikes. You can carry it over your shoulder, in your hand or on your back. The main compartment has a computer pocket with a padded base and a small zippered pocket. The entire bag can be folded into its front pocket when not in use. The outer fabric is waterproof but not the zippers and seams, so the bag can handle getting wet but not being submerged.', 'dhdh', 'dghdghdf', 1, '2023-10-21 00:43:27', '2023-10-21 00:43:27', NULL, 1),
(23, 17, 1, 'ABISKO DOME 2', 'abisko-dome-2', 900.00, 'abisko-dome-2.jpg', 'abisko-dome-2_back.jpg', 'Spacious and stable dome tent with two generous vestibules. A lightweight and comfortable trekking tent for four-season use, in all conditions except the most exposed. Two entrances simplify tent life, you can organise one side each inside the tent and use the lee-side entrance in windy weather. There is also plenty of space for equipment, cooking and activities when the weather is bad.', 'test', 'tsetest', 1, '2023-11-16 00:15:24', '2023-11-16 01:25:21', 4, 1),
(24, 21, 1, 'HUNTING RAIN COVER 16-28', 'hunting-rain-cover-16-28', 35.00, 'hunting-rain-cover-16-28.jpg', 'hunting-rain-cover-16-28_back.jpg', 'Rain cover with taped seams that fits backpacks with between 16 and 28 litres of volume – such as Singi 28 and Singi Stubben, even with side pockets attached. The safety colour with camouflage pattern makes it highly visible for other hunters but hard to detect for game animals. Elastic drawcord adjustment gives a good fit and a hook secures the cover to the backpack so it won\'t blow off in high winds. Inside in white so can be reversed when hunting in the snow.', 'gf', 'sagsfgg', 1, '2023-11-16 00:21:14', '2023-11-16 00:21:14', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `pricesale` double NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `date_begin` timestamp NULL DEFAULT NULL,
  `date_end` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productsale`
--

INSERT INTO `db_productsale` (`id`, `product_id`, `pricesale`, `qty`, `date_begin`, `date_end`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(9, 19, 80, 5, '2023-10-20 04:09:21', '2023-10-29 04:09:21', 1, 0, '2023-10-19 04:11:22', '2023-10-19 04:11:22'),
(10, 16, 80, 2, '2023-11-10 04:09:21', '2023-11-21 17:56:48', 1, 0, '2023-10-19 04:11:22', '2023-10-19 04:11:22');

-- --------------------------------------------------------

--
-- Table structure for table `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price` double NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productstore`
--

INSERT INTO `db_productstore` (`id`, `product_id`, `price`, `qty`, `created_by`, `created_at`, `updated_at`, `updated_by`) VALUES
(1, 15, 120, 50, 1, '2023-10-17 17:08:55', '2023-10-18 02:04:56', 1),
(2, 16, 220, 40, 1, '2023-10-17 17:08:55', '2023-10-18 02:00:25', 1),
(3, 19, 100, 10, 1, '2023-10-24 07:44:02', '2023-10-24 07:44:02', 0),
(4, 20, 90, 20, 1, '2023-10-24 07:44:02', '2023-10-24 07:44:02', 0),
(5, 21, 80, 5, 1, '2023-10-24 07:44:02', '2023-10-24 07:44:02', 0),
(6, 22, 100, 22, 1, '2023-10-24 07:44:02', '2023-10-24 07:44:02', 0),
(7, 23, 900, 14, 1, '2023-11-16 00:32:32', '2023-11-16 00:32:32', 0),
(8, 24, 35, 20, 1, '2023-11-16 00:32:32', '2023-11-16 00:32:32', 0);

-- --------------------------------------------------------

--
-- Table structure for table `db_product_img`
--

CREATE TABLE `db_product_img` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product_img`
--

INSERT INTO `db_product_img` (`id`, `product_id`, `image`) VALUES
(3, 15, 'raven-28_93865.jpg'),
(4, 15, 'raven-28_36806.jpg'),
(5, 15, 'raven-28_64126.jpg'),
(6, 15, 'raven-28_22760.jpg'),
(7, 15, 'raven-28_68873.jpg'),
(8, 16, 'skule-28_62806.jpg'),
(9, 16, 'skule-28_36887.jpg'),
(10, 16, 'skule-28_8635.webp'),
(11, 16, 'skule-28_47522.webp'),
(12, 16, 'skule-28_11491.jpg'),
(13, 16, 'skule-28_28753.jpg'),
(17, 19, 'kaken-totepack_3795.png'),
(18, 19, 'kaken-totepack_50452.png'),
(19, 19, 'kaken-totepack_43572.png'),
(20, 19, 'kaken-totepack_92223.png'),
(21, 19, 'kaken-totepack_85443.png'),
(22, 19, 'kaken-totepack_2138.png'),
(23, 19, 'kaken-totepack_65003.png'),
(24, 19, 'kaken-totepack_99466.png'),
(25, 19, 'kaken-totepack_88525.png'),
(26, 20, 'samlaren-kanken-2c_65478.jpg'),
(27, 20, 'samlaren-kanken-2c_54772.jpg'),
(28, 20, 'samlaren-kanken-2c_24913.jpg'),
(29, 20, 'samlaren-kanken-2c_29383.jpg'),
(30, 20, 'samlaren-kanken-2c_50369.jpg'),
(31, 20, 'samlaren-kanken-2c_17998.jpg'),
(32, 21, 'samlaren-kanken-2d_64252.jpg'),
(33, 21, 'samlaren-kanken-2d_44852.jpg'),
(34, 21, 'samlaren-kanken-2d_94442.jpg'),
(35, 21, 'samlaren-kanken-2d_33899.jpg'),
(36, 21, 'samlaren-kanken-2d_91298.jpg'),
(37, 21, 'samlaren-kanken-2d_12764.jpg'),
(38, 22, 'high-coast-totepack_34844.jpg'),
(39, 22, 'high-coast-totepack_63374.jpg'),
(40, 22, 'high-coast-totepack_77418.jpg'),
(41, 22, 'high-coast-totepack_85264.jpg'),
(42, 22, 'high-coast-totepack_73733.jpg'),
(43, 22, 'high-coast-totepack_74530.jpg'),
(44, 22, 'high-coast-totepack_62201.jpg'),
(45, 22, 'high-coast-totepack_9660.jpg'),
(46, 22, 'high-coast-totepack_16990.jpg'),
(47, 22, 'high-coast-totepack_19031.jpg'),
(48, 22, 'high-coast-totepack_9169.jpg'),
(49, 22, 'high-coast-totepack_1372.jpg'),
(50, 22, 'high-coast-totepack_75179.jpg'),
(57, 24, 'hunting-rain-cover-16-28_76064.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `db_review`
--

CREATE TABLE `db_review` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `comment` varchar(1000) NOT NULL,
  `rating` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_review`
--

INSERT INTO `db_review` (`id`, `user_id`, `product_id`, `title`, `comment`, `rating`, `created_at`) VALUES
(1, 3, 16, 'test', 'test3123213213213', 2, '2023-11-14 16:36:29');

-- --------------------------------------------------------

--
-- Table structure for table `db_slider`
--

CREATE TABLE `db_slider` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `image` varchar(1000) NOT NULL,
  `path` varchar(1000) NOT NULL,
  `position` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_slider`
--

INSERT INTO `db_slider` (`id`, `name`, `image`, `path`, `position`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(69, 'Kanken restocked!', 'kanken-restocked.jpg', '/products/search/kanken', 'sliders', '2023-10-02 09:42:03', '2023-10-02 09:42:03', 1, NULL, 1),
(75, 'Kanken family is here!', 'kanken-family-is-here.jpg', '/products/search/kanken', 'sliders', '2023-10-05 01:53:39', '2023-10-05 01:53:39', 1, NULL, 1),
(76, 'New mountain products', 'new-mountain-products.webp', '/products/search/mountain', 'sliders', '2023-10-05 06:13:35', '2023-10-05 06:13:35', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `description`, `created_by`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(2, 'test1', 'test1', 'test16345', 1, '2023-10-18 04:25:34', '2023-10-18 04:43:41', 1, 1),
(3, 'test12', 'test12', 'test1111', 1, '2023-10-18 04:40:42', '2023-10-18 04:40:42', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_users`
--

CREATE TABLE `db_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `roles` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_users`
--

INSERT INTO `db_users` (`id`, `name`, `email`, `phone`, `username`, `password`, `address`, `roles`, `created_at`, `updated_at`, `created_by`, `updated_by`, `status`) VALUES
(1, 'hiep', 'asdf@gmail.com', '12312412', 'hiepdeptrai123', '123123', 'sau nha', '1', '2023-09-23 09:26:24', NULL, 0, NULL, 2),
(3, 'Lê Minh', 'ters12@gmail.com', '123123123', 'testaccount1', '$2y$10$dah8eW3k8uLwJT37/M..Pex1Lvjs9dRFWAT5LJTWI3M7WzJGnMwTO', 'Quy Nhon City, Vietnam', '2', '2023-10-22 09:25:04', '2023-11-15 23:48:24', 1, 1, 1),
(4, 'Thái Thị Huyền', 'admin@gmail.com', '1231231232', 'admin123', '$2y$10$rJUsWjORI/awQISNv8x0c.5tByWUX7GmgUxcF/TDV0orh8pUuB4ea', 'test', '1', '2023-10-22 09:29:59', '2023-10-22 09:29:59', 1, NULL, 1),
(5, 'asdfasdf asdfsdf', 'admin1@gmail.com', '45234234', 'admin1234', '$2y$10$sXXpU5d5mzlT7SLsu3cp1O8iKhvAQqgxIffpWXAPzHy0JIWIGgQ9m', 'asdfsdf', '2', '2023-10-22 09:45:12', '2023-10-24 06:22:04', 1, NULL, 0),
(6, 'tsert tsrt', 'test123@gmail.com', '4343241324', 'tsert', '$2y$10$m9CB1qhiG2RopAok4KTV.OrgGHW/93DsjhBlGWGwYj1vwMuqH521e', 'ffgsfdg', '2', '2023-10-24 06:47:45', '2023-10-24 06:47:45', 1, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_wishlist`
--

CREATE TABLE `db_wishlist` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` tinyint(3) UNSIGNED NOT NULL,
  `product_id` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_wishlist`
--

INSERT INTO `db_wishlist` (`id`, `user_id`, `product_id`) VALUES
(1, 1, 1),
(3, 1, 2),
(4, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(3, '2023_09_21_061535_create_brand_table', 1),
(4, '2023_09_21_061548_create_category_table', 1),
(5, '2023_09_21_061553_create_contact_table', 1),
(6, '2023_09_21_061629_create_menu_table', 1),
(7, '2023_09_21_061634_create_order_table', 1),
(9, '2023_09_21_061640_create_product_table', 1),
(10, '2023_09_21_061643_create_post_table', 1),
(11, '2023_09_21_061647_create_slider_table', 1),
(12, '2023_09_21_061710_create_users_table', 1),
(13, '2023_09_21_061725_create_cart_table', 2),
(14, '2023_09_21_061815_create_product_img_table', 2),
(16, '2023_09_21_061850_create_wishlist_table', 3),
(18, '2023_09_21_061637_create_orderdetail_table', 4),
(20, '2023_10_11_101934_create_productstore_table', 5),
(21, '2023_10_11_101943_create_productsale_table', 6),
(22, '2023_10_11_101951_create_config_table', 6),
(23, '2023_10_11_101927_create_topic_table', 7),
(24, '2023_11_14_154948_create_review_table', 8),
(25, '2023_11_15_143142_create_page_table', 9);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_cart`
--
ALTER TABLE `db_cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_contact`
--
ALTER TABLE `db_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_page`
--
ALTER TABLE `db_page`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_post`
--
ALTER TABLE `db_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product_img`
--
ALTER TABLE `db_product_img`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_review`
--
ALTER TABLE `db_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_slider`
--
ALTER TABLE `db_slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_users`
--
ALTER TABLE `db_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_users_email_unique` (`email`),
  ADD UNIQUE KEY `db_users_username_unique` (`username`);

--
-- Indexes for table `db_wishlist`
--
ALTER TABLE `db_wishlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `db_cart`
--
ALTER TABLE `db_cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `db_config`
--
ALTER TABLE `db_config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `db_contact`
--
ALTER TABLE `db_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_page`
--
ALTER TABLE `db_page`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_post`
--
ALTER TABLE `db_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `db_productsale`
--
ALTER TABLE `db_productsale`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `db_productstore`
--
ALTER TABLE `db_productstore`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `db_product_img`
--
ALTER TABLE `db_product_img`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `db_review`
--
ALTER TABLE `db_review`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `db_slider`
--
ALTER TABLE `db_slider`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `db_users`
--
ALTER TABLE `db_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_wishlist`
--
ALTER TABLE `db_wishlist`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
