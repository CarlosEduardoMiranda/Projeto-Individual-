

function cadastrar(){
var firstname = input_firstname.value;
var lastname = input_lastname.value;
var email = input_email.value;
var number = input_number.value;
var password = input_password.value;
var confirmpassword = input_confirmpassword.value;

if (
  firstname == "" ||
  lastname == "" ||
  email == "" ||
  number == "" ||
  password == "" ||
  confirmpassword == ""
) { 
  cardErro.style.display = "block";
  mensagem_erro.innerHTML =
    "(Mensagem de erro para todos os campos em branco)";


}
}