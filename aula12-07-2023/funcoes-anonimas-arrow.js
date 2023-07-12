// //exemplo de funcao nao anonima.
// function somar(n1, n2){  --> entrada
//   let soma = n1+ n2;     --> processamento
//   return soma;           --> saida
// }
// console.log(somar(1,2));


//callback -> função que passado como parâmetro de outra função
function RequisicaoParaBanco(callbackError, callbackSuccess){
  for( let i=0; i<1000000; i++){ //isso vai demorar alguns segundos
    if(i === 1000){
      callbackError();
    }
  }
  callbackSuccess();
}
function error(){
  console.log("erro: seu conteudo passou pelo 1000");
}
function success(){
  console.log("sucesso, seu conteudo chegou ate o final");
}
RequisicaoParaBanco(error,success);


function teste(){
  console.log("ola mundo!");
}
setTimeout(teste, 2000);   // executa a funcao quando o tempo chegar ao fim 
setInterval(teste, 10000); // executa a funcao no intervalo do tempo desejado (em ms)

//funcoes anonimas

setTimeout(function(){
  console.log("ola mundo");
},2000);

//arrow functions -> funcoes seta -> funcoes anonimas
// //funcao anonima 
// const funcao = function(){
//   ...
// }
// //funcao arrow
// const funcao2 = () => {
//   ...
// }

setTimeout(() => {
  console.log("tudo bom?");
});