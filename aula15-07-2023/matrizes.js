const vetor1 = [1,2,3,4];//unidimensional
const vetor2 = [11,12,13,14];
const vetor3 = [21,22,23,24];
const vetor4 = [31,32,33,34];

const matriz =[vetor1,vetor2,vetor3,vetor4];//bidimensional

console.log(matriz[0]);
console.log(matriz[0][3]);

const matriz3d = [
    [   // matriz3d[0]
        [1,2],// matriz3d[0][0]
        [3,4] // matriz3d[0][1]
    ],
    [   //matriz3d[1]
        [5,6],// matriz3d[1][0]
        [7,8] // matriz3d[1][1]
    ]
]
console.log(matriz3d[0][1][0]);  //

const matriz3x3 =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i=0; i<matriz3x3.length; i++){
    console.log(vetor1[i]);
}