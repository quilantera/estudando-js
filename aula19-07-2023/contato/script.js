let email = document.querySelector("#email");
let campos = document.querySelectorAll("input, textarea");

function validarEmail(){
    const text= email.value;

    if(text.includes("@")){
        email.style.borderColor= "green";
    }else {
        email.style.borderColor = "red";
    }
}
function validarCamposVazios(evento){
    const campo = evento.target;// elemento que acionou o evento
    const valor = campo.value;
    if(valor==''){
        campo.style.borderColor = "red";
    }else{
        campo.style.borderColor= "green";
    }
}

function validarCampo2(evento){
    const campo = evento.target;// elemento que acionou o evento
    campo.style.borderColor= "#3333";
}
 email.addEventListener("input", validarEmail);

for(let campo of campos){
    campo.addEventListener("input", validarCamposVazios); //
    campo.addEventListener("blur", validarCampo2);
}