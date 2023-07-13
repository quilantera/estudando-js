// aula de vetores
let aula = ['js','css','html','banco']; //array de strings
let notas =[5.2, 8.2, 4.7, 7.0]; // array de numbers
let pessoa = ['Gustavo', 24, 'estudante', true]; // array misto (má pratica)

console.log(typeof aula);
console.log(typeof notas);
console.log(typeof pessoa);

console.log( aula )
console.log( aula.length );
console.log( aula[1] );
console.log ( notas[0] * notas[1] );

for (i =0  ; i < aula.length ; i++){ //intera o i até o final do array
  console.log(aula[i]);//imprime o valor da posicao i no array
}
let operacoes = [ // vetor de funções
  (n1,n2) => n1 + n2,
  (n1,n2) => n1 * n2,
  (n1,n2) => n1 - n2,
  (n1,n2) => n1 / n2
]
//console.log(operacoes[0](3,4)); executa a funcao;

for (let nota of notas){//for each
  console.log(nota)
}