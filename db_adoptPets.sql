CREATE TABLE `tb_endereco` (
  `UF` varchar(2) NOT NULL,
  `Cidade` varchar(30) NOT NULL,
  `Logradouro` varchar(45) DEFAULT NULL,
  `Numero` smallint NOT NULL,
  `Complemento` varchar(20) DEFAULT NULL,
  `CEP` varchar(10) DEFAULT NULL,
  `id_endereco` smallint NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_endereco`)
) 

CREATE TABLE `tb_pet` (
  `Id_pet` smallint NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) NOT NULL,
  `Idade` tinyint DEFAULT NULL,
  `Raca` varchar(45) DEFAULT NULL,
  `Peso` float DEFAULT NULL,
  `Vacina` tinyint(1) NOT NULL,
  `Castracao` tinyint(1) NOT NULL,
  `Microchip` tinyint(1) NOT NULL,
  `Porte` varchar(20) NOT NULL,
  `Id_Imagem` smallint DEFAULT NULL,
  `Is_adopted` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id_pet`),
  KEY `fk_Id_Imagem` (`Id_Imagem`),
  CONSTRAINT `fk_Id_Imagem` FOREIGN KEY (`Id_Imagem`) REFERENCES `tb_pet_imagem` (`Id_Imagem`)
) 

CREATE TABLE `tb_pet_imagem` (
  `Id_Imagem` smallint NOT NULL AUTO_INCREMENT,
  `URL_Imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id_Imagem`)
) 

CREATE TABLE `tb_usuario` (
  `ID_Usuario` smallint NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) NOT NULL,
  `CPF` varchar(11) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Contato` varchar(45) NOT NULL,
  `Senha` varchar(45) NOT NULL,
  `id_endereco` smallint DEFAULT NULL,
  `Id_pet` smallint DEFAULT NULL,
  PRIMARY KEY (`ID_Usuario`),
  KEY `fk_id_endereco` (`id_endereco`),
  KEY `fk_Id_pet` (`Id_pet`),
  CONSTRAINT `fk_id_endereco` FOREIGN KEY (`id_endereco`) REFERENCES `tb_endereco` (`id_endereco`),
  CONSTRAINT `fk_Id_pet` FOREIGN KEY (`Id_pet`) REFERENCES `tb_pet` (`Id_pet`)
) 
