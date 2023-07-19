const btns = document.querySelectorAll('.pressable');
const btnAC = document.querySelector('#ac');
const btnCalc = document.querySelector('#calc');
const visor = document.querySelector('#display');

for(let btn of btns){
    btn.addEventListener("click", (evento) => {
        const display = visor.value;
        const text = evento.target.innerText;
        const ultimo = display[display.length-1]; // ultimo valor do display
        if(isOperator(text) && isOperator(ultimo)) {
            visor.value = display.slice(0, display.length-1) + text;
        }
        else {
            visor.value += text;
        }
    });
}
btnAC.addEventListener("click", () =>{
    display.value ='';
});
btnCalc.addEventListener("click", () =>{
    let expressao  = display.value.replaceAll(',','.');
    let resultado = eval(expressao).toString().replaceAll('.',',');
    display.value =resultado;
});
function isOperator(text) {
    switch(text) {
        case "+":
        case "-":
        case "/":
        case "x":
            return true;
        default:
            return false;
    }
}