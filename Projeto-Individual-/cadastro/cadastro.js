

function cadastrar(){
var nomeVar = firstname.value;
var sobrenomeVar = lastname.value;
var emailVar = email.value;
var celularVar = number.value;
var senhaVar = password.value;
var confirmacaoSenhaVar = confirmpassword.value;

if (
  nomeVar == "" ||
  sobrenomeVar == "" ||
  emailVar == "" ||
  celularVar == "" ||
  senhaVar == "" ||
  confirmacaoSenhaVar == ""
) {
  cardErro.style.display = "block";
  mensagem_erro.innerHTML =
    "(Mensagem de erro para todos os campos em branco)";


}
}