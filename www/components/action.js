window.onload = function(){

    const pesquisar = document.querySelector("#pesquisar");
    const nome = document.querySelector("#nome");
    const valor = document.querySelector("#valor");

    var url = "https://profrodolfo.com.br/projeto/";

    fetch(url)
    .then(resposta => {
        return resposta.json();
    })
    .then(function (json){
        var d = document.querySelector('.dados');
        var texto = '';
        for(i = 0; i < json.length; i++){
            texto += '<div class="row">';
            texto += '<div class="col-5">';
            texto += '<img class="img-fluid" src="https://profrodolfo.com.br/projeto/'+json[i].foto+'">';
            texto += '</div>';
            texto += '<div class="col-7">';
            texto += '<h1>'+json[i].nome+'</h1>';
            texto += '<h3>'+json[i].valor+'</h3>';
            texto += '</div>';
            texto += '</div>';
            texto += '<br>';
        }
        d.innerHTML += texto;
    })
    .catch();
    
}