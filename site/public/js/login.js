function login() {
  var emailVar = email.value;
  var senhaVar = senha.value;

  if (emailVar == "" || senhaVar == "") {
    alert(`Mensagem de erro para todos os campos em branco`);
    return false;
  } else {
    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar
      })
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
        alert("aaaaaaaaaaaaaaaaaaaa")
        resposta.json().then(json => {
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          

          setTimeout(function () {
            window.location = "./index.html";
          }, 1000); // apenas para exibir o loading

        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then(texto => {
          console.error(texto);
        });
      }

      //return false; // Mova o return false aqui para garantir que seja chamado dentro do bloco then
    }).catch(function (erro) {
      console.log(erro);
      return false; // Mova o return false aqui para garantir que seja chamado dentro do bloco catch
    });
  }
}


function entrar() {

  var emailVar = email.value;
  var senhaVar = senha.value;

  if (emailVar == "" || senhaVar == "") {
        alert ("Mensagem de erro para todos os campos em branco");
      return false;
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          emailServer: emailVar,
          senhaServer: senhaVar
      })
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")
      
      if (resposta.ok) {
        //console.log(resposta.json());

          resposta.json().then(json => {
              console.log(json);
              console.log(JSON.stringify(json));
              sessionStorage.EMAIL_USUARIO = json.email;
              sessionStorage.NOME_USUARIO = json.nome;
              sessionStorage.ID_USUARIO = json.id;

              setTimeout(function () {
                  window.location = "./dashboard/tela.html";
              }, 1000); // apenas para exibir o loading

          });

      } else {

          console.log("Houve um erro ao tentar realizar o login!");

          resposta.text().then(texto => {
              console.error(texto);
          });
      }

  }).catch(function (erro) {
      console.log(erro);
  })

  return false;
}
