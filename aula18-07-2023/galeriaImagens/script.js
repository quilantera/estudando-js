const imagens =[
    "https://images.unsplash.com/photo-1526095484820-9474eda81596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1517837543704-3617ae61a835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    "https://images.unsplash.com/photo-1535393857990-03242fe70580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    "https://images.unsplash.com/photo-1662115674634-81486ed38978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1662115674601-e2a5d71fbc01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
]
let indiceAtual =0;

function galeria(){
    let imagem = document.querySelector("#galeria");
    imagem.style.transform = "translateX(-100%)"; 
    imagem.src = imagens[indiceAtual];
   
    if(indiceAtual === imagens.length-1){
        indiceAtual = 0;
    }
    setTimeout(function() {
        imagem.src = imagens[indiceAtual];
        imagem.style.transition = 'all 0.5s ease-out';
        imagem.style.transform = "translateX(0)"; // Move a imagem de volta para a posição inicial
      }, 1000);
    indiceAtual++;
}

setInterval(galeria, 4000);