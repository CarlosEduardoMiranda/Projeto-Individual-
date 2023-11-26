var database = require("../database/config");

/* function inseri_quiz(id){
  var query = `insert into quiz(id_usuario)values (${id})`;
   

  return database.executar(query);
} */

/* function verificar_quiz(id){
  var query = `select * from quiz where id_usuario = '${id}'`;

  return database.executar(query);
} */

function grafico(acertos, erros, fkusuario) {
  var query = `insert into quiz(acertos, erros, fkusuario)values (${acertos}, ${erros}, ${fkusuario})`;

  return database.executar(query);
}


module.exports = { grafico};
