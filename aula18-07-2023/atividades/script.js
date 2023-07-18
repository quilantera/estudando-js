const alunos = [
    { nome: "João", idade: 20, nota: 8.5 },
    { nome: "Maria", idade: 19, nota: 9.2 },
    { nome: "Pedro", idade: 21, nota: 7.8 },
    { nome: "Ana", idade: 18, nota: 9.0 },
    { nome: "Lucas", idade: 22, nota: 8.2 },
    { nome: "Laura", idade: 20, nota: 7.5 },
    { nome: "Marcos", idade: 19, nota: 8.9 },
    { nome: "Carolina", idade: 21, nota: 6.7 },
    { nome: "Gabriel", idade: 19, nota: 8.3 },
    { nome: "Julia", idade: 20, nota: 9.5 }
  ];
  

let tabela = document.querySelector('.tabela-alunos');
var colunasTabela =` <tr>
<th>Nome</th>
<th>Idade</th>
<th>Nota</th>
</tr>`;

for (let aluno of alunos) {
    tabela.innerHTML  += `<tr>
    <td>  ${aluno.nome}  </td>
    <td>  ${aluno.idade}  </td>
    <td>  ${aluno.nota}  </td>
   </tr>`;
}
console.log(colunasTabela); 

// for(i = 0; i < alunos.length; i++) {
//     let aluno = alunos[i];
//     let linha = document.createElement('tr');
//     let colunaNome = document.createElement('td');
//     colunaNome.textContent = aluno.nome;
//     let colunaIdade = document.createElement('td');
//     colunaIdade.textContent = aluno.idade;
//     let colunaNota = document.createElement('td');
//     colunaNota.textContent = aluno.nota;
//     linha.appendChild(colunaNome);
//     linha.appendChild(colunaIdade);
//     linha.appendChild(colunaNota);
//     tabela.appendChild(linha);
// }