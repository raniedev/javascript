/* Strings

> String como tipo de dado
Os literais strings, na sintaxe Javascript, são os conjuntos de zero ou mais caracteres envolvidos por aspas duplas("") ou aspas simples(''). 
String são textos.

> String como objeto
String é um objeto global da linguagem Javascript usado para criar instâncias de strings, que, por sua vez, se destinam a armazenam textos. As 
propriedades e métodos do objeto String permitem manipular os textos nele armazenados.

> Criando Strings
Existem duas sintaxes diferentes para se criar uma string conforme mostrado a seguir:
*/

//- Atribuir a string a uma variável:
var texto1 = "minha string"

//- Com o uso do objeto construtor precedido da palavra-chave new:
var texto2 = new String("minha string")

/*
> Propriedades das strings
As propriedades do objeto String são listadas a seguir: length, constructor e prototype

length
A propriedade length do objeto string destina-se a inspecionar o número de caracteres na string. Inclui espaços em branco e caracteres 
especiais.
*/
function sLength(){
    var s = document.form.texto.value;
    if(s != ''){
        document.form.comprimento.value = s.length;
    }else{
        document.form.texto.value = "Entre uma string";
    }
};


// constructor
// A propriedade constructor é uma referência à função que cria um objeto. 
var texto3 = new String("Minha string");
window.onload = function(){
    console.log(texto3.constructor);
};

/*
prototype
A propriedade prototype permite adicionar novas propriedades e/ou métodos a um objeto já existente. Trata-se de uma propriedade comum a 
todos os objetos e seu emprego para o objeto String é pouco usual. 

> Métodos para strings

charAt(índice)
O método charAt() retorna o caractere da string que ocupa a posição definida no parâmetro índice. O primeiro caractere da string ocupa o índice 0(zero) e o último, o índice igual a string.length-1.
*/

function scharAt(){
    var texto = "mau%\SR=+t$@ 098mu hjor \\\a"; //Uma string qualquer
    var indice = Number(document.form2.indice.value); //O texto do input é salvo na variável
    if(isFinite(indice) && indice >= 0 && indice <= texto.length - 1){ //Se for finito, maior ou igual a 0 e menor que o tamanho possível da string, faça:
        document.form2.resultado.value = texto.charAt(indice); //Exibe no input a posição correspondente passada
    }else{
        console.log("Entre um índice válido."); //Índice passado é negativo ou maior do tamanho da string e  pede um índice válido
    }
};

