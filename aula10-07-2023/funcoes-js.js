//uma funcao  ou Function   
let num = 3;
//funcoes que nao retornam nada ex -> console.log(num);
result = console.log(num);//undefined
console.log(result);
//funcoes que retornam algo Ex-> isNaN() => true / false;
result = isNaN(num);
console.log(result);

result = parseInt(12.4);
console.log(result);

//podemos usar funcoes que retornam algo em condicionais ex:
if(!isNaN(num)){
  console.log(num);
}
else{
  console.log("nao é um numero");
}
//conversao de int para float
result = parseFloat(40);
console.log(result);

//conversao de float para int
result = parseInt(20.5);
console.log(result);

//funcoes do number
let number= 3.45;
console.log(number);

console.log(number.toFixed(2));//retorna string;

console.log(typeof number.toFixed(2));

console.log(number.toString());

result = Number.isInteger(12.4);
console.log(result);

result = !Number.isInteger(12.4);
console.log(result);

//funcoes String;
const texto = 'Java Script';
console.log(texto.charAt(1));// recebe o caractere da posição

console.log(texto.concat(" é muito bacana."));// concatena a string;

console.log(texto.charAt(texto.length-1));

console.log(texto.trim()); // retira o espaço do inicio e do fim da string;

console.log(texto.replace('a','')); //substitui um caractere escrito na string;
console.log(texto.replaceAll('a','')); //substitui todos caracteres escrito na string;

console.log(texto.includes("Java")); // verifica se o texto esta incluso;

console.log(texto.toLowerCase());//transforma o texto em minusculo
console.log(texto.toUpperCase());//transforma o texto em maiusculo

console.log(texto.toLowerCase().includes("java")); // podemos concatenar os metodos(funcoes)

//Math -> bilioteca de matematica
console.log(Math.ceil(14.23));
console.log(Math.floor(36.945503));
console.log(Math.round(2.7893));
console.log(Math.sqrt(625));
console.log(Math.abs(-8));
console.log(Math.floor(Math.random() * 100+ 1));
