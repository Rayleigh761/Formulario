function valida(){
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var email = document.getElementById('email').value
    var dev = document.getElementById('dev').value

    if(nome.length >1){
        console.log("Nome: " + nome 
        + " Sobrenome: " + sobrenome 
        + " Email: " + email
        + " dev: " + dev )
    }
}

function validaCampo(){
    if(document.getElementById('nome').value == ""){
        alert("Preencha seu nome!")
        return false;
    } if(document.getElementById('sobrenome').value == ""){
        alert("Preencha seu Sobrenome!")
        return false;
    }if(document.getElementById('email').value == ""){
    alert("Preencha seu email!")
    return false;
    }if(document.getElementById('dev').value == "" ){
    alert("Preencha o campo desenvolvedor")
    return false;  
    }

}  

