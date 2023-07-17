const listaDeNumeros = [42, 17, 95, 33, 68, 11, 79, 54, 23, 87 ];
const listaDeNomes = [ 'João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Souza', 'Carlos Pereira', 'Luciana Almeida', 'Fernando Costa', 'Camila Rodrigues', 'Rafaela Ferreira', 'Gustavo Lima' ];
  
//Crie uma função que receba um vetor de números e retorne a soma de todos os elementos.
function SomarElementosVetor(listaDeNumeros){
    let soma = 0;
    for(index of listaDeNumeros ){
        soma+= index;
    }
    console.log("Soma dos numeros do vetor:" + soma);
}
SomarElementosVetor(listaDeNumeros);
//Crie uma função que receba um vetor de palavras e retorne a concatenação de todas as palavras em uma única string.
function ConcatenarStrings(listaDeNomes){
    let stringResultante = ''
    for(let i in listaDeNomes){
        stringResultante += "/ "+listaDeNomes[i];
    }
    console.log(stringResultante);
}
ConcatenarStrings(listaDeNomes);

//Crie uma função que receba um vetor de números e retorne o maior valor presente no vetor.
function MostrarMaiorValor(listaDeNumeros){
    let maiorValor = listaDeNumeros[0];

    for (valorAtual of listaDeNumeros){
        if( maiorValor <=valorAtual){
            maiorValor = valorAtual;
        }
    }
    console.log(" O Maior Valor presente no vetor:" + maiorValor);
}
MostrarMaiorValor(listaDeNumeros);

//Crie uma função que receba um vetor de números e retorne a média dos elementos.

function CalcularMediaElementos(listaDeNumeros) {
    let media = 0;
    for (let valor of listaDeNumeros){
        media += valor;
    }
    media = media/listaDeNumeros.length;
    console.log("media ponderada dos elementos:"+media);
}
CalcularMediaElementos(listaDeNumeros);

//Dado um array de números, utilize o método map para retornar um novo array com cada número elevado a 2.
function AtualizarArray(listaDeNumeros){
    console.log(listaDeNumeros.map(numero => numero ** 2));
}
AtualizarArray(listaDeNumeros);

//Dado um array de palavras, utilize o método filter para retornar um novo array contendo apenas as palavras que começam com a letra 'A'.
function FiltrarPalavrasComLetraA(listaDeNomes){
    console.log(listaDeNomes.filter(nome => (nome.trim().charAt(0) ==="A")))
}
FiltrarPalavrasComLetraA(listaDeNomes);

//Dado um array de números, utilize o método forEach para imprimir no console cada número multiplicado por 3.
function ImprimirNumerosVetor(listaDeNumeros){
    listaDeNumeros.forEach(numero => console.log(numero * 3));
}
ImprimirNumerosVetor(listaDeNumeros);

//Dado um array de números, utilize o método includes para verificar se o número 10 está presente no array

function VerificarNumero10(listaDeNumeros){
    (listaDeNumeros.includes(10))? console.log("Possui o numero 10"): console.log("o numero 10 não está presente")
}
VerificarNumero10(listaDeNumeros);