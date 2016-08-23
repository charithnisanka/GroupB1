-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2016 at 02:52 PM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Brand` varchar(255) NOT NULL,
  `Category` varchar(255) NOT NULL,
  `Model` varchar(255) NOT NULL,
  `Angle_measure` varchar(255) NOT NULL,
  `Distance_measure` varchar(255) NOT NULL,
  `Scanning_and_Imaging` varchar(255) NOT NULL,
  `Battery` varchar(255) NOT NULL,
  `Telescope` varchar(255) NOT NULL,
  `Plummet` varchar(255) NOT NULL,
  `Interface` varchar(255) NOT NULL,
  `Memory` varchar(255) NOT NULL,
  `Environmental` varchar(255) NOT NULL,
  `Physical` varchar(255) NOT NULL,
  `Special_features` varchar(255) NOT NULL,
  `Features` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `Type`, `Brand`, `Category`, `Model`, `Angle_measure`, `Distance_measure`, `Scanning_and_Imaging`, `Battery`, `Telescope`, `Plummet`, `Interface`, `Memory`, `Environmental`, `Physical`, `Special_features`, `Features`) VALUES
(11, 'Total Station', 'Leica', 'Manual Total Station', 'Leica Total Station TS06plus', 'Accuracy 	1â€ (0.3 mgon) / 2â€ (0.6 mgon) 3â€ (1 mgon) / 5â€œ (1.5 mgon) / 7â€ (2 mgon)', 'Accuracy 3)	Precise+: 1.5 mm+2.0 ppm / Precise Fast: 2.0 mm+2.0 ppm / Tracking: 3.0 mm+2.0 ppm', 'none', ' 30 hours', 'none', 'Type	Laser point, 5 brightness levels', '- Serial (Baudrate up to 115â€™200) / - USB Type A and mini B, / - BluetoothÂ® Wireless, class 1, 150 m - > 1000 m (with TCPS29)', 'Max.: 100â€™000 fixpoints, Max.: 60â€™000 measurements', 'Temperature range (operation)	-20Â° C to +50Â° C (-4Â° F to +122Â° F)', 'none', 'none', ''),
(12, 'Total Station', 'Leica', 'Manual Total Station', 'Leica Total Station TS02plus', 'Accuracy (Standard deviation ISO-17123-3)	3â€ (1 mgon), 5â€ (1.5 mgon), 7â€ (2 mgon)', 'Accuracy / Measurement time(Standard deviation ISO-17123-4)	Standard: 1.5 mm+2 ppm / typ. 2.4 s, Fast: 3 mm+2 ppm / typ. 0.8 s, Tracking: 3 mm+2 ppm / typ. <0.15 s', 'none', 'Operating time:approx. 20 hours1', 'Magnification:30 x,Field of view:1Â° 30â€™ (1.66 gon) / 2.7 m at 100 m', 'Type	Laser point, 5 brightness levels,Centering accuracy	1.5 mm at 1.5 m Instrument height', 'both side', 'Max.: 24â€™000 fixpoints, Max.: 13â€™500 measurements', 'Temperature range (operation)	-20Â° C to +50Â° C (-4Â° F to +122Â° F)Arctic Version -35Â° C to 50Â° C (-31Â° F to +122Â° F)', 'Weight:	5.1 kg', ' operating system Windows CE	5.0 Core', ''),
(13, 'Total Station', 'Leica', 'Manual Total Station', 'Leica Total Station TS09plus', 'Accuracy	1â€ (0.3 mgon) / 2â€ (0.6 mgon)', 'Range 2) Round prism (Leica GPR1) 	3.500 m ,Accuracy 3) 	Precise+: 1.5 mm + 2.0 ppm', 'none', 'Operating time 7) :	approx. 30 hours ', 'Magnification 	30 x,Field of View :1Â¢X 30Â¡Â¦ (1.66 gon)', 'Type :Laser point, 5 brightness levels ,Centering accuracy	 1.5 mm at 1.5 m Instrument height', 'both side', ' Max.: 100â€™000 fixpoints,', 'Temperature range (operation)	 â€“20Â° C to +50Â° C', 'Weight:	5.1 kg', ' operating system Windows CE :5.0 Core', ''),
(14, 'Total Station', 'Leica', 'Robotic Total Station', 'Leica Total Station TS 16', 'Accuracy 1 Hz and V	 Absolute, continuous, diametrical	 1â€™â€™ (0.3 mgon), 2â€™â€™ (0.6 mgon), 3â€™â€™ (1 mgon),', 'Accuracy / Measurement time	Single (prism) 2,5	1mm + 1.5ppm / typically 2.4s', 'Overview camera 	Sensor	5 megapixel CMOS sensor', 'Operating time 5â€“8 h', 'Field of view	19.4Â°', 'none', 'RS232, USB, BluetoothÂ®, WLAN', '2 GB', 'â€“20Â°C to +50Â°C', 'Total station including battery :5.3 - 6kg', 'Operating system â€“ Windows EC7', ''),
(15, 'Total Station', 'Leica', 'Robotic Total Station', 'Leica Total Station TS 50', 'Accuracy 1 Hz and V 	Absolute, continuous, quadruple: 0.5â€ (0.15 mgon)', 'Range 2 Prism	 (GPR1, GPH1P) 3 	1.5 m to 3500 m,Accuracy / Measurement time	 Single (prism) 2,5	0.6 mm + 1 ppm / typ. 2.4 s', 'Overview and telescope camera	 Sensor	5 Mpixel CMOS sensor', 'Operating Time 7â€“9 h', 'Field of view (overview / telescope)	19.4Â° / 1.5Â°, Magnification / Focus Range 	30 x / 1.7 m to infinity', ' 360Â° prism (GRZ4, GRZ122)', ' RS232, USB, BluetoothÂ®, WLAN', '1 GB', 'Working temperature range	â€“20Â°C to +50Â°C,Dust & Water (IEC 60529) / Blowing rain	IP65 / MIL-STD-810G, Method 506.5-I', 'Total Station incl. battery 	7.6 kg', '3x endless drives, 1x Servofocus drive, 2x Autofocus keys, User-definable SmartKey	', ''),
(16, 'Total Station', 'Leica', 'Robotic Total Station', 'Leica Total Station TS 60', 'Accuracy 1 Hz and V	 Absolute, continuous, quadruple	 0.5â€ (0.15 mgon)', 'Range 2	 Prism (GPR1, GPH1P) 3	1.5m to 3500m,Accuracy / Measurement time	 Single (prism) 2,5	0.6mm + 1ppm / typically 2.4s', 'Overview and telescope camera 	Sensor	5 megapixel CMOS sensor', 'Operating time 7â€“9 h', ' Magnification / Focus range 	30 x / 1.7m to infinity', '360Â° prism (GRZ4, GRZ122) ', ' RS232, USB, BluetoothÂ®, WLAN', '2 GB', 'Working temperature range	â€“20Â°C to +50Â°C Dust & Water (IEC 60529) / Blowing rain	IP65 / MIL-STD-810G, Method 506.5-I', 'Total station including battery	 7.7kg', 'Processor TI 	OMAP4430 1GHz Dual-core ARMÂ® Cortexâ„¢-	Operating system - Windows EC7', ''),
(17, 'Total Station', 'Leica', 'Multy Station', 'Leica Total Station MS 60', 'Accuracy 1 Hz and V Absolute, continuous, quadruple 1â€ (0.3 mgon)', 'Range : Prism (GPR1, GPH1P) , Non-Prism / Any surface ,1.5m to >10,000m 1.5m to 2000m', 'Max. Range : 1000 Hz mode 250 Hz mode 62 Hz mode 1 Hz mode 300m / 1.0mm at 50m', 'Operating time 7â€“9 h', 'Magnification / Focus Range 30 x / 1.7m to infinity', '360Â° prism (GRZ4, GRZ122), 300m / typically 5s', 'RS232, USB, BluetoothÂ®, WLAN', 'MultiStation including battery 7.7kg', 'Working temperature  â€“20Â°C to + 50Â°C', 'MultiStation including battery 7.7kg', 'Processor TI OMAP4430 1GHz Dual-core ARMÂ® Cortexâ„¢- A9 MPCoreâ„¢ Operating system - Windows EC7', ''),
(18, 'Total Station', 'Nikon', 'Manual Total Station', 'Nikon Total Station NIVO 2.M+ Series', 'Minimum increment					Degree: 1/5/10"																			', 'Reflectorless mode (KGC 18%)					350 m (1,148 ft)	', 'none', 'Operating time4:approx. 19 hours (continuous distance/angle measurement)					', 'Magnification:30Ã— (18x/36x with optional eyepieces)					', 'none', 'Integrated Bluetooth					', 'Point memory					25,000 records					', 'Operating temperature range	:â€“20 Â°C to +50 Â°C (â€“4 Â°F to +122 Â°F)					', 'Main unit (without batteries):3.8 kg (8.4 lb)					', '					1 x serial (RS-232C), 1x USB (host) 					', ''),
(19, 'Total Station', 'Nikon', 'Manual Total Station', 'Nikon Total Station NIVO 1.C Series', 'Minimum increment					Degree:			0.5"			', 'Reflectorless mode (KGC 18%):350 m (1,148 ft)						', 'none', 'none', 'Magnification								30Ã— (18x/36x with optional eyepieces)			', 'none', 'none', 'none', 'Operating temperature range	:â€“20 Â°C to +50 Â°C (â€“4 Â°F to +122 Â°F)			', 'none', 'none', ''),
(20, 'Total Station', 'Nikon', 'Manual Total Station', 'Nikon Total Station NPL-322+', 'ISO 17123-3 accuracy (horizontal and vertical)	2"/0.6 mgon 5"/1.5 mgon', 'Accuracy (Prism/Precise mode)2, 3	Â±(2+2 ppm Ã— D) mm', 'none', 'Operating time5	        approx. 11 hours', 'Magnification	30Ã— (18Ã—/36Ã— with optional eyepieces)', 'Optical plummet', 'none', 'Point memory	    25,000 records', 'Ambient temperature	â€“20 Â°C to +50 Â°C (â€“4 Â°F to +122 Â°F),Dust and water protection 	 IP54', 'Main unit (without battery)	4.9 kg (10.8 lb)', 'Display	 2"/Dual face, graphic LCD (128x64 pixel) 	5"/Single face, graphic LCD (128x64 pixel)', ''),
(21, 'Total Station', 'Nikon', 'Manual Total Station', 'Nikon Total Station  DTM-322+', 'ISO 17123-3 accuracy (horizontal and vertical)	2"/0.6 mgon                 5"/1.5 mgon', 'Accuracy (Prism/Precise mode)1, 2	 Â±(3+2 ppm Ã— D) mm', 'none', 'Operating time4	approx. 15 hours 	(distance/angle measurement every 30 s.)', 'Magnification 	1.5 m (4.92 ft)', 'none', 'none', 'Point memory 	25,000 records', 'Ambient temperature range 	â€“20 Â°C to +50 Â°C (â€“4 Â°F to +122 Â°F)', 'Main unit (without battery)	4.8 kg (10.6 lb)', 'Display	5"/Single face, graphic LCD (128 Ã— 64 pixel', ''),
(22, 'Total Station', 'Sokkia', 'Manual Total Station', 'Sokkia Total Station SET 60 SERIES', 'Display resolutions (selectable) 1', 'Accuracy (D=measuring distance in mm) Â±(2mm + 2ppm x D)m', 'none', 'Operating time (Fine mode) Approx. 27 hours (Single distance measurement every 30 seconds at +20Â°C / +68Â°F*4)', 'Magnification 30x', 'none', 'none', 'Internal memory 24,000pts.', 'Operating temperature -20 to +50Â°C (-4 to 122Â°F)', 'Instrument with battery 4.9kg (10.8lbs)', 'none', ''),
(23, 'Total Station', 'Sokkia', 'Manual Total Station', 'Sokkia Total Station SX SERIES', 'Accuracy (ISO 17123-3:2001): 1', 'Accuracy:(1.5 + 2ppm x D) mm', 'none', 'Approx. 4 hours', 'none', 'none', 'Serial RS-232C, USB2.0 (Type A / mini B)', '500MB internal memory', 'Operating temperature -20 to +50ÂºC (-4 to +122ÂºF)', 'Weight with battery and tribrach 7.0kg (15.4lb.)', 'Operating system / Application WindowsÂ® Embedded CE.6.0 / MAGNET Field', ''),
(24, 'Total Station', 'Sokkia', 'Manual Total Station', 'Sokkia Total Station CX SERIES', 'Accuracy:1', 'Accuracy:0.3 to 200m', 'none', 'Approx. 36 hours (single distance measurement every 30 seconds)', 'Magnification / Resolving power :30x / 2.5', 'none', 'Serial RS-232C, USB2.0 (Type A, for USB flash memory', 'Approx. 10,000 points', 'Operating temperature:-20 to +50ÂºC', 'Weight with handle and battery Approx. 5.6kg', 'Graphic LCD, 192 x 80 dots, backlight, contrast adjustment / Alphanumeric keyboard / 25 keys with backlight', 'TEst'),
(25, 'Total Station', 'Sokkia', 'Manual Total Station', 'Sokkia Total Station FX SERIES', 'Accuracy:1"', 'Accuracy:(3 + 2ppm x D) mm', 'none', 'Approx. 20hours (single distance measurement every 30 seconds)', 'Magnification / Resolving power:30x / 2.5"', 'Optical plummet:Magnification: 3x, Minimum focus: 0.3m (11.8in.) from tribrach bottom', 'Serial RS-232C, USB2.0 (Type A / mini B)', '500MB internal memory', 'Operating temperature:-20 to +60ÂºC', 'Approx. 5.7kg (12.6 lb.)', 'Operating system / Application:Microsoft WindowsÂ® CE 6.0 / MAGNET Field', ''),
(26, 'Total Station', 'Sokkia', 'Manual Total Station', 'Sokkia Total Station DX SERIES', 'Accuracy :1"', 'Accuracy:(2 + 2ppm x D) mm', 'none', 'Approx.5hours', 'Magnification / Resolving power: 30x / 2.5"', 'Optical plummet Magnification: 3x, Minimum focus: 0.3m (11.8in.) from tribrach bottom Laser plummet (option) Red laser diode (635nmÂ±10nm), Beam accuracy: <=1.0mm@1.3m, Class 2 laser product', 'Serial RS-232C, USB2.0 (Type A / miniB)', '500MB internal memory', 'Dust and water protection / Operating temperature IP65 (IEC 60529:2001) / -20 to +50ÂºC (-4 to +122ÂºF)', 'Approx. 6.1kg (13.4lb.)', 'Operating system / Application Microsoft Windows CE 6.0 / MAGNET FIELD', ''),
(27, 'Total Station', 'Sokkia', 'Gyro Station', 'Sokkia Total Station XII', 'Accuracy:1', 'Prism Accuracy:(1.5mm + 2ppm x D) mm', 'none', '5 hours at 20Â°C (68Â°F)', 'none', 'none', 'none', 'none', 'Operating temperature -20 to +50Â°C (-4 to+122Â°F)', 'Weight:4kg', 'north more accurate ', ''),
(28, 'Total Station', 'SOUTH', 'Manual Total Station', 'SOUTH Total Station NTS-370R10', 'Accuracy:2"/5"', 'max range:single prism 1km', 'Erect', '8hrs', 'Magnification;30*', 'optional plummet:magnification:3*', 'noe', '128M DDR', 'Temperature â€“20Câ€“+50C', 'WEIGHT:6kg', 'wifi:optional', ''),
(29, 'Total Station', 'SOUTH', 'Manual Total Station', 'SOUTH Total Station NTS-342R6', 'Accuracy:2"', 'max range:1 prism :3.5km;3 prism:5km', 'none', '4 hrs', 'magnification:30*', 'magnification 3*', 'none', '98MB', 'Temperature â€“20Câ€“+50C', 'weight:5.2kg', 'none', ''),
(30, 'Total Station', 'SOUTH', 'Manual Total Station', 'SOUTH Total Station NTS-382R10', 'accuracy:2"', 'maxrange:1prism;5km,', 'none', '8 hrs', 'Magnification 30x', 'image:erecy,magnification:3*', 'none', 'none', 'Temperature â€“20C â€“ +50C ', 'weight:6kg', 'none', ''),
(31, 'Total Station', 'SOUTH', 'Manual Total Station', 'SOUTH Total Station  NTS-360', 'Minimum Reading	1', 'Max. Range:Single prism :5.0km	', 'none', '8 hrs	', 'Magnification			30X			', 'Image;Erect	,		 Magnification	:3X,	Focusing Range:0.5m  ~  Infinity			', 'none', 'Internal Memory		ready for 17,000 data blocks	', 'Temperature			(-20 C ~  + 50 C)			', 'Dimension and Weight			160 X 150 X 330mm, 5.2kg			', 'none', ''),
(32, 'Total Station', 'SOUTH', 'Manual Total Station', 'SOUTH Total Station NTS-360R6', 'Accuracy:2"', 'max range:1 prism :5km;3 prism:8km', 'NONE', '8 HRS', 'Magnification:30*', 'NTS-362R6L has laser plummet', 'NONE', '2M, ready for 17,000 data blocks', 'Temperature â€“20Câ€“+50C', 'Dimension and Weight:160 150 330mm, 5.2kg', 'none', ''),
(33, 'Total Station', 'SOUTH', 'Manual Total Station', 'SOUTH Total Station NTS-330R5', 'accuracy:2"', 'max range:1 prism :5km;3 prism:6km', 'none', '8 hrs', 'Magnification 30x', 'magnification 3*', 'none', '2M,17000pnt', 'Temperature â€“20Câ€“+50C', 'weight 5.2kg', 'no', ''),
(34, 'Total Station', 'TOPCON', 'Manual Total Station', 'TOPCON Total Station ES SERIES', 'Accuracy :1" ', 'Accuracy:(3 + 2ppm x D) mm', 'none', 'Approx. 36 hours', 'Magnification / Resolving power:30x / 2.5"', 'Magnification: 3x, Minimum focus: 0.3m (11.8in.) from tribrach bottom', 'Serial RS-232C, USB2.0 (Type A, for USB flash memory)', 'Approx. 10,000 points', 'Operating temperature :-20 to +60Â°C (-4 to +140Â°F)', 'Approx. 5.6kg (12.3 lb.)', 'none', ''),
(35, 'Total Station', 'TOPCON', 'Manual Total Station', 'TOPCON Total Station OS SERIES', 'Accuracy:1"', 'measuring rang:reflectorless;0.3-500m', 'none', '20hrs', 'Magnification 30x', 'Magnification: 3x, Minimum focus: 0.3m (11.8in.) from tribrach bottom', 'Serial RS-232C, USB2.0 (Type A / mini B)', '500MB', 'Temperature â€“20Câ€“+60C', '5.7kg', 'no', ''),
(36, 'Total Station', 'TOPCON', 'Manual Total Station', 'TOPCON Total Station GPT3500', 'Minimum Reading:1â€/5â€,Accuracy:2â€', 'Measuring Range:Mini prism 1,000m ', 'none', 'Angle measurement only 38 hours ,Including EDM measurement:Approximately 8 hours', '-', '-', 'none', 'no', 'Ambient Temperature Range â€“20Â°C to +50Â°C', 'Weight (with battery) 5.3kg', 'no', ''),
(37, 'Total Station', 'TOPCON', 'Robotic Total Station', 'TOPCON Total Station DS SERIES', 'Accuracy:1"', 'Accuracy:(2 + 2ppm x D) mm', '-', 'Approx.5hours', 'Magnification / Resolving power:30x / 2.5"', 'Optical plummet Magnification: 3x, Minimum focus: 0.3m (11.8in.) from tribrach bottom', 'Serial RS-232C, USB2.0 (Type A / miniB)', '500MB internal memory', 'Temperature â€“20Câ€“+50C', 'Approx. 6.1kg', 'no', ''),
(38, 'Total Station', 'TOPCON', 'Imaging Station', 'TOPCON Total Station LN-100', '-', '-', '-', '5hrs', '-', 'laser plummet integrated', '-', '-', '-', 'weight 4kg', '-', ''),
(39, 'Total Station', 'TOPCON', 'Imaging Station', 'TOPCON Total Station IS-3', 'minimum :1"', 'i1 prism;3km,3 prism 4km', '1.3 megapixel', 'on board battery', '-', '-', '-', '-', '-', '-', 'wifi connection', ''),
(40, 'Theodolites', 'Leica', 'Digital Theodolite', 'Leica Theodolites Leica Builder 100', 'Accuracy/Option	9"/6"', '-', '-', '20 hours', '-', '-', '-', '-', '-20Â°C to +50Â°C		', 'Weight incl.battery and tribrach	4.4kg', 'no', ''),
(41, 'Theodolites', 'Leica', 'Digital Theodolite', 'Leica Theodolites Leica Builder 200', 'Accuracy/Option	9"/6"', '-', '-', '20 hours', '-', 'Laser plummet: Laser class 2 in accordance', '-', '-', 'â€“20Câ€“+50C', 'Weight incl.battery and tribrach:5.1kg', 'no', ''),
(42, 'Theodolites', 'Leica', 'Digital Theodolite', 'Leica Theodolites Leica Builder 300', 'Accuracy/Option	9"/6"', '-', '-', '20 hours', '-', '-', '-', '15000', '-20Â°C to +50Â°C		', 'Weight incl.battery and tribrach:5.1kg', 'no', ''),
(43, 'Theodolites', 'Leica', 'Digital Theodolite', 'Leica Theodolites Leica Builder 400', 'Accuracy/Option	9"/5"', '-', '-', '20 hours', '-', 'Laser plummet: Laser class 2 in accordance', '-', '15000', '-20Â°C to +50Â°C		', 'Weight:	5.1 kg', '-', ''),
(44, 'Theodolites', 'Leica', 'Digital Theodolite', 'Leica Theodolites Leica Builder 500', 'Accuracy/Option	9"/5"', '-', '-', '20hrs', '-', '-', '-', '15000', '-20Â°C to +50Â°C		', 'Weight:	5.1 kg', '-', ''),
(45, 'Theodolites', 'SOKKIA', 'Digital Theodolite', 'SOKKIA Theodolites DT240', 'Accuracy	2"', '-', '-', 'Operating time	Approx.100 hrs					', 'Magnification 30x', 'Magnification:,Minimum focus:0.5m(1.64ft)						', 'RS-232c			', '-', '-20Â°C to +50Â°C		', 'Weight(w/batteries)	4.1kg		', '-', ''),
(46, 'Theodolites', 'SOKKIA', 'Digital Theodolite', 'SOKKIA Theodolites DT540', 'Accuracy 5"', '-', '-', 'Approx.140 hrs', 'Magnification:26x', 'Magnification:,Minimum focus:0.5m(1.64ft)						', '-', '-', '-20Â°C to +50Â°C		', 'Weight(w/batteries)	4.1kg		', 'no', ''),
(47, 'Theodolites', 'SOKKIA', 'Digital Theodolite', 'SOKKIA Theodolites DT740', 'asefz', '-', '-', 'Approx.150 hrs', 'Magnification 30x', 'Magnification: 3x, Field of view: 3Â°, Minimum focus: 0.5m (1.64ft.)', '-', '-', '-20Â°C to +50Â°C		', 'Weight(w/batteries)	4.1kg		', '-', ''),
(48, 'Theodolites', 'SOKKIA', 'Digital Theodolite', 'DT940', 'accuracy 9"', '-', '-', 'Approx.170 hrs', 'Magnification 26x', 'Magnification: 3x, Field of view: 3Â°, Minimum focus: 0.5m (1.64ft.', '-', '-', '-20Â°C to +50Â°C		', 'weight 3.5kg', '-', ''),
(49, 'Theodolites', 'TOPCON', 'Digital Theodolite', 'TOPCON Theodolites DT205', 'Accuracy	 2"', '-', '-', 'Theodolite only 	140h', 'Magnification	 30x ', '-', '-', '-', 'â€“20Câ€“+50C ', '	149x188x313mm  	4.1kg ', '-', ''),
(50, 'Theodolites', 'TOPCON', 'Digital Theodolite', 'TOPCON Theodolites DT207', 'Accuracy  7"', '-', '-', '150h', 'Magnification	 30x ', '-', '-', '-', '-20Â°C to +50Â°C		', '149x188x313mm   4.1kg ', '-', ''),
(51, 'Theodolites', 'TOPCON', 'Digital Theodolite', 'TOPCON Theodolites DT209', 'Accuracy	  9"', '-', '-', ' 170h ', 'Magnification 26x', '-', '-', '-', '-20Â°C to +50Â°C		', '149x188x305/149x188x313mm  3.5/3.8kg', '--', ''),
(52, 'Theodolites', 'TOPCON', 'Digital Theodolite', 'TOPCON TOPCON DT205L', 'Accuracy: 5"', '-', '-', '140h', 'Magnification 30x', '-', '-', '-', '-20Â°C to +50Â°C		', '152x188x313mm  4.2kg', '-', ''),
(53, 'Theodolites', 'TOPCON', 'Digital Theodolite', 'TOPCON Theodolites DT207L', 'Accuracy: 7"', '-', '-', ' 150h ', 'Magnification 30x', '-', '-', '-', ' â€“20Câ€“+50C ', ' 152x188x313mm   4.2kg ', '-', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
