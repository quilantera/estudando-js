const nums = [6,1,4,7,3,4,0,8,4,5];

console.log(nums);

nums.push(10); //adiciona um elemento ao final do vetor 
console.log(nums);

nums.unshift(10); // adiciona um elemento ao inicio do vetor
console.log(nums);

nums.pop(); //remove um elemento no final do vetor
console.log(nums);

nums.shift(); //remove um elemento no início do vetor

let juncao = nums.join(", "); //vai fazer a junção dos elementos do vetor;
console.log(juncao);

let vetor2 = [ 5, 6, 7, 8, 9];
let vetor3 = nums.concat(vetor2); // gera um vetor novo com os elementos dos dois vetores concatenados.
console.log(vetor3);

console.log(nums.sort());// ordena os elementos em ordem alfabética(modifica o vetor);

console.log(nums.reverse());// ordena os elementos em ordem reversa (modifica o vetor);

console.log(nums.includes(7));// verifica se contem o elemento dentro (boolean)

console.log(nums.fill(9,5)); // preenche todos os valores a partir de um intervalo 
// console.log(nums.fill(7,2,4));

console.log(nums.indexOf(5)); // retorna o indice do primeiro elemento encontrado no vetor;

console.log(nums.splice(6,3)); //remove elementos do meio do vetor  (modifica o vetor)
console.log(nums);
console.log(nums.slice(2,5)); //recorta um vetor do indice 2 de 5-1(nao modifica);

nums.forEach(num => console.log(num));// itera os elementos do vetor;

console.log(nums.reduce((soma,numero) => soma + numero ));// efetua a redução dos valores do vetor de um valor acumulado;

console.log(nums.map(num => num * 2));// multiplica todos os valores por 2 e gere um novo valor

console.log(nums.find(num =>(num > 8)));// retorna o primero valor correspondente a condição

console.log(nums.filter(num => (num > 5))); // retorna todos os valores pertencentes a condição

const nomesSobrenomes = [
    'João Silva',
    'Maria Santos',
    'Pedro Oliveira',
    'Ana Costa',
    'Carlos Pereira',
    'Luciana Almeida',
    'Fernando Costa',
    'Camila Rodrigues',
    'Rafaela Ferreira',
    'Gustavo Costa'
  ];
console.log(nomesSobrenomes.find(nome=> (nome.includes('Almeida')))); // podemos fazer com string
console.log(nomesSobrenomes.filter(nome=> (nome.includes('Costa'))));
console.log(nomesSobrenomes.filter(nome=> !(nome.includes('Ferreira'))));

// String como vetor
let nome = `Gustavo Quilante Azevedo`;
let idade = 24;
let mensagem = `Nome: ${nome} \n Idade: ${idade}`; // interpolação
console.log(mensagem);

console.log(nome[2]); // imprime a letra da posicao 2 na string;

console.log("A pessoa com nome \"Vitor\" está te esperando na recepção");
