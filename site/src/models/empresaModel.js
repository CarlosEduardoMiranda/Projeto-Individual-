var database = require("../database/config");

function inseri_quiz(id){
  var query = `insert into quiz(id_usuario)values (${id})`;
   

  return database.executar(query);
}

function verificar_quiz(id){
  var query = `select * from quiz where id_usuario = '${id}'`;

  return database.executar(query);
}

function grafico(acertos, erros, fkquiz) {
  var query = `insert into tentativa(acertos, erros, fk_quiz)values (${acertos}, ${erros}, ${fkquiz})`;

  return database.executar(query);
}


module.exports = { grafico, verificar_quiz, inseri_quiz};
