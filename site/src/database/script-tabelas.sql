-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database projetoindividual;
use projetoindividual;

create table usuario (
    idusuario INT PRIMARY KEY,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(45),
    celular CHAR(11),
    senha VARCHAR(45),
    confirmarsenha VARCHAR(45)
);

CREATE TABLE quiz (
    idquiz INT PRIMARY KEY,
    pontos int,
    aproveitamento int,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(idusuario)
);


CREATE TABLE tentativa (
    idtentativa INT PRIMARY KEY,
    acertos VARCHAR(45),
    erros VARCHAR(45),
    fk_quiz INT,
    FOREIGN KEY (fk_quiz) REFERENCES quiz(idquiz)
);

INSERT INTO usuario (idusuario, nome, sobrenome, email, celular, senha, confirmarsenha)
VALUES
(1, 'Giovanna', 'França', 'giovanna.franca@sptech.school', '11111111111', 'abcd1234', 'abcd1234');

INSERT INTO quiz (idquiz, pontos, aproveitamento, id_usuario)
VALUES
(1, 80, '100', 1);

INSERT INTO tentativa (idtentativa, acertos, erros, fk_quiz)
VALUES
(1, '10', '0', 1);



/*
comandos para criar usuário em banco de dados azure, sqlserver,
com permissão de insert + update + delete + select
*/

CREATE USER [usuarioParaAPIWebDataViz_datawriter_datareader]
WITH PASSWORD = '#Gf_senhaParaAPIWebDataViz',
DEFAULT_SCHEMA = dbo;

EXEC sys.sp_addrolemember @rolename = N'db_datawriter',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';

EXEC sys.sp_addrolemember @rolename = N'db_datareader',
@membername = N'usuarioParaAPIWebDataViz_datawriter_datareader';
