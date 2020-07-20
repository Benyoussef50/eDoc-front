-- Acteur --------------------------------------------------------

INSERT INTO `bgc__acteur` (`id`, `password`, `useraddress`, `username`) VALUES
(1, '$2a$10$TSKD9GNtmkGBuxbaXAQ3l.gcb4E4GdopD3I2beBXZZQo1ubDvFcZu', NULL, 'mehdi'),
(2, '$2a$10$qlKudYScjStt4uKoeymMRuEJ8zmhBXSU8A1U0tyvVi/ql0OqOeWha', NULL, 'siham'),
(3, '$2a$10$Uz41CSto0hFBBNWzmOXUDeIzLS33JSrPEx0Kqo8wUQ89LYT6fg.qy', NULL, 'srvEDOCAGENT'),
(5, '$2a$10$o1CGjcpfgaEvJJSK7suymOJSdrrNg7iqaa79Rfmq0d/H4qXTH8lza', NULL, 'jilai'),
(6, '$2a$10$46VixdPhO0f9A02OLOC24u6pZeRpIO6cGhq0DBh8X5FH0zosXj4vq', NULL, 'testeur'),
(7, '$2a$10$w4UOLNCYaSnSG8jCn8Y02OktJse0tZYHoKyUr7hA1YY.P0a3BYBiC', NULL, 'testeuse'),
(8, '$2a$10$q3ACwwFRX/yZsVkTh0iXyOZhPVrorV1tcnZ8tYUdvEA6EjeZr3LyC', NULL, 'abramovic'),
(9, '$2a$10$C8mBaxQsNQVDo6a82ys9mOfTHmN44Fc.a.EkVyDggRkNPiyIFUxWO', NULL, 'testeuh');

-- Roles --------------------------------------------------------

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_UT'),
(2, 'ROLE_OP'),
(3, 'ROLE_ADM');

-- Chantiers --------------------------------------------------------

INSERT INTO `bgc__fiche_chantier` (`id`, `codechantier`, `codeedifice`, `codeprojet`, `datecreation`, `nomchantier`, `ownername`, `uo`) VALUES
(1, '000008dpp', '409X.00008', NULL, '20/06/2012', 'FUTUR PALAIS DE JUSTICE DE PARIS', 'l.merlet', 'Ouvrages Publics'),
(2, '777777', 'X.', '', '29/05/2018', 'Projet test champ clé non obligatoire', 'a.dano', 'Fonctions Transverses ByBat IDF'),
(3, '123456', 'X.', NULL, '12/01/2016', 'Recette MOA eDoc', 't.darocha', 'Fonctions Supports ByBat IDF'),
(4, '000051', 'X.', NULL, '16/06/2016', 'Recette V5 MOA eDoc', 'a.dano', 'Fonctions Supports ByBat IDF'),
(5, '000052', '788X.710275', NULL, '15/06/2016', 'Recette V5 MOA eDoc Lison 2', 'a.dani', 'Fonctions Supports ByBat IDF'),
(6, '000090cv', 'Z33X.987654', NULL, '04/04/2017', 'TEST Cap Vert', 'a.dano', 'BY E&S GET'),
(7, '200484', 'X.X.', NULL, '15/06/2017', 'Test refonte interfaces', 'a.dano', 'FONCTIONS transverses ByBat IDF');

-- Table ref --------------------------------------------------------

INSERT INTO `bgc_table_ref` (`id`, `bgc__designation`, `bgc__nom`, `bgc__valeur_char`, `id_chantier`) VALUES
(1, 'A', 'phase', 'A', 3),
(2, 'B', 'phase', 'B', 3),
(3, 'Dossier des Ouvrages Exécutés', 'phase', 'DOE', 3),
(4, 'Permis De Construire', 'phase', 'DPC', 3),
(5, 'Etude', 'phase', 'ETU', 3),
(6, 'Exécution Des Ouvrages', 'phase', 'EXE', 3),
(12, 'Plan dÉtude Préliminaire', 'phase', 'PEP', 3),
(13, 'eDoc Web V4//eDoc WEB V4- Lot 1-Affaire 1', 'affaire', NULL, 3),
(14, 'eDoc Web V4//eDoc WEB V4- Lot 1-Affaire 2', 'affaire', NULL, 3),
(15, 'eDoc Web V4//eDoc WEB V4- Lot 1-Affaire historisée', 'affaire', NULL, 3),
(16, 'eDoc Web V4//eDoc WEB V4- Lot 2-Affaire 1', 'affaire', NULL, 3),
(17, 'eDoc Web V4//eDoc WEB V4- Lot 2-Affaire 2', 'affaire', NULL, 3),
(18, 'eDoc Web V4//eDoc WEB V4- Lot 3-Affaire 1', 'affaire', NULL, 3),
(19, 'eDoc Web V4//eDoc WEB V4- Lot 3-Affaire 2', 'affaire', NULL, 3),
(20, 'GENERALITES TCE', 'lot', '00', 3),
(21, 'TERRASSEMENT DEPOLLUTION', 'lot', '01', 3),
(22, 'FONDATIONS SPECIALES', 'lot', '02', 3),
(23, 'GROS OEUVRE MACONNERIES', 'lot', '03', 3),
(24, 'CHARPENTE METALLIQUE', 'lot', '04', 3),
(25, 'CHARPENTE BOIS', 'lot', '05', 3),
(26, 'VOILE STRUCTURE', 'lot', '06', 3),
(27, 'VOILE MECANISME', 'lot', '07', 3),
(28, 'NIVEAU 1', 'niveau', 'N1', 3),
(29, 'NIVEAU 2', 'niveau', 'N2', 3),
(30, 'NIVEAU 3', 'niveau', 'N3', 3),
(31, 'NIVEAU 4', 'niveau', 'N4', 3),
(32, 'NIVEAU 5', 'niveau', 'N5', 3),
(33, 'NIVEAU 6', 'niveau', 'N6', 3),
(34, 'PIEUX', 'niveau', 'P1', 3),
(35, 'PLUSIEURS NIVEAUX', 'niveau', 'PN', 3),
(36, 'REZ DE CHAUSSEE', 'niveau', 'RC', 3),
(37, 'VIDE SANITAIRE', 'niveau', 'VS', 3),
(38, 'Amalric DANO', 'emetteur', 'ADA', 3),
(39, 'ACTEUR INCONNU 4', 'emetteur', 'AI4', 3),
(40, 'ACTEUR INCONNU 6', 'emetteur', 'AI6', 3),
(41, 'AZERTY', 'emetteur', 'AZE', 3),
(42, 'ZERTY', 'emetteur', 'BBB', 3),
(43, 'BELGOMETAL', 'emetteur', 'BELG', 3),
(44, 'KONE', 'emetteur', 'KON', 3),
(45, 'STRUCTIS', 'emetteur', 'MAR', 3),
(46, 'Méthodes DTIF', 'emetteur', 'METH', 3),
(47, 'Couleur', 'conb', 'CO', 3),
(48, 'Noir et blanc', 'conb', 'NB', 3),
(49, 'Grande Salle', 'zone', 'A', 3),
(50, 'Grande Salle zone 1', 'zone', 'A1', 3),
(51, 'Grande Salle zone 2', 'zone', 'A2', 3),
(52, 'Grande Salle zone 4', 'zone', 'A4', 3),
(53, 'Grande Salle zone 5', 'zone', 'A5', 3),
(54, 'Grande Salle zone 6', 'zone', 'A6', 3),
(55, 'Grande Salle zone 7', 'zone', 'A7', 3),
(56, 'Grande Salle zone 8', 'zone', 'A8', 3),
(57, 'Grande Salle zone 3', 'zone', 'A3', 3),
(58, 'ARMATURES DALLES', 'type', 'ADL', 3),
(59, 'ANALYSE FONCTIONNELLE', 'type', 'AEF', 3),
(60, 'ARMATURES FONCTIONNELLES', 'type', 'AFO', 3),
(61, 'ARMATURES POUTRES', 'type', 'APO', 3),
(62, 'ARMATURES POTEAUX', 'type', 'APT', 3),
(63, 'ARMATURES RADIERS', 'type', 'ARA', 3),
(64, 'ARMATURES', 'type', 'ARM', 3);

-- Plans --------------------------------------------------------

INSERT INTO `bgcp_plan_appro` (`id`, `bgc_nom_affaire`, `bgcp_code_chantier`, `bgcp_date_indice_`, `bgcp_date_reel_emission`, `bgcp_indice`, `bgcp_lib_indice`, `bgcp_statut`, `bgcp_titre1`, `exist_pdf`, `r_creation_date`, `r_creator_name`, `r_modify_date`, `spec_conb`, `spec_emetteur`, `spec_lot`, `spec_niveau`, `spec_numero`, `spec_phase`, `spec_type`, `spec_zone`, `code_chantier`) VALUES
(64, 'eDoc Web V4//eDoc WEB V4- Lot 1-Affaire 1', '123456', '2020-06-02 01:00:00', '2020-06-02 01:00:00', 'test', 'Première diffusion', 123, 'test123', '0', '2020-06-02 01:00:00', NULL, '2020-06-02 01:00:00', 'NB', 'ADA', 4, 'N1', 123, 'A', 'ADL', 'A', 3),
(67, 'eDoc Web V4//eDoc WEB V4- Lot 1-Affaire historisée', '123456', '2020-06-05 01:00:00', '2020-06-05 01:00:00', 'bouygues telecom', 'Première diffusion', 1234, 'Titre du Plan', '0', '2020-06-05 01:00:00', NULL, '2020-06-05 01:00:00', 'NB', 'AZE', 6, 'PN', 1234, 'ETU', 'APT', 'A3', 3),
(68, 'eDoc Web V4//eDoc WEB V4- Lot 2-Affaire 2', '123456', '2020-06-10 01:00:00', '2020-06-10 01:00:00', 'final', 'Première Diffusion', 123, 'Titre web', '0', '2020-06-10 01:00:00', NULL, '2020-06-10 01:00:00', 'NB', 'AZE', 4, 'N5', 123, 'DOE', 'AFO', 'A2', 3);

-- Dmr content --------------------------------------------------------

INSERT INTO `dmr_content` (`id`, `full_format`, `set_client`, `set_download`, `set_file`, `set_time`, `parent_id`) VALUES
(68, 'application/pdf', NULL, 'http://localhost:8080/downloadFile/archi.pdf', 'archi.pdf', NULL, 64),
(71, 'application/pdf', NULL, 'http://localhost:8080/downloadFile/pdf.pdf', 'pdf.pdf', NULL, 67),
(72, 'image/jpeg', NULL, 'http://localhost:8080/downloadFile/chine.jpg', 'chine.jpg', NULL, 68);



INSERT INTO `acteur_roles` (`acteur_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 3),
(5, 3),
(7, 1),
(8, 1),
(9, 3);


INSERT INTO `bgc__acteur_chantier` (`acteur_id`, `chantier_id`) VALUES
(1, 4),
(3, 1),
(3, 2),
(3, 3),
(3, 4),
(3, 5),
(3, 6),
(3, 7);