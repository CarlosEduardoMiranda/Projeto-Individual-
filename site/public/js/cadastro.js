

function cadastrar(){
var nomeVar = input_nome.value;
var sobrenomeVar = input_sobrenome.value;
var emailVar = input_email.value;
var celularVar = input_celular.value;
var senhaVar = input_senha.value;
var confirmarsenhaVar = input_confirmarsenha.value;

if (
  nomeVar == "" ||
  sobrenomeVar == "" ||
  emailVar == "" ||
  celularVar == "" ||
  senhaVar == ""
) { 
    alert ("Mensagem de erro para todos os campos em branco");
} else {
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      sobrenomeServer: sobrenomeVar,
      emailServer: emailVar,
      celularServer: celularVar,
      senhaServer: senhaVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);
      setTimeout(() => {
        window.location = "./login.html";
      }, "1000");
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
   

}
}