// desenhe um quadrado de # usando for
const tamanho = 7;

// for (let linha = 0; linha < tamanho; linha++) {
//   for(let coluna = 0; coluna < tamanho; coluna++) {
//     process.stdout.write("# ")
//   }
//   console.log('');
// }
// let linhas= '';
// for( let i = 0 ; i < tamanho; i++ ) {
//   linhas += '# '
// }
// for ( let j = 0 ; j < tamanho; j++ ) {
//   console.log(linhas);
// }

// triangulo com for

for( let i = 1 ; i <= 7; i++){
  let lin = '';
    for(j = 0 ; j < i; j++){
      lin += '# ';
    }
    console.log(lin);
}
// Break e continue;
for( let i = 1 ; i <= 20; i++){
  if(!(i % 2 == 0)){
    continue;//ignora o looping atual e vai para o proximo looping
  }
  console.log(i);
}
// encontre o primeiro numero multiplo de oito 

for( let i=1; i<=100; i++ ){
  if( (i % 2 === 0) && (i != 8)){
    console.log(i);
    break;
  }
}