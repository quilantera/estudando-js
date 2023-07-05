const num1 = 5;
const num2 = 8;
const num3 = 4.5;

/*
  Operadores Aritméticos
    + Adição
    -Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % Resto da divisão ( modulo ))
*/

let result = num1 + num2; //13
console.log(result);

result = num1 - num2;
console.log(result); // -3

result = num1 * num2; // 40
console.log(result);

result = num1 / num2; // 0.625
console.log(result);

result = num1 % num2; 
console.log(result);

result = num1 ** num2;
console.log(result);

result = ((num1 + num2) * 12 ) / 6;
console.log(result);

//operador de atribuição
//  Operadores (+=, -=, *=, /=, **=, %=)
result += 30; 
console.log(result);

result -= 20;
console.log(result);

result *= 2;
console.log(result);

result %= 11;
console.log(result);

result /= 3;
console.log(result);

result **=2;
console.log(result);

// Operadores de incremento e decremento

/*
  a++ -> Pós incremento
  ++a -> Pré incremento
  a-- -> Pós decremento
  a++ -> Pré decremento
*/  
let a=0;
console.log(a);

console.log(a++);
console.log(a);

a--;
console.log(a--);
console.log(++a);


//Operadores Lógicos
/*
  <   Menor Que
  >   Maior Que
  <=  Menor Igual
  >=  Maior Igual
  ==  Igual
  !=  Diferente
  === Exatamente igual
  !== Exatamente diferente
*/ 
const n1 = 9;
const n2 = 11;
const n3 = 9;
const n4 = 13;

result = n1 < n2;
console.log(result);// se n1 < n2 = verdadeiro

result = "Gustavo " == "Gustavo"
console.log(result);// true;

result = (5+10) === 15;
console.log(result);

result = 5 == "5";
console.log(result);

//Operadores logicos
/*
  && -> E
  || -> OU
  !  -> NÃO
  ! > && > ||
*/

console.log(true);
console.log(false);

//======== && ===========

console.log(true  && true);
console.log(true  && false);
console.log(false && false);
console.log(true  && false && true);

//======== || ===========
console.log(true  || true);
console.log(true  || false);
console.log(false || false);
console.log(true  || false  || true);


console.log(!true);
console.log(!false);

console.log(!true || !false);
console.log(true || true && false);

// Exemplos de condicionais

let idade = 30;
console.log((idade>= 18) && (idade <= 65));

//Operador Ternário

let mensagem;
let nota = 9;
mensagem = (nota>= 7) ? "Aprovado " : "Reprovado";
console.log(mensagem);