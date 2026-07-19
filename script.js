function criarConta(){

let nome = document.getElementById("nome").value;


if(nome==""){

alert("Digite um nome");

return;

}


localStorage.setItem("usuario", nome);


window.location.href="home.html";

}



function login(){

let usuario = localStorage.getItem("usuario");


if(usuario){

window.location.href="home.html";

}

else{

alert("Nenhuma conta criada");

}

}




window.onload=function(){

let nome = localStorage.getItem("usuario");


let campo=document.getElementById("nomeUsuario");


if(campo && nome){

campo.innerHTML=nome;

}

}





function abrirAvatar(){

window.location.href="avatar.html";

}




function selecionarAvatar(nome){

localStorage.setItem("avatar",nome);

alert("Avatar escolhido: "+nome);

window.location.href="home.html";

}



function voltarHome(){

window.location.href="home.html";

}