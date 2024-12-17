function buscaCep() {
    let cep = document.getElementById('cep').value;
    if(cep !== '') {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        ///TRATAR A RESPOSTA DA REQUISIÇÃO////
        req.onload = function() {
            if(req.status === 200) {
                let endereco = JSON.parse(req.response);
                document.getElementById('enderecotxt').value = endereco.street;
                document.getElementById('bairro').value = endereco.neighborhood;
            }
            else if (req.status === 404) {
                alert('CEP Inválido.')
            }
            else {
                alert("Erro");
            }
        }
    }
}

window.onload = function() {
    let cep = document.getElementById('cep');
    cep.addEventListener('blur',buscaCep);
}