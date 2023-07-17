// Objeto -> estrutura que representa um objeto do mundo real( EX. Produto, Pessoa, Profissão)
// O Objeto pode ser modelado -> Classe(class sempre comeca com letra maiuscula) 
class Livro{
    titulo;
    paginas;
    autor;
    volume;
    isbn;
    alugar = function(){
        console.log("alugado!");
    }
    constructor(titulo, paginas, autor, volume, isbn){
        this.titulo = titulo;
        this.paginas = paginas;
        this.autor = autor;
        this.volume = volume;
        this.isbn = isbn;
    };
} 
// para criar a estrutura "fisica" do objeto pela classe é necessario fazer uma INSTANCIA
let arqLimpa = new Livro();

//console.log(typeof arqLimpa);

arqLimpa.titulo= "arquitetura limpa";
arqLimpa.autor= "Robert C. Martin";
arqLimpa.paginas= 400;
arqLimpa.isbn = "978-023-12-5062-56";
console.log(arqLimpa);
arqLimpa.alugar();
