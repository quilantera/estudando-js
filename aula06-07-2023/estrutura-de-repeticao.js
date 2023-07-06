// Estruturas de Repetições

for(let numero = 0; numero < 10; numero++){
  console.log(numero);
}
console.log("***********************")
// incrementa o valor de numero em duas unidades
for(let numero = 0; numero < 10; numero+=2){
  console.log(numero);
}
//contagem decrescente 

for (let numero = 10; numero >= 0; numero --){
  console.log(numero);
}

//while 
let numero1 = 0;
while (numero1 <= 17){
  console.log("repetiu! SoulCode")
  numero1++;
}
//for  --> Uma quantidade de repetições determinadas;
//while -> Uma quantidade de repetições nao determinadas;

let num =80;
let ePrimo = true;

for(let i = 2; i < parseInt(num/2)+1; i++){
  if(num%i == 0){
    ePrimo = false;
  }
}