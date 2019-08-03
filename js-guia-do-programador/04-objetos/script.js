/*
[Objetos]

Como criar e manipular objetos e as funcionalidades que fazem Javascript uma pseudolinguagem orientada a objetos.

> Objetos
Objeto é um tipo de dado constituído por uma coleção de dados, ou seja, é uma unidade que armazena dados formatados em pares nome/valor

Os valores do par nome/valor podem ser tanto valores primitivos (números e strings) como outros objetos.

> Criando objetos
Para criar um objeto vazio(sem propriedades), a sintaxe é a seguinte:
*/
var livro = new Object(); //Construtor

/*
Para popular um objeto, usamos o operador . (ponto). O operando à esquerda deve ser uma referência ao objeto, em geral o nome da variável que representa o objeto (no nosso exemplo, livro), e o operando à direita, o nome da propriedade ou método do objeto que é de nossa livre escolha. A seguir, usamos o operador de atribuição (=) para atribuir um valor à propriedade ou ao método.

> Sintase formal
Para definir uma propriedade do objeto livro denominada titulo, cujo valor seja a string "AJAX com JQuery":
*/
livro.titulo = 'AJAX com JQuery';
livro.autor = 'Maurício Samy Silva';
livro.paginas = 432;
livro.preco = 'R$69,00';
livro.freteSedex = function(cepOrigem, cepDestino, peso){//função fictícia
    var valorFrete = 'R$15,00';
    return valorFrete;
}

livro.capitulo1 = 'Revisão do AJAX';
livro.capitulo2 = 'Funções para requisições AJAX';
livro.capitulo3 = 'Eventos e miscelânea';
livro.capitulo4 = 'Requisições XML';
livro.capitulo5 = 'Introdução ao formato JSON';
livro.capitulo6 = 'Requisições JSON';

//Não há a necessidade de usar a palavra-chave var para as variáveis de um objeto, pois seu escopo é implicitamente local e refere-se ao objeto.

//Recuperando valores de propriedades e métodos de um objeto existente
var nomeAutor = livro.autor;
var valorFrete = livro.freteSedex(22050047, 69190120, 1060);

console.log(nomeAutor);
console.log(valorFrete);

//Há uma sintaxe alternativa para recuperar os valores de propriedades de um objeto que usa colchetes e aspas dentro [''] no lugar do operador .(ponto) conforme mostrada a seguir:
var nomeLivro = livro['titulo'];
var capituloCinco = livro['capitulo5'];

console.log(nomeLivro);
console.log(capituloCinco);

console.log("------------------------------------------");
var pares = "";
for(var prop in livro){
    pares += prop + ": " + livro[prop] + "\n";
}
console.log(pares);

/*
Um objeto é um conjunto de dados, então pode conter outros objetos como dados, ou seja, objetos podem ser aninhados.

Suponha que decidimos que os capítulos do livro devem estar contidos em um objeto chamado capitulos. A definição do objeto capitulos a ser aninhado ao objeto livro se faz como mostrado a seguir:
*/

delete livro.capitulo1;
delete livro.capitulo2;
delete livro.capitulo3;
delete livro.capitulo4;
delete livro.capitulo5;
delete livro.capitulo6;

livro.capitulos = new Object();
livro.capitulos.capitulo1 = 'Revisão do AJAX';
livro.capitulos.capitulo2 = 'Funções para requisições AJAX';
livro.capitulos.capitulo3 = 'Eventos e miscelânea';
livro.capitulos.capitulo4 = 'Requisições XML';
livro.capitulos.capitulo5 = 'Introdução ao formato JSON';
livro.capitulos.capitulo6 = 'Requisições JSON';

console.log(livro);

/*
> Sintaxe Literal
Existe outra sintaxe para criar objetos denominada sintaxe literal para objetos, que consiste em definir a coleção de nomes/valor separando os pares com vírgula e envolvendo a coleção em sinais de chaves {}.
*/
var livro2 = {
    'titulo': 'Matemática Aplicada',
    'autor': 'Ana Silva Nunes',
    'paginas': 627,
    'preco': 'R$89,00',
    'freteSedex': function(cepOrigem, cepDestino, peso){//função fictícia
        var valorFrete = 'R$12,00';
        return valorFrete;
    },
    'capitulos': {
        'capitulo1': 'Conjuntos',
        'capitulo2': 'Números Naturais',
        'capitulo3': 'Números Inteiros',
        'capitulo4': 'Números Racionais',
        'capitulo5': 'Números Irracionais',
        'capitulo6': 'Números Reais'
    }
};

console.log(livro2);

//Retorno das propriedades do objeto
console.log(livro2.titulo);
console.log(livro2['autor']);

console.log("------------------------------------------");
var pares2 = "";
for(var prop in livro2){
    pares2 += prop + ": " + livro2[prop] + "\n";
}
console.log(pares2);

/*
Note que sendo capitulos um objeto aninhado, suas propriedades não são retornadas no loop. Para retornar as propriedades do objeto capitulos, precisamos criar para ele um loop for/in aninhado conforme mostrado a seguir:
*/
console.log("------------------------------------------");
var pares3 = "";
for(var prop in livro2){
    if(typeof livro2[prop] == 'object'){
        for(var prop1 in livro2[prop]){
            pares3 += prop1 + ": " + livro2[prop][prop1] + "\n";
        }
    }else{
        pares3 += prop + ": " + livro2[prop] + "\n";
    } 
}
console.log(pares3);