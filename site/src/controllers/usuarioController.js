var usuarioModel = require("../models/usuarioModel");
// var aquarioModel = require("../models/aquarioModel");

//req, res req ele recebe os dados e res ele manda pro banco de dados 
function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`);
                    // transforma JSON em String


                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json({
                            id: resultado[0].idusuario,
                            email: resultado[0].email,
                            nome: resultado[0].nome,
                            // senha: resultado[0].senha,
                            
                        });

                        if (resultado.length > 0) {
                          
                        }

                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var celular = req.body.celularServer;
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (celular == undefined) {
        res.status(400).send("Seu celular está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, celular, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}




    function dashboard(req, res){
        var usuario = req.params.idusuario
        usuarioModel.dashboard(usuario)
        .then(
          function (resultadodashboard){
            console.log(`resultado:${JSON.stringify(resultadodashboard)}`);
            if(resultadodashboard.length >= 0){
                console.log(resultadodashboard);
                res.status(200).json(resultadodashboard);
            } else {
                res.status(404).send("Sua lsita está vazia")
            }
          }
        )

    }












module.exports = {
    autenticar,
    cadastrar,
    dashboard
}