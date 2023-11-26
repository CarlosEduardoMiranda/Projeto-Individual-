function gerargrafico(resposta){
    var listagrafico = []
    var listateste = []
    var listaerros = []
    for(var i = 0; i < resposta.length; i++){
        var acertos = resposta[i].acertos
        var erros = resposta[i].erros
        listateste.push(i+1)
        listagrafico.push(acertos)
        listaerros.push(erros)
        console.log(acertos)
        console.log(listagrafico)
    }
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: listateste,
            datasets: [{
                label: 'Acertos por Tentativas',
                backgroundColor: "black",
                data: listagrafico,
                borderWidth: 1
              }]
                 
        },options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: listateste,
            datasets: [{
                label: 'Erros por Tentativas',
                backgroundColor: "gold",
                data: listaerros,
                borderWidth: 1
              }]
                 
        },options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

}

fetch(`/usuarios/dashboard/${sessionStorage.ID_USUARIO}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
})
.then(function(resposta){
    if(resposta.ok){
        console.log(resposta);
        resposta.json().then(json => {
            gerargrafico(json)
            console.log(json);
            console.log(JSON.stringify(json))
        })
    }
}
)