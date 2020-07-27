//JAVAESCRIPT DA PÁGINA DE LOGIN

var usuario = document.querySelector('#login');
var senha = document.querySelector('#SENHA');
var botao = document.querySelector('#botao');

botao.addEventListener('click', function (evento){
    evento.preventDefault();

    var nome = usuario.value.toLowerCase();
    var password = senha.value.toLowerCase();

    if(nome == 'lucinda'  && password == 'eusouumasenha'){
        window.location.replace('../index.html');

        // console.log(usuario.value);
    }
    
    if(nome == 'comesushi' && password == 'empresa'){
        window.location.replace('../index.html');
    }
    else{
        alert("Se cadastre");
    }
}
)
