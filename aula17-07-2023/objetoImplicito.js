const pessoa = {
    nome: 'Aline',
    idade: 24,
    email: 'aline@gmail.com',
    foto: 'https://bancodefotos.com/7543563456',
    enabled: true
}
console.log(pessoa);

const vetor = ['Gabriel', 21, "gabriel@gmail.com"];
console.log(vetor[0]);
const objeto = {nome: "Giovanna", idade:21, email: "gabriel@gmail.com"};
console.log(objeto["nome"]);

// forma incorreta de copiar um objeto 
// let objeto1 = {nome: "Gustavo" ,curso:"JavaScript"};
// objeto2 = objeto1;// nao é feito uma copia do objeto, e sim da referencia dele  na memoria.
// objeto1.nome = "Gustavo Quilante";
// console.log(objeto1);
// console.log(objeto2);

//forma correta de copiar um objeto -> Operador spread "..."

let objeto1 = {nome: "Gustavo" ,curso:"JavaScript"};
let objeto2 = {... objeto1}; //copia os elementos do objeto e "espalhar" no objeto2
objeto1.nome = "Gustavo Quilante";
console.log(objeto1);
console.log(objeto2);

delete objeto1.nome;
console.log(objeto1);