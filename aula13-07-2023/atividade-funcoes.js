function MediaPonderada(num1,num2,num3){

  return ( (num1*2 + num2*3 + num3*4) % 9);
}

function TotalDeDivisores(num){
  let cont=0;
  for(let i=0;i<parseInt(num / 2 + 1 );i++){
    if( i % num === 0) cont++;
  }
  return cont;
}

function SomaDigitos ( num ){
  soma = 0;
  while( num >0){
    soma += num%10;
    num = num/10;
  }
  return soma;
}

function InverterTexto(texto){
  let textoInvertido = '';
  for(let i = texto.length-1; i >= 0; i--){
    textoInvertido += texto.charAt(i);
  }
  return textoInvertido;
}

function velocidadeMedia(distancia, tempo){
  return(distancia / tempo);
}

function removeVogais(palavra){
  const vogais =  ["a","A","e","E","i","I","o","O","u","U"];
  for(let i in vogais){
    palavra = palavra.replaceAll(vogais[i], "");
  }
  return palavra;
}


function converteDecimalBinario(decimal,inverterBinario){
  let binario = '';
  
  while( decimal > 0){
    binario +=  decimal % 2;
    decimal = Math.floor(decimal / 2);
  }
  binario = inverterBinario(binario);
  return binario;
}

console.log(converteDecimalBinario(12321,InverterTexto));

