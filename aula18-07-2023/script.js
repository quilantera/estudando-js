//window.document -> Objeto que representa o documento HTML
//document.getElementById() ->Busca o id do elemento
//document.getElementsByClassName() -> Busca todos os elementos por class
//document.getElementByTagName()-> Busca todos os elementos com a tag
//document.getSelector() -> Busca todos os elementos com base por seu seletor css
//window.document.getElementById()
let titulo = document.getElementById("titulo"); // é muito utilizado
//console.log(titulo);
let paragrafos = document.getElementsByClassName("paragrafo");
console.log(paragrafos);
paragrafos[0].hidden = true;
let negritos = document.getElementsByTagName("b");
console.log(negritos);
let inputEmail = document.querySelector("input[type=email]");
let negritosParagrafos = document.querySelector("p b"); // é muito aplicado hoje em dia
// let negritosParagrafos = document.querySelectorAll("p b"); // busca todos
// titulo.align = "center";
// titulo.title = "titulo principal";
// titulo.style.color ="red";  
// titulo.style.width='20%';
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "hoje na aula de <b>JS</b> conversamos sobre DOM";
console.log(titulo.innerText);// conteudo do elemento
console.log(paragrafo.innerHTML);

let caixa = document.querySelector('#info');
caixa.classList.add('error');
caixa.classList.remove('mensagem');
caixa.classList.toggle('warning');
caixa.classList.toggle('warning');
console.log(caixa);
caixa.innerHTML;    