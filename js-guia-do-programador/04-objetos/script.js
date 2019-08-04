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
Para popular um objeto, usamos o operador . (ponto). O operando à esquerda deve ser uma referência ao objeto, em geral o nome da variável que 
representa o objeto (no nosso exemplo, livro), e o operando à direita, o nome da propriedade ou método do objeto que é de nossa livre escolha. 
A seguir, usamos o operador de atribuição (=) para atribuir um valor à propriedade ou ao método.

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

Suponha que decidimos que os capítulos do livro devem estar contidos em um objeto chamado capitulos. A definição do objeto capitulos a ser 
aninhado ao objeto livro se faz como mostrado a seguir:
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
Existe outra sintaxe para criar objetos denominada sintaxe literal para objetos, que consiste em definir a coleção de nomes/valor separando os 
pares com vírgula e envolvendo a coleção em sinais de chaves {}.
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
Note que sendo capitulos um objeto aninhado, suas propriedades não são retornadas no loop. Para retornar as propriedades do objeto capitulos, 
precisamos criar para ele um loop for/in aninhado conforme mostrado a seguir:
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


/*
> Construtor
O objeto livro com o uso do operador new e de uma função construtora nativa denominada Object(), denomina-se função construtora ou simplesmente 
construtor uma função capaz de criar objetos. Não estamos limitados a criar objetos com o uso de construtores nativos, pois podemos criar 
nossos construtores personalizados.
*/

//Definimos uma função construtora denominada Cilindro que admite dois argumentos: o raio da base do cilindro(r) e a altura do cilindro(h).
function Cilindro(r, h){
    //A palavra-chave, nativa da linguagem, this faz referência ao novo objeto criado, assim this raioBase é a variável que vai armazenar o raio da base do cilindro passado como argumento para o construtor.
    this.raioBase = r;
    //Mesma coisa para altura do cilindro.
    this.altura = h;
};

//Com o construtor Cilindro, criamos um objeto cilindro, denominado cilindroUm, com raio base igual a 2 e altura igual a 5.
cilindroUm = new Cilindro(2, 5);
console.log("Raio da base -> " + cilindroUm.raioBase + "\nAltura -> " + cilindroUm.altura);

/*
Vamos melhorar nosso construtor acrescentando alguns métodos, sabendo que métodos são funções de um objeto capaz de retornar algum valor ou 
realizar cálculos.

Conhecendo-se o raio da base(r) e a altura(h) de um cilindro circular reto, é possível determinar as seguintes grandezas do cilindro:
- Área da base: área do círculo de raio r: areaBase = πr2
- Área lateral: área da superfície lateral: areaLateral = 2πrh
- Área total: soma da área lateral com a área das bases: areaTotal = 2πrh + 2πr2
- Volume: área da base vezes a altura: volumes = πr2h

Nas fórumas de cálculo mostradas, aparecem os valores da constnte matemática π e a operação matemática potenciação r2. A linguagem Javascript possui um objto nativo que estudaremos ainda neste capitulo denominado Math, que, entre outras funcionalidades, retorna aconstante e reaiza potenciação.
*/
var x = 2, y = 3;

var pi = Math.PI; //retorna a constante PI: 3.141592...
var pot = Math.pow(x, y); //retorna x elevado à potência y

console.log(pi);
console.log(pot);

//Vamos criar as funções para cada um dos novos métodos.

function areaBase(){
    aBase = Math.PI * Math.pow(this.raioBase, 2); //calcula a área da base
    return aBase; // retorna a área da base
    //ou return Math.PI * Math.pow(this.raioBase, 2);
};


//Acrescentamos este método ao construtor
function Cilindro1(r, h){
    this.raioBase = r;
    this.altura = h;
    this.areaBase = calculaAreaBase;
};

function calculaAreaBase(){
    return Math.PI * Math.pow(this.raioBase, 2); //Este argumento this vai pegar o raioBase de Cilindro1
};

cilindroDois = new Cilindro1(2, 5);
console.log("Raio da base -> " + cilindroDois.raioBase + "\nAltura -> " + cilindroDois.altura + "\nÁrea da base -> " + cilindroDois.areaBase());

/*
Modo alternativo

function Cilindro1(r, h){
    this.raioBase = r;
    this.altura = h;
    this.areaBase = function calculaAreaBase(){
        return Math.PI * Math.pow(this.raioBase, 2);
    };
};


A área da base é um número com 15 casas decimais e, na prática, apresentar um resultado com essa precisão não é usual. Por enquanto, tenha em mente que há uma função existente na linguagem Javascript que se destina a arredondar valores.
*/
function Cilindro2(r, h){
    this.raioBase = r;
    this.altura = h;
    this.areaBase = function calculaAreaBase(){
        aBase = Math.PI * Math.pow(this.raioBase, 2);
        return aBase;
    };
    this.areaLateral = function calculaAreaLateral(){
        return 2 * Math.PI * this.raioBase * this.altura;
    };
    this.areaTotal = function calculaAreaTotal(){
        return 2 * aBase + this.areaLateral();
    };
    this.volume = function calculaVolume(){
        return aBase * this.altura;
    };
};

cilindroTres = new Cilindro2(3, 10);
console.log("------------------------------------------");
console.log("Raio da base -> " + cilindroTres.raioBase + "\nAltura -> " + cilindroTres.altura + "\nÁrea Base -> " + cilindroTres.areaBase()
        + "\nÁrea Lateral -> " + cilindroTres.areaLateral() + "\nÁrea Total -> " + cilindroTres.areaTotal());

/*
> Referência
O conceito de referência diz respeito à maneira de se apontar uma variável para um objeto. A própria estrutura de um objeto é construída com 
base em referências, pois propriedades e métodos nada mais são do que referências para outros objetos(strings, números, funções etc.). Podemos 
dizer que criar uma referência significa apontar uma variável para um objeto.

> Categorias de Objetos
Os objetos da linguagem podem ser agrupados em três categorias:
- objetos nativos: aqueles próprios da linguagem;
- objetos do ambiente de hospedagem: aqueles próprios do dispositivo que interpreta a linguagem(um navegador gráfico, por exemplo);
- objetos customizados: aqueles criados pelo desenvolvedor;

Os objetos nativos do Javascript são: Array, Boolean, Date, Error, EvalError, Function, Math, Number, Object, RangeError, ReferenceError, 
RegExp, String, SintaxeError, TypeError e URIError.*/