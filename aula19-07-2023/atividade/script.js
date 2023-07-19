const vermelho = document.querySelector("#vermelho");
const amarelo = document.querySelector("#amarelo");
const verde = document.querySelector("#verde");
const acenderVermelho = document.querySelector("#acender-vermelho");
const acenderAmarelo = document.querySelector("#acender-amarelo");
const acenderVerde = document.querySelector("#acender-verde");
const acenderTodos = document.querySelector("#acender-todos");
const apagarTodos = document.querySelector("#apagar-todos");
const vetorSemaforo = [vermelho,amarelo,verde];
const rgb = ["rgb(226, 34, 34)","rgb(238, 225, 40)","rgb(38, 245, 30)"];
let intervalo ='';
function acenderSemaforo(sinal,color){
        for(sinais of vetorSemaforo){
            console.log(sinais);
            if(sinais == sinal){
                sinal.style.boxShadow = `0px 0px 15px 6px ${color}`
            }
            else{
                sinais.style.boxShadow = `0 4px 12px rgba(0,0,0,0.5)`
            }
        }
}
function acenderAutomaticamente(){
    intervalo = setInterval(() => {
    for (let i = 0; i < vetorSemaforo.length; i++) {
        (function (index) {
           
                setTimeout(() => {
                    acenderSemaforo(vetorSemaforo[index], rgb[index]);
                }, 2000);
            }, 2000 * (index + 1));
       
    }
     })(i);
}


acenderVermelho.addEventListener("click", ()=> {acenderSemaforo(vermelho,"rgb(226, 34, 34)")});
acenderAmarelo.addEventListener("click", ()=> {acenderSemaforo(amarelo, "rgb(238, 225, 40)")});
acenderVerde.addEventListener("click", ()=>{acenderSemaforo(verde,"rgb(38, 245, 30)")});
acenderTodos.addEventListener("click", acenderAutomaticamente);
apagarTodos.addEventListener("click", pararAcendimentoAutomatico);