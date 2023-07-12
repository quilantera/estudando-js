function CalcularQntLetrasA( palavra ){
  palavra = palavra.toLowerCase();
  let contador = 0;
  for (i =0; i<palavra.length; i++){
    if(palavra.charAt(i) == 'a'){
      contador++;
    }
  }
  return("total de letras A: "+contador);
}

function CalcularRaizQuadrada(numero){
  if(Number.isInteger(Math.sqrt(numero))){
    return("A Raiz Quadrada é :"+numero.sqrt())
  }
  return("não existe raiz quadrada definida");
}

function ArredondarNumero(numero){
    numero = Math.round(numero);
    return("numero arrendondado: "+numero);
}

function calcularValorAbsoluto(numero){
    numero = Math.abs(numero);
    return("Valor Absoluto: "+numero);
}

function GerarValorAleatorio(){
  const valor = Math.floor( Math.random() * (20 - 10) + 10);

  return("numero aleatório: "+valor);
}
function ArredondarNumeroPorQntCasas(numero,casasDecimais){
    const numeroArredondado= numero.toFixed(casasDecimais);
    return ("numero arredondado: "+numeroArredondado);
}
function ConverterStringParaFLoatEArredondar(numero){
  numero = Number.parseInt( Number.parseFloat(numero));
  return("string convertida e arredondada: " + numero);
}

function VerificarSeONumeroEFinitoOuNaN(numero){
  if(!isNaN(numero)){
    if(isFinite(numero)){
      return("seu numero é finito");
    }else{
      return("seu numero é infinito");
    }
  } else {
    return("nao é um numero");
  }
}
function VerificarSeContemSubstringBA(string){
    return (string.includes('ba') ? "a string contem AB" : "a string nao contem AB")
}
function ConverterMaiusculasEmMinusculas(string){
  string = string.toLowerCase();
  return ("palavra convertida: " + string);
}
function ExtrairParteDaString(string, intervalo ){
  let substring ='';
  for(i = intervalo[0]; i <= intervalo[1]; i++){
    substring += string.charAt(i);
  }
  return("Substring resultante: " + substring);
}
function SubstituirOcorrencias( string, substring, substituta){
    string = string.replaceAll(substring,substituta);
    return("palavra resultante: " + string);
}
function RemoverEspacos(string){
  string = string.trim();
  return("palavra sem espaços:" +string);
}
function inverterString(string){
  let stringInvertida = "";
  for ( let i = string.length-1; i>=0; i--){
    stringInvertida = stringInvertida + string.charAt(i);
  }
  return("palavra invertida: " + stringInvertida);
}

console.log(CalcularQntLetrasA("batata"));
console.log(CalcularRaizQuadrada(23));
console.log(ArredondarNumero(3.54667));
console.log(calcularValorAbsoluto(-10));
console.log(GerarValorAleatorio());
console.log(ArredondarNumeroPorQntCasas(1.23456,3));
console.log(ConverterStringParaFLoatEArredondar("15.34"));
console.log(VerificarSeONumeroEFinitoOuNaN(0));
console.log(VerificarSeContemSubstringBA("tabata"));
console.log(ConverterMaiusculasEmMinusculas("NAAO"));
console.log(ExtrairParteDaString("Gustavo", [1,3]));
console.log(SubstituirOcorrencias( "comida japonesa", "ida", "ado"));
console.log(RemoverEspacos(" eu tenho espaços "));
console.log(inverterString("string"));