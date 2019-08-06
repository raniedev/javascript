/**
 * > Funções
 * 
 * Função é um bloco de código capaz de realizar ações, como efetuar uma cálculo numérico ou manipular dados e retornar um valor para o 
 * programa principal. 
 * 
 * O bloco de código que constitui a função é denominado de corpo da função e, com o uso de sintaxe apropriada, criamos uma referência à função
 * atribuindo-lhe um nome ou uma variável para representá-la.
 * 
 * Uma vez criada a referência, ou seja, nomeada a função, podemos inseri-la em diferentes locais do programa, fazendo uso do seu nome, sem 
 * necessidade de repetir todo o corpo da função. O ato de inserir a referência a uma função no programa é conhecido como "chamar a função". 
 * Uma função é um exemplo de reutilização inteligente de código.
 * 
 * Contudo, repetição de código não é a única justificativa para criar funções. Criamos funções, também, com a finalidade de dar maior 
 * legibilidade ao programa e facilitar a manutenção. Em programas longos, é comum optar pela criação de um arquivo único contendo todas as 
 * funções utilizadas no script.
 * 
 * > Criando funções
 * 
 * Existem três sintaxes diferentes para se criar funções em Javascript.
 */

//Com o uso de declaração function
function minhaFuncao(){

};

//Com o uso do objeto construtor precedido da palavra-chave new
var minhaFuncao2 = new Function();

//Com o uso da sintaxe literal
var minhaFuncao3 = function(){

};

/**
 * > Declarar function
 * 
 * Funções criadas com o uso dessa sintaxe são denominadas funções estáticas.
 */

function ola(){
    console.log("Bem-vindo ao site.");
};

ola();

function ola2(){
    var nomeVisitante = prompt("Digite seu nome: ", "");
    nomeVisitante = (nomeVisitante) ? nomeVisitante : "Anônimo";
    console.log("Bem-vindo ao site: " + nomeVisitante);
};

ola2();

function calculaRetangulo(){
    var area = (7 * 4);
    var perimetro = (7 + 4) * 2;
    console.log("Área: " + area + "\nPerímetro: " + perimetro);
};

calculaRetangulo();

/**
 * Não há valor prático algum em desenvolver uma função para efetuar um cálculo baseado em dados imutáveis. O interessante seria desenvolver 
 * uma função capaz de efetuar o cálculo da área e perímetro de qualquer retângulo cuja base e altura fossem fornecidos.
 * 
 * Aqui entram em cena os argumentos de uma função...
 */

function calculaRetangulo2(b, h){
    var area = (b * h);
    var perimetro = (b + h) * 2;
    console.log("Área: " + area + "\nPerímetro: " + perimetro);
};

calculaRetangulo2(5, 10); //Lembrando que podemos também fazer que o usuário informe os argumentos

/**
 * > Function()
 * 
 * O construtor Function() é nativo da linguagem e destina-se a criar um objeto função.
 * var minhaFuncao = new Function(["arg1", "arg2", ... , "argn"], "corpo da função");
 * 
 * Ao construtor Function() é passada uma lista de strings que são os argumentos da função. A última string é o corpo da função e os argumentos 
 * anteriores são opcionais. A função é armazenada em uma variável definida pelo desenvolvedor.
 * 
 * Funções declaradas com o uso dessa sintaxe são denominadas funções anônimas e dinâmicas.
 */

var ola3 = new Function(console.log("Bem-vindo ao nosso site."));
console.log(ola3);
ola3();

var ola4 = new Function("var nomeVisitante = prompt('Por favor, digite seu nome: ', '');" +
    "nomeVisitante = (nomeVisitante) ? nomeVisitante : 'Visitante';" +
    "console.log('Bem-vindo ao nosso site: ' + nomeVisitante);"
);

ola4();

var calculaAreaRetangulo = new Function("return b * h;");

console.log(calculaAreaRetangulo(b = 10, h = 4));

/**
 * > Sintaxe Literal
 * 
 * Funções criadas com a sintaxe literal são também conhecidas como funções expressões. É armazenada em uma variável defina pelo desenvolvedor.
 * Funções declaradas com o uso dessa sintaxe são denominadas funções anônimas.
 */

var ola5 = function(){
    return "Bem-vindo ao meu site.";
};

console.log(ola5());

var ola6 = function(){
    var nomeVisitante = prompt("Nome: ", "");
    nomeVisitante = (nomeVisitante) ? nomeVisitante : "Curioso";
    return "Bem-vindo " + nomeVisitante;
};

console.log(ola6());

var calculaAreaRetangulo2 = function(b, h){
    return b * h;
};

calculaAreaRetangulo2(8, 7);


//> Retornando mais de um valor
function calculaRetangulo3(b, h){
    var area = b * h;
    var perimetro = (b + h) * 2;
    return area;
    return perimetro; //Não vai funcionar
};

function calculaRetangulo4(b, h){
    var area = b * h;
    var perimetro = (b + h) * 2;
    return [area, perimetro];
};

var resultados = calculaRetangulo4(3, 8);
console.log(typeof resultados);
console.log(resultados);
console.log(resultados[0]);

//> Retornando objeto
function calculaRetangulo5(b, h){
    var area = b * h;
    var perimetro = (b + h) * 2;    
    return {
        a: area,
        p: perimetro
    };
};

var resultados2 = calculaRetangulo5(8, 4);
console.log(typeof resultados2);
console.log(resultados2);
console.log(resultados2['a']);

//Passagem por referência
var referencia = calculaRetangulo5;
console.log(referencia(2, 6));


//> Escopo de uma Função