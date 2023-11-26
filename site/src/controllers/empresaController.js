var quizmodel = require("../models/empresaModel");

function analise(req, res){
  var acertos = req.body.acertos
  var erros = req.body.erros
  var fkusuario = req.body.fkusuario
  quizmodel.grafico(acertos, erros, fkusuario)
  .then( 
    function(resultado){
      res.json(resultado)
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
