function ImprimirNumerosDe1a20(){
  for(let numero =1; numero <=20; numero ++){
    console.log(numero);
  }
}
function FibonacciAte10Termo(){
  let ultimo = 1;
  let penultimo = 0;
  let i = 0;
  while ( i <= 10) {
    console.log("termo  :"+i+ "numero :"+penultimo );
    let soma = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = soma;
    i++;
  }
}

function CalculeASomaDosImpares(numero){
  let soma = 0;
  for(let i = 0; i < numero; i++){
    if(i % 2 !== 0){
      soma += i;
    }
  }
  console.log(soma);
}

function TabuadaDaSoma(numero){
  for(let i=0; i <= 10; i++){
    console.log(numero + " + " + i + " = " + (numero+i));
  }
}
function MultiplosDe7(){
  for (let i = 0; i < 100; i++){
    if(!(i % 7 === 0 && i != 7) ){
      continue;
    }
    console.log(i);
  }
}

function trianguloRetangulo(tamanho){
  let linha ='';
  for( let i = 0; i <=tamanho; i++){
    linha += " * "
    console.log(linha);
  }
}


ImprimirNumerosDe1a20();
console.log("-----------------------");
FibonacciAte10Termo();
console.log("-----------------------");
CalculeASomaDosImpares(100);
console.log("-----------------------");
TabuadaDaSoma(5);
console.log("-----------------------");
MultiplosDe7();
console.log("-----------------------");
trianguloRetangulo(10);