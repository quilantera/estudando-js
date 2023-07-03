//comentário linha única
/* comentário Linha múltipla

Chrome -> V8 -> Interpretador de JS
Node -> V8 + NPM (Node Package Manager)*/ 
console.log('escrever no terminal');
console.log(5);

let nome;// cria a variável
nome= "Gustavo Quilante"; // atribui um valor para variável(string)
console.log(nome);  //imprimi  o valor da variável

let idade;
idade = 24; //atribui um valor para variável (numero)
console.log(idade);

let endereco = "rua guatemala, 334";// declaracao da variavel e atribuicao do valor;
console.log(endereco);

let lembrarMe = true; // representa um valor logico (true e false);
console.log(lembrarMe);

nome = "Gustavo Q Azevedo (variavel modificada)";// substitui o valor da variavel Nome;
console.log(nome);

const PI = 3.14; // const -> indica a criacao de uma constante. 
console.log(PI);

// PI  = 14;  -> ERROR: a constante nao pode ser alterado;


/* Tipagem Estatica / Tipagem Dinamica
  Tipagem Estática -> Definicao de um tipo a cada variavel (c,java, Ts, C++) 
  Tipagem Dinamica -> O tipo da variavel é definido de acordo com o seu valor ( JS, Python);
*/
let variavel = 90; //(number);
variavel = "texto "; //(string);
variavel = true; //(boolean);