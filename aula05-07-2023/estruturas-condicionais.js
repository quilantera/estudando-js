//Estruturas Condicionais;
// condição -> calculo lógico;
//if - se ;
// const altura = 1.59;

// if(altura >= 1.60){
//   console.log("Entrou no brinquedo");
// } else{
//   console.log("Não Entrou no brinquedo");
// }
// let nivelIngles =1; // 1- iniciante , 2- básico, 3- intermediário, 4- avançado, 5- fluente
// if(nivelIngles==1){
//   console.log("Nível Iniciante");
// }
// else if(nivelIngles==2){
//   console.log("Nível Básico");
// }
// else if(nivelIngles==3){
//   console.log("Nível intermediário");
// }
// else if(nivelIngles==4){
//   console.log("Nível Avançado");
// }else{
//   console.log("Fluente");
// }
// let conseguiuFazerCompra = false;
// let saldo = 100;

// if(saldo > 200){
//   console.log("fez a compra");
//   conseguiuFazerCompra = true;
// }else{
//   console.log("saldo insuficiente");
//   conseguiuFazerCompra = false;
// }

// console.log("conseguiuFazerCompra");

let num1 = 9, num2 = 6, num3 = 8;
let result1, result2, result3;
if(num1 > num2) result1 = true;
else result1 = false;
if(num2> num3) result2 = true;
else result2 = false;
if(num1> num3) result3 = true;
else result3 = false
if( result1){
    if(result2){
      if(result3){
        console.log(num1+">"+num2+">"+num3);
      }
      else console.log(num3+">"+num1+">"+num2);
    }else if(result3){
      console.log(num1+">"+num3+">"+num2);
    }else console.log(num3+">"+num2+">"+num1);
} else{
  if(result2){
    if(result3){
      console.log(num2+">"+num1+">"+num3);
    }
    else console.log(num3+">"+num2+">"+num1);
  }else if(result3){
    console.log(num2+">"+num3+">"+num1);
  }else console.log(num3+">"+num2+">"+num1);
}