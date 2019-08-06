/**
 * > FUNÇÕES
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
 * > CRIANDO FUNÇÕES
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
 * > DECLARAÇÃO FUNCTION
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

calculaRetangulo2(5, 10);