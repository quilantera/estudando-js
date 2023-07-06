function VerificaOValorDoNumero(numero) {
  if (numero > 0) {
    return (`seu numero ${numero} é positivo`);
  }
  else if (numero < 0) {
    return (`numero ${numero} é negativo`);
  } else if (numero === 0) {
    return (`numero igual ${numero} é a zero`);
  }
  return ("nao correspondido");
}

function VerificaSeEhMenorDeIdade(idade) {
  if(idade <0 || idade > 150) return ("nao existe esta idade");
  if (idade >= 18) {
    return (`a pessoa é maior de idade e tem ${idade} anos`);
  }
  else if (idade <= 18) {
    return (`a pessoa é menor de idade e tem ${idade} anos`);
  }
  return ("nao correspondido");
}

function QualNumeroMaior(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 >= num3) {
      return (` ${num1} > ${num2} >= ${num3}`);
    }
    else return (` ${num1} > ${num3} > ${num2}`);
  }
  else if (num2 > num1 && num2 > num3) {
    if (num1 >= num3) {
      return (` ${num2} > ${num1} >= ${num3}`);
    }
    else return (` ${num2} > ${num3} > ${num2}`);
  }
  else if (num3 > num1 && num3 > num2) {
    if (num1 >= num2) {
      return (` ${num3} > ${num1} >= ${num2}`);
    }
    else return (` ${num3} > ${num2} > ${num1}`);
  }
  return("o maior valor nao pode ser igual");
}

function ProdutoParOuImpar(num1, num2) {
  produto = num1 * num2;
  if (produto % 2 === 0) {
    return (`o produto ${produto} é par`);
  }
  return (`o produto ${produto} é impar`);
}

function VerificaDiaUtil(dia) {
  let diasUteis =['segunda','terça','quarta','quinta','sexta'];
  let finaisDeSemana =['sábado','domingo'];
 
  if(diasUteis.find(dias => dias === dia.toLowerCase()) !== undefined){
    return ("Dia útil");
  }
  else if(finaisDeSemana.find(dias => dias === dia.toLowerCase()) !== undefined){
    return ("final de semana");
  }
  return ('valor nao reconhecido');
 
}

function MostrarOMesCorrespondente(mes) {
  switch (mes) {

    case 1:
      return ("Janeiro");
    case 2:
      return ("Fevereiro");
    case 3:
      return ("Março");
    case 4:
      return ("Abril");
    case 5:
      return ("Maio");
    case 6:
      return ("Junho");
    case 7:
      return ("Julho");
    case 8:
      return ("Agosto");
    case 9:
      return ("Setembro");
    case 10:
      return ("Outubro");
    case 11:
      return ("Novembro");
    case 12:
      return ("Dezembro");
    default:
      return ("numero nao é um mes");

  }
}

console.log(VerificaOValorDoNumero(-1));
console.log(VerificaSeEhMenorDeIdade(-19));
console.log(QualNumeroMaior(2,9,2));
console.log(ProdutoParOuImpar(3,5));
console.log(VerificaDiaUtil("DOMINGO"));
console.log(MostrarOMesCorrespondente(10));