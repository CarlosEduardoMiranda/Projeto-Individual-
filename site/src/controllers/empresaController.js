var quizmodel = require("../models/empresaModel");

function analise(req, res){
  var acertos = req.body.acertos
  var erros = req.body.erros
  var idusuario = req.body.id_usuario
  quizmodel.verificar_quiz(idusuario)
  .then( 
    function(resultado){
      if(resultado.length == 0){
        quizmodel.inseri_quiz(idusuario)
        analise(req, res)
      } 
      quizmodel.grafico(acertos, erros, resultado[0].idquiz)
    })
    .catch(
      function(erro){
        console.log(erro)
        console.log(`Houve um erro na hora de realizar ${erro.sqlMessage}`)
      })
  
}

module.exports = {
  analise,
}
