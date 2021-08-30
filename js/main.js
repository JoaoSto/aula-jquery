function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#cep_resposta").html(response.cep);
            $("#logradouro").html(response.logradouro);

            console.log(response);

            // document.getElementById("localidade").innerHTML = response.logradouro;
        }
    })
}