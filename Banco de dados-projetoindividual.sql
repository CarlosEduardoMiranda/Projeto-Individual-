create database projetoindividual;
use projetoindividual;

create table usuario (
    idusuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(45),
    celular CHAR(11),
    senha VARCHAR(45),
    confirmarsenha VARCHAR(45)
);

drop database projetoindividual;

CREATE TABLE quiz (
    idquiz INT PRIMARY KEY auto_increment,
    pontos int,
    aproveitamento int,
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(idusuario)
);


CREATE TABLE tentativa (
    idtentativa INT PRIMARY KEY auto_increment,
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


        INSERT INTO usuario (nome, sobrenome, email, celular, senha, confirmarsenha) VALUES ('${nome}', '${sobrenome}','${email}','${celular}', '${senha}', '${confirmarsenha}');
        
        
        INSERT INTO usuario (nome, sobrenome, email, celular, senha, confirmarsenha) VALUES ('aaaa', 'aaaa','cembarosa@hotmail.com','11111111111', '1234', '1234');

select * from usuario;




You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '"' at line 1