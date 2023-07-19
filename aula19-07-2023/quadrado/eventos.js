const quadrado = document.querySelector("#quadrado");

quadrado.onclick = () =>{ // primeira forma de adicionar "ouvidor de eventos";
    quadrado.style.backgroundColor = "#053775";
}
quadrado.ondblclick = () =>{ 
    quadrado.style.transform = "translateY(-10px)";
    quadrado.style.backgroundColor = "#057521";

}
function changeBorderRadiusSquare(){ // esta forma está sendo chamada no html
    quadrado.style.borderRadius = "50%";
}
quadrado.addEventListener("mouseout", () =>{ // terceira forma de adicionar um "ouvidor de evento"
    quadrado.style.backgroundColor = "#f07167";
});