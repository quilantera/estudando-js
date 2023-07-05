/*Escreva um programa que verifique se um número é par ou ímpar.
Faça um programa que calcule a média aritmética de três números.
Escreva um programa que determine se um número é divisível por 3 e por 5 ao mesmo tempo.
Faça um programa que calcule a área de um triângulo com base e altura.
Escreva um programa que converta uma temperatura de graus Celsius para Fahrenheit.
Faça um programa que calcule o delta das funções de segundo grau.
Faça um programa que retorna se uma determinada pessoa pode dirigir, baseado na sua idade (utilize operador ternário).*/

function ParOuImpar(num){
  return((num % 2 === 0)? "par" : "impar")
}

function MediaAritmética(num1,num2,num3){
  return((num1 + num2 + num3)/ 3);
}

function DivisivelPor3e5(num){
  return(( num % 5 === 0) && ( num % 3 === 0));
}

function AreaDoTriangulo(base,altura){
  return(( base * altura) / 2);
}

function ConverterTempCelsius_Fahrenheit(celsius){
  return((celsius * 1.8) + 32)
}

function CalcularDeltaDaFuncaoDe2Grau(A,B,C){
  return((B ** 2) - ((4 * A) * C))
}

function PessoaPodeDirigir(idade){
  return((idade >=18)? "pode dirigir": "nao pode dirigir");
}


console.log(ParOuImpar(3));
console.log(MediaAritmética(10,4,3));
console.log(DivisivelPor3e5(15));
console.log(AreaDoTriangulo(10, 20));
console.log(ConverterTempCelsius_Fahrenheit(24));
console.log(CalcularDeltaDaFuncaoDe2Grau(4,8,2));
console.log(PessoaPodeDirigir(19));